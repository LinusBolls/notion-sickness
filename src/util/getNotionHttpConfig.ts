export default function getNotionHttpConfig(userId: string | null, spaceId: string, pageId: string) {

    const referrer = `https://www.notion.so/codeuniversitywiki/${pageId.split("-").join("")}?v=${spaceId.split("-").join("")}`

    return {
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "notion-client-version": "23.10.26.29",
            "notion-audit-log-platform": "web",
            "Content-Type": "application/json",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Sec-GPC": "1",
            ...userId != null && { "x-notion-active-user-header": userId },
        },
        referrer,
        mode: "cors",
        credentials: "include",
    }
}