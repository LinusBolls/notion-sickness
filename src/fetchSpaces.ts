export default async function fetchSpaces() {

    const body = {}
    const res = await fetch("https://www.notion.so/api/v3/getSpaces", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.5",
            "notion-client-version": "23.10.26.29",
            "notion-audit-log-platform": "web",
            "Content-Type": "application/json",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Sec-GPC": "1"
        },
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors"
    });
    const data = await res.json()

    return data
}