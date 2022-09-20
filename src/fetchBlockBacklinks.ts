export default async function fetchBlockBacklinks(blockId: string) {

  const body = {
    "block": {
      "id": blockId,
      "spaceId": "7cf1b6cc-df88-4bf5-afc7-bf5416fda723"
    }
  }
  const res = await fetch("https://www.notion.so/api/v3/getBacklinksForBlock", {
    "credentials": "include",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0",
      "Accept": "*/*",
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
    "referrer": "https://www.notion.so/codeuniversitywiki/04418b8e32c44266a9bbd76acabbc092?v=72ec6856e9d141ddbc36ee24a9f46fc6&p=d0262c3e374a4dbfab2aa318d1870e18&pm=c",
    "body": JSON.stringify(body),
    "method": "POST",
    "mode": "cors"
  });
  const data = await res.json()

  return data
}