import Papa from "papaparse"
// import { json2xml } from "xml-js";

import { Icon, Selector, Text } from "./config.data"
import fetchPage, { PageSchema, PropertyType } from "./fetchPage"
import fetchCollectionItems from "./fetchCollectionItems"
import openExportPopup from "./openExportPopup"
import getCoverImgFromPageData from "./getCoverImgFromPageData"
import JSZip from "jszip"

async function getAssetZip(items: any[]): Promise<Blob> {

    const assetZip = new JSZip();

    for (const [key, item] of Object.entries(items)) {

        const imgUrl = item["Notion Cover Image Url"]

        const id = item["Notion Id"]

        const imgDataUrl = sessionStorage.getItem(`[asset][${imgUrl}]`)

        if (imgDataUrl == null) continue;

        const extension = getExtensionFromDataUrl(imgDataUrl)

        const idx = imgDataUrl.indexOf("base64,") + "base64,".length;

        const filename = `${id}-cover.${extension}`

        const content = imgDataUrl.substring(idx);

        assetZip.file(filename, content, { base64: true });
    }
    return new Promise(res => {
        assetZip.generateAsync({ type: "blob" }).then(res);
    })
}

// src: https://stackoverflow.com/a/48789311
function jsonToXml(obj: any) {
    let xml = '';
    for (const prop in obj) {
        xml += "<" + prop + ">";
        if (Array.isArray(obj[prop])) {
            for (const array of obj[prop]) {

                // A real botch fix here
                xml += "</" + prop + ">";
                xml += "<" + prop + ">";

                xml += jsonToXml(new Object(array));
            }
        } else if (typeof obj[prop] == "object") {
            xml += jsonToXml(new Object(obj[prop]));
        } else {
            xml += obj[prop];
        }
        xml += "</" + prop + ">";
    }
    xml = xml.replace(/<\/?[0-9]{1,}>/g, '');

    return xml
}

const getExtensionFromDataUrl = (dataUrl: string) => (dataUrl.substring(dataUrl.indexOf(":") + 1, dataUrl.indexOf(";"))).split("/")[1]

type Status = { status: "not begun" | "working" | "finished" | "terminated", msg: string, data: any, errs: string[] }

function toCsv(data: any[], additionalKeys: string[]) {

    const flattenedData = data.map(({ props, ...rest }) => ({ ...props, ...rest }))

    const foo = Object.values(flattenedData).reduce((obj, i) => ({ ...obj as any, ...i as any }), {})

    const keyRow = Object.keys(foo)

    const allKeysRow = [...keyRow, ...additionalKeys]

    const valueRows = Object.values(flattenedData).map(i => Array(allKeysRow.length).fill(null).map((_, idx) => i?.[allKeysRow[idx] as string] ?? null))

    return [allKeysRow, ...valueRows]
}

// response ends with [null, { title: [["People"]] }, null, null, { title: [["Knowledge Space"]] }], not sure if this is always the case
type MetaData = [null, { title: [[string]] }, null, null, { title: [[string]] }]

const getCollectionInfo = (collectionData: any) => {

    const props = Object.values(collectionData?.recordMap?.block ?? {}).map((i: any) => ({ props: i?.value?.value?.properties, id: i?.value?.value?.id })) as any[] & MetaData

    const isEmpty = props.slice(-5).every(i => i.props == null)

    if (isEmpty) console.error("collection is empty")

    const [, { title: [[collectionTitle]] }, , , { title: [[spaceTitle]] }] = props.map((i: any) => i.props).slice(-5) as any as MetaData

    const items = props.slice(0, -5)

    return { items, collectionTitle, spaceTitle }
}
const getDbBlocks = (dings: any) => {

    const huch = Object.values(dings?.recordMap?.block ?? {})?.filter((i: any) => typeof i?.value?.value?.collection_id === "string")

    return huch
}

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

// [
//     [
//       "https://codeuniversity.slack.com/team/UA6RCN6FL",
//       [
//         [
//           "a",
//           "https://codeuniversity.slack.com/team/UA6RCN6FL"
//         ]
//       ]
//     ]
// ]
// [
//     [
//       "William Dry"
//     ]
// ]
// [
//     [
//       "‣",
//       [
//         [
//           "p",
//           "3b66ccc2-9bcd-46f8-aba8-674abaf33a7c",
//           "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
//         ]
//       ]
//     ],
//     [
//       ","
//     ],
//     [
//       "‣",
//       [
//         [
//           "p",
//           "5b8dc266-cf7b-49f8-9f15-fa22ec02e472",
//           "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
//         ]
//       ]
//     ]
// ]
const isPlainValue = (value: PropertyValue): value is PlainValue => value[0]?.length === 1
const isLinkValue = (value: PropertyValue): value is LinkValue => value[0]?.[1]?.[0]?.[0] === "a"
const isRelationValue = (value: PropertyValue): value is RelationValue => value[0]?.[1]?.[0]?.[0] === "p"
// [["Aisling Keane",[["b"],["b"]]]]
const isBValue = (value: PropertyValue): boolean => value[0]?.[1]?.[0]?.[0] === "b"

const getValues = async (value: PropertyValue, type: PropertyType, key: string): Promise<string[]> => {

    if (isPlainValue(value)) return value[0] as string[]
    // @ts-ignore
    if (isLinkValue(value)) return [value[0][0]]
    // @ts-ignore
    if (isBValue(value)) return [value[0][0]]

    return Promise.all(value.filter(i => i[0] !== ",").map(async i => {

        // @ts-ignore
        const [signifier, [[pi, pageId, spaceId]]] = i

        try {
            const foreignPage = await loadPage(pageId)

            // @ts-ignore
            const collectionId = getDbBlocks(foreignPage)?.[0]?.value?.value?.collection_id

            const viewId = Object.keys(foreignPage?.recordMap?.collection_view ?? {})?.[0]

            const wasPageDeleted = collectionId == null || viewId == null

            if (wasPageDeleted) return undefined

            const huch = await loadCollection(collectionId, collectionId, viewId)

            const keyToValue = Object
                .entries(huch.recordMap.block)
                .reduce((obj, [key, i]: any) => ({ ...obj, [key]: i?.value?.properties?.title?.[0]?.[0] }), {})

            // @ts-ignore
            return keyToValue[pageId]

        } catch (err) {

            console.error("uncaught error")

            return null
        }
    }))
}

const toNewEntries = (schema: PageSchema) => async ([key, value]: any): Promise<[string, string[]][]> => {

    if (!(key in schema)) return []

    // @ts-ignore
    const { name, type } = schema[key]

    // const values = (await getValues(value, type, key)).filter(i => i != null && i !== ",")

    const values = (await getValues(value, type, key)).filter(i => i != null)

    // const isEqual = values.every((i, idx) => newValues[idx] === i)

    // if (!isEqual) console.log("not equal:", { values, newValues })

    return [name, values]
}
const toNewPerson = (schema: PageSchema) => async (i: any) => {

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

async function doWork(spaceId: string, currentPageId: string, userId: string, viewId: string, collectionId: string, collectionSchema: any, step: (status: Status) => void) {

    // @ts-ignore
    this.status = { status: "working", msg: "Fetching Page Info...", data: null, errs: [] }

    // @ts-ignore
    const rollups = Object.values(collectionSchema ?? {}).filter(i => i.type === "rollup").map(i => i.name + " (NOTION-SICKNESS DOES NOT SUPPORT ROLLUP PROPERTIES YET)")
    // @ts-ignore
    const formulas = Object.values(collectionSchema ?? {}).filter(i => i.type === "formula").map(i => i.name + " (NOTION-SICKNESS DOES NOT SUPPORT FORMULA PROPERTIES YET)")

    const unimplementedKeys = [...rollups, ...formulas]

    if (collectionSchema == null || collectionId == null || spaceId == null || viewId == null) {

        step({ status: "terminated", msg: "something went wrong", data: null, errs: ["Failed to Gather Notion Info"] })

        return
    }
    step({ status: "working", msg: "Fetching Database Rows...", data: null, errs: [] })

    let data;

    try {
        data = await fetchCollectionItems(spaceId, collectionId, viewId)

    } catch (err) {

        step({ status: "terminated", msg: "Error Fetching Rows", data: null, errs: [] })

        return
    }

    let collectionInfo: any;

    try {
        collectionInfo = getCollectionInfo(data)

    } catch (err) {

        step({ status: "terminated", msg: "Error Getting Collection", data: null, errs: [] })

        return
    }
    const { items, collectionTitle, spaceTitle } = collectionInfo

    step({ status: "working", msg: `Processing ${items.length} Rows...`, data: null, errs: [] })

    const dings = items.map(toNewPerson(collectionSchema))

    // can go wrong
    const refinedItems = await Promise.all(dings)

    const csvArr = toCsv(refinedItems, unimplementedKeys)

    const csvStr = Papa.unparse(csvArr)

    const jsonStr = JSON.stringify(refinedItems);

    // const xmlStr = json2xml(jsonStr, { compact: true })

    const xmlStr = jsonToXml(jsonStr)

    // encode characters that cause btoa() to throw
    const removeNonUtf8Chars = (str: string) => unescape(encodeURIComponent(str))

    // base64 csv string and create data url
    const csvDataUrl = "data:text/csv;base64," + btoa(removeNonUtf8Chars(csvStr))

    const jsonDataUrl = "data:application/json;base64," + btoa(removeNonUtf8Chars(jsonStr))

    const xmlDataUrl = "data:application/xml;base64," + btoa(removeNonUtf8Chars(xmlStr))

    const assetZip = await getAssetZip(refinedItems);

    const assetZipUrl = await new Promise<string>(res => {
        const reader = new FileReader();

        reader.addEventListener("load", () => {

            res(reader.result as string)

        }, false);

        reader.readAsDataURL(assetZip);
    })
    const fileName = spaceTitle + "-" + collectionTitle + "-db";

    // @ts-ignore
    this.status = { status: "finished", msg: `Ready to Download`, data: {}, errs: [] }

    step({
        status: "finished", msg: `Ready to Download`, data: {
            collectionTitle, files: {
                csv: {
                    name: fileName + ".csv",
                    url: csvDataUrl,
                },
                xml: {
                    name: fileName + ".xml",
                    url: "",
                },
                json: {
                    name: fileName + ".json",
                    url: jsonDataUrl,
                },
                assetZip: {
                    name: fileName + "-assets.zip",
                    url: assetZipUrl
                }
            }
        }, errs: []
    })
}

function updateStatus(state: Status) {

    const { status, msg, data, errs } = state;

    (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = msg

    if (status === "finished") {

        (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = Icon.DOWNLOAD;

        // (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = `<a href="${data.dataUrl}" download="${data.fileName}" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; flex-shrink: 0; white-space: nowrap; border-radius: 3px; font-size: 14px; line-height: 1; min-width: 0px; color: rgb(46, 170, 220); font-weight: 400; text-decoration: underline" class="notion-focusable">${Text.DOWNLOAD}</a>`

        (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = `<button style="border: none; background: none; text-decoration: none !important ; user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: flex; align-items: center; flex-shrink: 0; white-space: nowrap; border-radius: 3px; font-size: 14px; line-height: 1; min-width: 0px; color: rgb(46, 170, 220); font-weight: 400; text-decoration: underline" class="notion-focusable">${Text.DOWNLOAD}</button>`;

        (document.querySelector(Selector.CONTROLS + " button") as HTMLElement).onclick = () => openExportPopup(data)

        // (document.querySelector(Selector.CONTROLS_PARENT) as HTMLElement).insertAdjacentHTML("beforeend", `<div style="width: 50%">.json</div><div style="width: 50%">.csv</div>`)
    }
    if (status === "terminated") {

        (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = Icon.WARNING;

        (document.querySelector(Selector.CONTROLS_PARENT) as HTMLElement).insertAdjacentHTML("beforeend", errs.map(i => `<div>${i}</div>`).join(""))
    }
}

interface SpaceViewPointer {
    id: string // uuid of view
    table: "space_view",
    spaceId: string // uuid of space
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

// 04418b8e32c44266a9bbd76acabbc092 => 04418b8e-32c4-4266-a9bb-d76acabbc092
const insertDashesIntoUuid = (uuid: unknown) => typeof uuid === "string" ? `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}` : null

async function getCurrentPageInfo() {

    const rawBlockId = window.location.pathname.split("/").slice(-1)?.[0]?.split("-")?.slice(-1)?.[0];

    const pageId = insertDashesIntoUuid(rawBlockId);

    const pageData = await fetchPage(pageId);

    const { block, collection, collection_view } = pageData?.recordMap ?? {};

    const userId = "";

    const spaceId = Object.values(block ?? {})?.[0]?.value?.value?.space_id;

    const collectionSchema = Object.values(collection ?? {})?.[0]?.value?.value?.schema

    const collectionId = Object.values(collection ?? {})?.[0]?.value?.value?.id;

    const viewId = Object.values(collection_view ?? {})?.[0]?.value?.value?.id;

    const hasCollection = collectionId != null && collectionSchema != null;

    return { userId, pageId, spaceId, viewId, collectionId, hasCollection, collectionSchema }
}

const shouldMountControls = async (status: Status) => {

    if (status?.status === "working") return false

    const controlsEl = document.querySelector(Selector.CONTAINER);

    const controlsParentEl = await waitForElement(Selector.CONTROLS_PARENT);

    return true

    return controlsParentEl != null && controlsEl == null;
}
class AppStateController {

    status: Status = { status: "not begun", msg: "Fetching Page Info...", data: null, errs: [] };

    async mountControls(this: AppStateController) {

        const css = `.linus-focusable:hover{ background-color: rgba(55, 53, 47, 0.08); }`;
        const style = document.createElement("style");

        style.appendChild(document.createTextNode(css));

        document.querySelector("head")?.appendChild(style);

        const controlsParent = document.querySelector(Selector.CONTROLS_PARENT) as HTMLElement

        const controls = document.querySelector(Selector.CONTAINER)

        controls?.parentNode?.removeChild(controls);

        controlsParent.insertAdjacentHTML("beforeend",
            `<div style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; border-radius: 3px; margin-left: 4px; margin-right: 4px; width: calc(100% - 8px);" class="notion-focusable linus-focusable linus-container" role="button" tabindex="0">
                <div style="display: flex; align-items: center; width: 100%; font-size: 14px; min-height: 27px; padding: 2px 10px; margin-top: 1px; margin-bottom: 1px;">
                    <div style="flex-shrink: 0; flex-grow: 0; border-radius: 3px; color: rgba(55, 53, 47, 0.65); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; margin-right: 8px;" class="linus-icon">
                        ${Icon.WORKING}
                    </div>
                    <div style="flex: 1 1 auto; white-space: nowrap; min-width: 0px; overflow: hidden; text-overflow: ellipsis;" class="linus-controls">
                        Checking for Database...
                    </div>
                </div>
            </div>`
        );
        const { userId, pageId, spaceId, viewId, collectionId, hasCollection, collectionSchema } = await getCurrentPageInfo();

        (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = hasCollection ? Icon.DEFAULT : Icon.NOT_AVAILABLE;
        (document.querySelector(Selector.CONTROLS) as HTMLElement).innerHTML = hasCollection ? Text.DEFAULT : Text.CANNOT_EXPORT

        if (!hasCollection) return

        (document.querySelector(Selector.CONTROLS) as HTMLElement).onclick = (function () {

            (document.querySelector(Selector.CONTROLS) as HTMLElement).onclick = () => { }

            (document.querySelector(Selector.ICON) as HTMLElement).innerHTML = Icon.WORKING

            // @ts-ignore
            doWork.call(this, spaceId as string, pageId as string, userId, viewId, collectionId, collectionSchema, updateStatus);
        }).bind(this)
    }

    async checkMount() {

        if (await shouldMountControls(this.status)) this.mountControls()
    }
}



class WindowLocationObserver {

    lastPathname: string;

    observe(callback: any) {

        const didLocationChange = window.location.pathname !== this.lastPathname;

        this.lastPathname = window.location.pathname;

        if (didLocationChange) callback()
    }
    startObserving(callback: any) { setInterval(this.observe, 50, callback) }
}

const controller = new AppStateController()

new WindowLocationObserver().startObserving(() => controller.checkMount());

// (async () => {

    // storage.managed is read-only
    // await browser.storage.managed.set({ amogus: "sus" });

    // will not work with temp id
    // const amogus = await browser.storage.managed.get("amogus");

    // console.log(amogus)
// })()