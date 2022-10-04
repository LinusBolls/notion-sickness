import fetchPage from "../notionRequests/fetchPage";

// 04418b8e32c44266a9bbd76acabbc092 => 04418b8e-32c4-4266-a9bb-d76acabbc092
const insertDashesIntoUuid = (uuid: unknown) => typeof uuid === "string" ? `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}` : null

export default async function getCurrentPageInfo() {

    const rawBlockId = window.location.pathname.split("/").slice(-1)?.[0]?.split("-")?.slice(-1)?.[0];

    const pageId = insertDashesIntoUuid(rawBlockId);

    const pageData = await fetchPage(pageId);

    const { block, collection, collection_view } = pageData?.recordMap ?? {};

    const userId = "";

    const spaceId = Object.values(block ?? {})?.[0]?.value?.value?.space_id;

    const collectionSchema = Object.values(collection ?? {})?.[0]?.value?.value?.schema

    const collectionId = Object.values(collection ?? {})?.[0]?.value?.value?.id;

    const viewId = Object.values(collection_view ?? {})?.[0]?.value?.value?.id;

    const hasCollection = collectionId != null && collectionSchema != null;

    return { userId, pageId, spaceId, viewId, collectionId, hasCollection, collectionSchema }
}