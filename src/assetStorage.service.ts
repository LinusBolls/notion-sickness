import JSZip from "jszip";

const ramStorage: any = {}

const setAsset = (imgUrl: string, dataUrl: string) =>
    // sessionStorage.setItem(`[asset][${imgUrl}]`, dataUrl)
    ramStorage[`[asset][${imgUrl}]`] = dataUrl

const getAsset = (imgUrl: string) =>
    // sessionStorage.getItem(`[asset][${imgUrl}]`)
    ramStorage[`[asset][${imgUrl}]`
    ]
const hasAsset = (imgUrl: string) => getAsset(imgUrl) != null

const getExtensionFromDataUrl = (dataUrl: string) => (dataUrl.substring(dataUrl.indexOf(":") + 1, dataUrl.indexOf(";"))).split("/")[1]

// src: https://stackoverflow.com/a/29645164
// const getChunks = <T>(target: T[], size: number): T[][] => {
//     return target.reduce((memo, value, index) => {
//         if (index % (target.length / size) == 0 && index !== 0) memo.push([])
//         // @ts-ignore
//         memo[memo.length - 1].push(value)

//         return memo
//     }, [[]])
// }
function getChunks<T>(list: T[], n: number): T[][] {
    const isPositiveInteger = Number.isSafeInteger(n) && n > 0;
    if (!isPositiveInteger) {
        throw new RangeError('n must be a positive integer');
    }

    const partitions = [];
    const partitionLength = Math.ceil(list.length / n);

    for (let i = 0; i < list.length; i += partitionLength) {
        const partition = list.slice(i, i + partitionLength);
        partitions.push(partition);
    }

    return partitions;
}

async function getAssetZip(items: any[]): Promise<Blob> {

    const assetZip = new JSZip();

    for (const [key, item] of Object.entries(items)) {

        const imgUrl = item["Notion Cover Image Url"]

        const id = item["Notion Id"]

        const imgDataUrl = getAsset(imgUrl)

        if (imgDataUrl == null) continue;

        const extension = getExtensionFromDataUrl(imgDataUrl)

        const idx = imgDataUrl.indexOf("base64,") + "base64,".length;

        // extension hardcoded for consumability purposes, 
        // renaming i.e. a .png to a .jpeg does not break the file
        const filename = `${id}-cover.jpeg`

        const content = imgDataUrl.substring(idx);

        assetZip.file(filename, content, { base64: true });
    }
    return new Promise(res => {
        assetZip.generateAsync({ type: "blob" }).then(res);
    })
}
export default function assetStorage() {
    return {
        setAsset,
        hasAsset,
        getAsset,
        getAssetZip,
    }
}
export async function getAssetZips(items: any[], numChunks: number) {

    const zips = await Promise.all(getChunks(items, numChunks).map(getAssetZip))

    return zips
}