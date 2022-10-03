import getNotionHttpConfig from "./getNotionHttpConfig";

import fetchPage from "./fetchPage";
import fetchCollectionItems from "./fetchCollectionItems";
import fetchSpaceInfo from "./fetchSpaceInfo";
import fetchSpaces, { SpaceViewPointer } from "./fetchSpaces";
import fetchUserInfo from "./fetchUserInfo";

// 04418b8e32c44266a9bbd76acabbc092 => 04418b8e-32c4-4266-a9bb-d76acabbc092
const insertDashesIntoUuid = (uuid: string) => `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`

async function getCurrentSpace() {

    // notion annoyingly messes with the url while loading, so this has to be gotten as soon as possible
    const [, currentSpaceDomain, currentPageId, ...rest] = window.location.pathname.split("/")

    const spaces = await fetchSpaces()

    const { user_id: userId } = await fetchUserInfo()

    const spaceAndViewIds = Object.values(Object.values(spaces ?? {})?.[0]?.user_root ?? {})?.[0]?.value?.value?.space_view_pointers as SpaceViewPointer[]

    const spaceInfo = await fetchSpaceInfo(spaceAndViewIds.map(i => i.spaceId))

    const combined = spaceAndViewIds.map((i, idx) => ({ viewId: i.id, ...spaceInfo.results[idx] }))

    const currentSpace = combined.filter(i => currentSpaceDomain === i.domain)?.[0]

    return { currentSpace, currentPageId: insertDashesIntoUuid(currentPageId as string), userId }
}

export default class Notion {

    _httpConfig: any;

    constructor() {
    }
    async init() {
        const { currentSpace, currentPageId, userId } = await getCurrentSpace()

        this._httpConfig = getNotionHttpConfig(null, currentSpace?.id as string, currentPageId)
    }


    fetchPage = fetchPage
    fetchCollectionItems = fetchCollectionItems
    fetchSpaceInfo = fetchSpaceInfo
    fetchSpaces = fetchSpaces
    fetchUserInfo = fetchUserInfo
}