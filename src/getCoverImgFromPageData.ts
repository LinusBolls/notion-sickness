import fetchPage from "./fetchPage"

const toNotionImgUrl = (url: string) => "https://www.notion.so/image/" + encodeURIComponent(url) + "?table=block&id=d0262c3e-374a-4dbf-ab2a-a318d1870e18&spaceId=7cf1b6cc-df88-4bf5-afc7-bf5416fda723&width=380&userId=2a6a02e4-98af-496f-8e2d-f72c6648b503&cache=v2"

// src: https://stackoverflow.com/a/67551175
function blobToDataURL(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = _e => resolve(reader.result as string);
        reader.onerror = _e => reject(reader.error);
        reader.onabort = _e => reject(new Error("Read aborted"));
        reader.readAsDataURL(blob);
    });
}

export default async function getCoverImgFromPageData(id: string) {

    const pageData = await fetchPage(id)

    const rawPage = Object.values(pageData?.recordMap?.block ?? {}).map(i => i?.value?.value).filter(i => i?.format?.page_cover != null)?.[0]

    // some pages don't have a block with a page_cover due to being deleted or missing access
    if (rawPage == null) console.info("raw is null")

    const { format, created_time, last_edited_time } = rawPage ?? {}

    const coverImgUrl = rawPage == null ? null : toNotionImgUrl(format?.page_cover)

    if (coverImgUrl != null && !sessionStorage.getItem(`[asset][${coverImgUrl}]`)) {

        const res = await fetch(coverImgUrl)

        if (res.ok) {

            const data = await res.blob()

            const mimeType = data.type

            const extension = mimeType.split("/")[1]

            const dataUrl = await blobToDataURL(data)

            sessionStorage.setItem(`[asset][${coverImgUrl}]`, dataUrl);

        }
    }
    return { coverImgUrl, created_time, last_edited_time }
}

