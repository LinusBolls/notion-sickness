export interface FetchSpaceInfoResponse {
    results: {
        id: string
        name: string
        domain: string
        domainIsAutogenerated: boolean
        icon: string
        productId: string
        memberCount: number
        disablePublicAccess: boolean
        disableGuests: boolean
        disableMoveToSpace: boolean
        disableExport: boolean
        createdTime: number, // 13-digit unix
        planType: "team" | string,
        inviteLinkEnabled: boolean
        hasPublicPagesAfterNotionDotSite: boolean
    }[]
}
export default async function fetchSpaceInfo(spaceIds: string[]) {

    const body = {
        type: "space-ids",
        spaceIds
    }
    const res = await fetch("https://www.notion.so/api/v3/getPublicSpaceData", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "notion-client-version": "23.10.26.29",
            "notion-audit-log-platform": "web",
            // "x-notion-active-user-header": "2a6a02e4-98af-496f-8e2d-f72c6648b503",
            "Content-Type": "application/json",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Sec-GPC": "1"
        },
        // "referrer": "https://www.notion.so/04418b8e32c44266a9bbd76acabbc092?v=72ec6856e9d141ddbc36ee24a9f46fc6",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors"
    });
    const data: FetchSpaceInfoResponse = await res.json()

    return data
}