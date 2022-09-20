import Papa from "papaparse"

import { Icon, Selector } from "./config.data"

import fetchPage, { FetchPageResponse, PageSchema, PropertyType } from "./fetchPage"
import fetchCollectionItems from "./fetchCollectionItems"
import fetchSpaceInfo from "./fetchSpaceInfo"
import fetchSpaces from "./fetchSpaces"
import fetchUserInfo from "./fetchUserInfo"
import getNotionHttpConfig from "./getNotionHttpConfig"

type Status = { status: "not begun" | "working" | "finished" | "terminated", msg: string, data: any, errs: string[] }

function toCsv(data: { [key: string]: any }[]) {

    const keyRow = Object.keys(Object.values(data).reduce((obj, i) => ({ ...obj, ...i })))

    const peopleRows = Object.values(data).map(i => Array(keyRow.length).fill(null).map((_, idx) => i?.[keyRow[idx]] ?? null))

    return [keyRow, ...peopleRows]
}

// 04418b8e32c44266a9bbd76acabbc092 => 04418b8e-32c4-4266-a9bb-d76acabbc092
const insertDashesIntoUuid = (uuid: string) => `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`

const getSchema = (pageData: FetchPageResponse) => {

    const info = Object.values(pageData?.recordMap?.collection ?? {})?.[0]?.value?.value

    const { schema = null, id = null } = info ?? {}

    const pageHasDb = schema != null && id != null

    return { schema, id, pageHasDb }
}

// response ends with [null, { title: [["People"]] }, null, null, { title: [["Knowledge Space"]] }], not sure if this is always the case
type MetaData = [null, { title: [[string]] }, null, null, { title: [[string]] }]

const getCollectionInfo = (collectionData: any) => {

    const props = Object.values(collectionData?.recordMap?.block ?? {}).map(i => i?.value?.properties) as any[] & MetaData

    const [, { title: [[collectionTitle]] }, , , { title: [[spaceTitle]] }] = props.slice(-5) as any as MetaData

    const items = props.slice(0, -5)

    return { items, collectionTitle, spaceTitle }
}
const getName = (pageData: any) => {

    const name = Object.values(pageData?.recordMap?.collection ?? {})?.[0]?.value?.value?.name?.[0]?.[0]

    if (name == null) console.error("failed to locate name")

    return name
}
const getViewIds = (pageData: any) => {

    const viewIds = Object.values(pageData?.recordMap?.block ?? {})?.[0]?.value?.value?.view_ids

    if (viewIds == null || viewIds?.length === 0) console.error("failed to locate view ids")

    return viewIds
}
const getDbBlocks = (dings: any) => {

    const huch = Object.values(dings?.recordMap?.block ?? {})?.filter(i => typeof i?.value?.value?.collection_id === "string")

    return huch
}

const pageCache: { [key: string]: any } = {}

const loadPage = async (key: string) => {

    if (!(key in pageCache)) pageCache[key] = fetchPage(key)

    return await pageCache[key]
}

const collectionCache: { [key: string]: any } = {}

const loadCollection = async (collectionId: string, viewId: string) => {

    const key = collectionId + ":" + viewId

    if (!(key in collectionCache)) collectionCache[key] = fetchCollectionItems(collectionId, viewId)

    return await collectionCache[key]
}

const getValues = async (value: string, type: PropertyType): Promise<string[]> => {

    const values = await Promise.all(value.map(async (i: any) => {

        if (!Array.isArray(i)) return i

        if (i?.length === 1) return i[0]

        const [signifier, [[pi, foreignKey, spaceId]]] = i

        if (signifier === ",") return null

        if (signifier === "‣") {

            try {
                const foreignDb = await loadPage(foreignKey)

                // const foreignDbSchema = getSchema(foreignDb)

                const collectionId = getDbBlocks(foreignDb)?.[0]?.value?.value?.collection_id

                const viewId = Object.keys(foreignDb?.recordMap?.collection_view ?? {})?.[0]

                if (collectionId == null || viewId == null) return "AMOGUS"

                const huch = await loadCollection(collectionId, viewId)

                const keyToValue = Object
                    .entries(huch.recordMap.block)
                    .reduce((obj, [key, i]) => ({ ...obj, [key]: i?.value?.properties?.title?.[0]?.[0] }), {})

                return keyToValue[foreignKey]

            } catch (err) {

                console.error("uncaught error")

                return null
            }
        }
        return null
    }))
    return values
}

const toNewEntries = (peopleSchema: PageSchema) => async ([key, value]: any): Promise<[string, string[]]> => {

    const { name, type } = peopleSchema[key] ?? { name: key, type: "N/A" }

    const values = await getValues(value, type as any)

    return [name, values]
}
const toNewPerson = (peopleSchema: PageSchema) => async (i: any) => {

    const newEntryPromises = Object.entries(i ?? {})?.map(toNewEntries(peopleSchema))

    const newPerson = Object.fromEntries(await Promise.all(newEntryPromises))

    return newPerson
}

async function doWork(currentSpace: any, currentPageId: string, userId: string, step: (status: Status) => void) {

    step({ status: "working", msg: "Fetching Page Info...", data: null, errs: [] })

    const pageData = await fetchPage(currentPageId)

    const { schema: collectionSchema, id: collectionId } = getSchema(pageData)

    const spaceId = currentSpace?.id

    const viewId = getViewIds(pageData)?.[0]

    const httpConfig = getNotionHttpConfig(userId, spaceId, currentPageId)

    if (collectionSchema == null || collectionId == null || spaceId == null || viewId == null) {

        step({ status: "terminated", msg: "something went wrong", data: null, errs: ["Failed to Gather Notion Info"] })

        return
    }
    step({ status: "working", msg: "Fetching Database Rows...", data: null, errs: [] })

    // can go wrong
    const data = await fetchCollectionItems(collectionId, viewId)

    // can go wrong
    const { items, collectionTitle, spaceTitle } = getCollectionInfo(data)

    step({ status: "working", msg: `Processing ${items.length} Rows...`, data: null, errs: [] })

    const dings = items.map(toNewPerson(collectionSchema))

    // can go wrong
    const refinedItems = await Promise.all(dings)

    step({ status: "working", msg: `Preparing Transform to CSV...`, data: null, errs: [] })

    const csvArr = toCsv(refinedItems)

    step({ status: "working", msg: `Creating CSV File...`, data: null, errs: [] })

    const csvStr = Papa.unparse(csvArr)

    // encode characters that cause btoa() to throw
    const utf8Csv = unescape(encodeURIComponent(csvStr))

    // base64 csv string and create data url
    const dataUrl = "data:text/csv;base64," + btoa(utf8Csv)

    const fileName = spaceTitle + "-" + collectionTitle + "-db.csv"

    step({ status: "finished", msg: `Ready to Download`, data: { dataUrl, fileName }, errs: [] })
}

function updateStatus(state: Status) {

    const { status, msg, data, errs } = state;

    (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = msg

    if (status === "finished") {

        (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = Icon.DOWNLOAD;

        (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = `<a href="${data.dataUrl}" download="${data.fileName}" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; flex-shrink: 0; white-space: nowrap; border-radius: 3px; font-size: 14px; line-height: 1; min-width: 0px; color: rgb(46, 170, 220); font-weight: 400; text-decoration: underline" class="notion-focusable">Download Database</a>`

        // (document.querySelector(Selector.CONTROLS_PARENT) as HTMLElement).insertAdjacentHTML("beforeend", `<a href="${data.dataUrl}" download="${data.fileName}" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; flex-shrink: 0; white-space: nowrap; height: 28px; border-radius: 3px; font-size: 14px; line-height: 1; min-width: 0px; padding: 6px; color: rgb(46, 170, 220); font-weight: 400;" class="notion-focusable">Download</a>`)
    }
    if (status === "terminated") {

        (document.querySelector(Selector.CONTROLS_PARENT) as HTMLElement).insertAdjacentHTML("beforeend", errs.map(i => `<div>${i}</div>`).join(""))
    }
}

interface SpaceViewPointer {
    id: string // uuid of view
    table: "space_view",
    spaceId: string // uuid of space
}

async function getCurrentSpace() {

    // notion annoyingly messes with the url while loading, so this has to be gotten as soon as possible
    const [, currentSpaceDomain, currentPageId, ...rest] = window.location.pathname.split("/")

    const spaces = await fetchSpaces()

    const { user_id: userId } = await fetchUserInfo()

    const spaceAndViewIds = Object.values(Object.values(spaces ?? {})?.[0]?.user_root ?? {})?.[0]?.value?.value?.space_view_pointers as SpaceViewPointer[]

    const spaceInfo = await fetchSpaceInfo(spaceAndViewIds.map(i => i.spaceId))

    const combined = spaceAndViewIds.map((i, idx) => ({ viewId: i.id, ...spaceInfo.results[idx] }))

    const currentSpace = combined.filter(i => currentSpaceDomain === i.domain)?.[0]

    return { currentSpace, currentPageId: insertDashesIntoUuid(currentPageId), userId }
}

async function waitForElement(selector: string) {

    return new Promise<HTMLElement>((res) => {

        const ding = () => {

            const el = document.querySelector(selector)

            if (el == null) setTimeout(ding, 100)
            else res(el as HTMLElement)
        }
        ding()
    })
}

async function main() {

    const { currentSpace, currentPageId, userId } = await getCurrentSpace()

    const controlsParent = await waitForElement(Selector.CONTROLS_PARENT)

    const pageData = await fetchPage(currentPageId)

    const { pageHasDb } = getSchema(pageData)

    controlsParent.insertAdjacentHTML("beforeend", `<div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; border-radius: 3px; margin-left: 4px; margin-right: 4px; width: calc(100% - 8px);" class="notion-focusable" role="button" tabindex="0"><div style="display: flex; align-items: center; width: 100%; font-size: 14px; min-height: 27px; padding: 2px 10px; margin-top: 1px; margin-bottom: 1px;"><div style="flex-shrink: 0; flex-grow: 0; border-radius: 3px; color: rgba(55, 53, 47, 0.65); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; margin-right: 8px;">${Icon.DEFAULT}</div><div style="flex: 1 1 auto; white-space: nowrap; min-width: 0px; overflow: hidden; text-overflow: ellipsis;" class="linus-controls">${pageHasDb ? "Download Database" : "No Database Found"}</div></div></div>`);

    if (!pageHasDb) return

    (document.querySelector(Selector.CONTROLS) as HTMLElement).onclick = () => {

        (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = Icon.WORKING

        doWork(currentSpace, currentPageId, userId, updateStatus)
    }
}
main()