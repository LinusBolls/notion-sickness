import fetchCollectionItems from "../notionRequests/fetchCollectionItems";
import fetchPage, { PageSchema, PropertyType } from "../notionRequests/fetchPage";
import getCollectionInfo from "../util/getCollectionInfo";
import { getPageInfo } from "../util/getCurrentPageInfo";
import getCoverImgFromPageData from "./getCoverImgFromPageData";

const pageCache: { [key: string]: any } = {}

const loadPage = async (key: string) => {

    if (!(key in pageCache)) pageCache[key] = fetchPage(key)

    return await pageCache[key]
}

const collectionCache: { [key: string]: any } = {}

const loadCollection = async (spaceId: string, collectionId: string, viewId: string) => {

    const key = collectionId + ":" + viewId

    if (!(key in collectionCache)) collectionCache[key] = fetchCollectionItems(spaceId, collectionId, viewId)

    return await collectionCache[key]
}

type PageId = string
type SpaceId = string
type Url = string // can also be phone nr

type ThreeDing = ["p", PageId, SpaceId]
type TwoDing = ["a", Url]

type Seperator = [","]

type RelationValue = (["‣", [ThreeDing]] | Seperator)[]

type LinkValue = ([Url, [TwoDing]] | Seperator)[] // both urls can be empty!, not entirely sure if can have seperators but just to be sure

type PlainValue = string[][]

type PropertyValue = RelationValue | LinkValue | PlainValue

const toRefinedItem = (schema: PageSchema) => async (i: any) => {

    const { props, id } = i;

    const { coverImgUrl, created_time, last_edited_time } = await getCoverImgFromPageData(id)

    const newEntryPromises = Object.entries(props ?? {})?.flatMap(toNewEntries(schema))

    const { undefined, ...newProps } = Object.fromEntries(await Promise.all(newEntryPromises))

    const metaData = {
        "Notion Cover Image Url": coverImgUrl,
        "Notion Id": id,
        // @ts-ignore
        "Notion Created Time": new Date(created_time).toString(),
        // @ts-ignore
        "Notion Last Edited Time": new Date(last_edited_time).toString(),
    }
    return { props: newProps, ...metaData }
}

const toNewEntries = (schema: PageSchema) => async ([key, value]: any): Promise<[string, string[]][]> => {

    if (!(key in schema)) return []

    // @ts-ignore
    const { name, type } = schema[key]

    const values = (await getValues(value, type, key, name)).filter(i => i != null)

    return [name, values]
}

const isPlainValue = (value: PropertyValue): value is PlainValue => value[0]?.length === 1
const isLinkValue = (value: PropertyValue): value is LinkValue => value[0]?.[1]?.[0]?.[0] === "a"
// [["Aisling Keane",[["b"],["b"]]]]
const isBValue = (value: PropertyValue): boolean => value[0]?.[1]?.[0]?.[0] === "b"
const isRelationValue = (value: PropertyValue): value is RelationValue => value[0]?.[1]?.[0]?.[0] === "p"

const getValues = async (value: PropertyValue, type: PropertyType, key: string, name: string): Promise<string[]> => {

    if (isPlainValue(value)) return value[0] as string[]
    // @ts-ignore
    if (isLinkValue(value)) return [value[0][0]]
    // @ts-ignore
    if (isBValue(value)) return [value[0][0]]

    if (isRelationValue(value)) return Promise.all(value.filter(i => i[0] !== ",").map(async i => {

        // @ts-ignore
        const [signifier, [[pi, pageId, spaceId]]] = i

        try {
            const foreignPage = await loadPage(pageId)

            const { viewId, collectionId, hasCollection } = getPageInfo(foreignPage);

            if (!hasCollection) return null

            const collectionData = await loadCollection(collectionId, collectionId, viewId)

            const { foreignKeyToTitle } = getCollectionInfo(collectionData)

            // @ts-ignore
            return foreignKeyToTitle[pageId]

        } catch (err) {

            console.error("error inside getValues:", err)

            return null
        }
    }))
    return []
}
export default toRefinedItem