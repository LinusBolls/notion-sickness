import fetchPage, { FetchPageResponse, PageSchema } from "../notionRequests/fetchPage";
import getBlockValue from "./getBlockValue";

// 04418b8e32c44266a9bbd76acabbc092 => 04418b8e-32c4-4266-a9bb-d76acabbc092
const insertDashesIntoUuid = (uuid: unknown) => typeof uuid === "string" ? `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}` : null

export const getCurrentPageId = () => {

    const rawBlockId = window.location.pathname.split("/").slice(-1)?.[0]?.split("-")?.slice(-1)?.[0];

    const pageId = insertDashesIntoUuid(rawBlockId);

    return pageId
}

export function getPageInfo(pageData: FetchPageResponse) {

    const { block, collection, collection_view } = pageData?.recordMap ?? {};

    const spaceId = getBlockValue(Object.values(block ?? {})?.[0], "space_id")

    const collectionSchema = getBlockValue(Object.values(collection ?? {})?.[0], "schema")

    const collectionId = getBlockValue(Object.values(collection ?? {})?.[0], "id")

    const viewId = getBlockValue(Object.values(collection_view ?? {})?.[0], "id")

    const hasCollection = collectionId != null && collectionSchema != null;

    return { spaceId, viewId, collectionId, hasCollection, collectionSchema } as CollectionPageInfo | PageInfo
}
interface CollectionPageInfo {
    spaceId: string

    hasCollection: true
    viewId: string
    collectionId: string
    collectionSchema: PageSchema
}
interface PageInfo {
    spaceId: string

    hasCollection: false;
    viewId: null
    collectionId: null
    collectionSchema: null
}