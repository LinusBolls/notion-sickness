export default async function fetchCollectionItems(collectionId: string, viewId: string) {

    const body = {
        "collection": {
            "id": collectionId,
            "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
        },
        "collectionView": {
            "id": viewId,
            "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
        },
        "loader": {
            "type": "reducer",
            "reducers": {
                "collection_group_results": {
                    "type": "results",
                    "limit": 999,
                    "loadContentCover": false
                }
            },
            "sort": [
                {
                    "property": "title",
                    "direction": "ascending"
                }
            ],
            "searchQuery": "",
            "userTimeZone": "Europe/Berlin"
        }
    }
    const res = await fetch("https://www.notion.so/api/v3/queryCollection?src=reset", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "application/x-ndjson",
            "Accept-Language": "en-US,en;q=0.5",
            "notion-client-version": "23.10.26.29",
            "notion-audit-log-platform": "web",
            "x-notion-active-user-header": "2a6a02e4-98af-496f-8e2d-f72c6648b503",
            "Content-Type": "application/json",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Sec-GPC": "1"
        },
        "referrer": "https://www.notion.so/04418b8e32c44266a9bbd76acabbc092?v=72ec6856e9d141ddbc36ee24a9f46fc6",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors"
    });
    const data = await res.json()

    return data
}