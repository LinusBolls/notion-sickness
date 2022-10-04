import Papa from "papaparse"
import { BehaviorSubject } from "rxjs";
import { json2xml } from "xml-js";
import assetStorage, { getAssetZips } from "../assetStorage.service";

import fetchCollectionItems from "../notionRequests/fetchCollectionItems";
import getCollectionInfo from "../util/getCollectionInfo";
import prepareJsonForCsvUnparse from "../util/prepareJsonForCsvUnparse";
import toDataUrl from "../util/toDataUrl";
import toRefinedItem from "./toRefinedItem";

function saveContent(dataUrl: string, fileName: string) {
    const link = document.createElement("a");

    link.download = fileName;
    link.href = dataUrl
    link.click();
}

interface FinishedFile {
    name: string
    url?: string;
    func?: () => void
}

export interface DownloadProcessResult {
    collectionTitle: string,
    files: {
        csv: FinishedFile
        xml: FinishedFile
        json: FinishedFile
        assetZip: FinishedFile
    }
}

export type DownloadProcessState = {
    status: "not begun"
    msg: string
    data: null
    errs: []
} | {
    status: "working"
    msg: string
    data: null
    errs: []
} | {
    status: "finished"
    msg: string
    data: DownloadProcessResult
    errs: []
} | {
    status: "terminated"
    msg: string
    data: null
    errs: string[]
}
const initialState: DownloadProcessState = { status: "working", msg: "", data: null, errs: [] }

const startDownloadProcess = (spaceId: string, currentPageId: string, userId: string, viewId: string, collectionId: string, collectionSchema: any) => {

    const sub = new BehaviorSubject<DownloadProcessState>(initialState);

    (async () => {

        // @ts-ignore
        const rollups = Object.values(collectionSchema ?? {}).filter(i => i.type === "rollup").map(i => i.name + " (NOTION-SICKNESS DOES NOT SUPPORT ROLLUP PROPERTIES YET)")
        // @ts-ignore
        const formulas = Object.values(collectionSchema ?? {}).filter(i => i.type === "formula").map(i => i.name + " (NOTION-SICKNESS DOES NOT SUPPORT FORMULA PROPERTIES YET)")

        const unimplementedKeys = [...rollups, ...formulas]

        if (collectionSchema == null || collectionId == null || spaceId == null || viewId == null) {

            sub.next({ status: "terminated", msg: "something went wrong", data: null, errs: ["Failed to Gather Notion Info"] })

            return
        }
        sub.next({ status: "working", msg: "Fetching Database Rows...", data: null, errs: [] })

        let data;

        try {
            data = await fetchCollectionItems(spaceId, collectionId, viewId)

        } catch (err) {

            sub.next({ status: "terminated", msg: "Error Fetching Rows", data: null, errs: [] })

            return
        }

        let collectionInfo: any;

        try {
            collectionInfo = getCollectionInfo(data)

        } catch (err) {

            sub.next({ status: "terminated", msg: "Error Getting Collection", data: null, errs: [] })

            return
        }
        const { items, collectionTitle, spaceTitle } = collectionInfo

        let finishedCount = 0;

        sub.next({ status: "working", msg: `Finished ${finishedCount} / ${items.length} Rows...`, data: null, errs: [] })

        const onFinished = (item: any) => {
            finishedCount++;

            sub.next({ status: "working", msg: `Finished ${finishedCount} / ${items.length} Rows...`, data: null, errs: [] })

            return item
        }

        // can go wrong
        const refinedItems = await Promise.all(items.map((i: any) => toRefinedItem(collectionSchema)(i).then(onFinished)))

        const csvArr = prepareJsonForCsvUnparse(refinedItems, unimplementedKeys)

        const csvStr = Papa.unparse(csvArr)

        const jsonStr = JSON.stringify(refinedItems);

        const xmlStr = json2xml(jsonStr, { compact: true })

        // encode characters that cause btoa() to throw
        const removeNonUtf8Chars = (str: string) => unescape(encodeURIComponent(str))

        // base64 csv string and create data url
        const csvDataUrl = "data:text/csv;base64," + btoa(removeNonUtf8Chars(csvStr))

        const jsonDataUrl = "data:application/json;base64," + btoa(removeNonUtf8Chars(jsonStr))

        const xmlDataUrl = "data:application/xml;base64," + btoa(removeNonUtf8Chars(xmlStr))

        // const assetZip = await assetStorage().getAssetZip(refinedItems);

        // const assetZipSize = (assetZipUrl.length / 1000 / 1000).toFixed(1);

        // console.log(`asset zip is ${assetZipSize}mb`)

        // const assetZipUrl = await toDataUrl(assetZip)

        const assetZips = await Promise.all((await getAssetZips(refinedItems, 10)).map(toDataUrl))

        const fileName = spaceTitle + "-" + collectionTitle + "-db";

        const saveAssets = () => assetZips.map((i, idx) => saveContent(i, fileName + "-assets-" + idx + ".zip"))

        sub.next({
            status: "finished", msg: `Ready to Download`, data: {
                collectionTitle,
                files: {
                    csv: {
                        name: fileName + ".csv",
                        url: csvDataUrl,
                    },
                    xml: {
                        name: fileName + ".xml",
                        url: xmlDataUrl,
                    },
                    json: {
                        name: fileName + ".json",
                        url: jsonDataUrl,
                    },
                    assetZip: {
                        name: fileName + "-assets.zip",
                        url: "",
                        func: saveAssets,
                    }
                }
            }, errs: []
        })
    })()

    return sub;
}
export default startDownloadProcess