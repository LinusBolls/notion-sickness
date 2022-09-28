import fetchPage from "./fetchPage"

const toNotionImgUrl = (url: string) => "https://www.notion.so/image/" + encodeURIComponent(url) + "?table=block&id=d0262c3e-374a-4dbf-ab2a-a318d1870e18&spaceId=7cf1b6cc-df88-4bf5-afc7-bf5416fda723&width=380&userId=2a6a02e4-98af-496f-8e2d-f72c6648b503&cache=v2"

export default async function getCoverImgFromPageData(id: string) {

    const pageData = await fetchPage(id)

    const pageCovers = Object.values(pageData?.recordMap?.block ?? {}).map(i => i?.value?.value?.format?.page_cover).filter(i => i != null)

    const validUrl = pageCovers.map(toNotionImgUrl)?.[0]

    return validUrl
}