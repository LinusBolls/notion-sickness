export default function getNotionHttpConfig(userId: string, spaceId: string, pageId: string) {
    return {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "notion-client-version": "23.10.26.29",
            "notion-audit-log-platform": "web",
            "x-notion-active-user-header": userId,
            "Content-Type": "application/json",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Sec-GPC": "1"
        },
        "referrer": `https://www.notion.so/codeuniversitywiki/${pageId.split("-").join("")}?v=${spaceId.split("-").join("")}`, // &p=c12000db15284f798d0de96a1ccd609a&pm=c
        "mode": "cors"
    }
}