// "a84881bb-46b5-4a33-8e7c-23c47d618aad"
export default async function fetchPageInfo(blockId: string) {

    const body = {
        "type": "block-space",
        "name": "page",
        blockId,
        "showMoveTo": false,
        "saveParent": false,
        "shouldDuplicate": false,
        "requestedOnPublicDomain": false
    }
    const res = await fetch("https://www.notion.so/api/v3/getPublicPageData", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "notion-client-version": "23.10.26.33",
            "notion-audit-log-platform": "web",
            "x-notion-active-user-header": "2a6a02e4-98af-496f-8e2d-f72c6648b503",
            "Content-Type": "application/json",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Sec-GPC": "1"
        },
        "referrer": "https://www.notion.so/Foundations-Assessments-a84881bb46b54a338e7c23c47d618aad",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors"
    });
    const data = await res.json()

    return data
}

// value.value.format.page_cover