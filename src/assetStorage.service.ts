import JSZip from "jszip";

const setAsset = (imgUrl: string, dataUrl: string) => sessionStorage.setItem(`[asset][${imgUrl}]`, dataUrl)
const getAsset = (imgUrl: string) => sessionStorage.getItem(`[asset][${imgUrl}]`)
const hasAsset = (imgUrl: string) => getAsset(imgUrl) != null

const getExtensionFromDataUrl = (dataUrl: string) => (dataUrl.substring(dataUrl.indexOf(":") + 1, dataUrl.indexOf(";"))).split("/")[1]

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