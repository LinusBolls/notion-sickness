// import axios from "axios"

type Id = string

type Unix = number // 13-digit unix

type PropertyKey = string

export type PropertyType = "relation" | "rollup" | "select" | "multi_select" | "date" | "checkbox" | "url" | "email" | "text" | "formula" | "title" | "phone_number"

export interface FormulaProperty {
    name: string
    type: "formula",
    formula: {
        id: PropertyKey
        name: string,
        type: "property",
        result_type: PropertyType
    }
}

export interface RelationProperty {
    name: string
    type: "relation"
    version?: string
    autoRelate?: {
        enabled: boolean
    }
    property: PropertyKey
    collection_id: Id
    collection_pointer: {
        id: Id
        table: "collection"
        spaceId: Id
    }
}
export type RollupProperty = {

    name: string
    type: "rollup"

    target_property?: PropertyKey
    relation_property?: PropertyKey
    target_property_type?: PropertyType
} | {
    name: string
    type: "rollup"

    formula: {
        id: PropertyKey
        name: string
        type: "property",
        result_type: PropertyType
    },
    aggregation: "count_values" | "unique" | "show_unique",
    target_property: PropertyKey
    relation_property: PropertyKey
    target_property_type: PropertyType
}
export type SelectProperty = {
    name: string
    type: "select" | "multi_select"

    options: {
        id: Id
        color: string
        value: string
    }[]
}

export type Property = RelationProperty | RollupProperty | SelectProperty | { name: string, type: PropertyType }

export interface PageSchema {
    [key: PropertyKey]: Property
}

export interface Permission {
    role: "reader" | "read_and_write" | "editor",
    type: "user_permission" | "space_permission",
    user_id: Id
}

export interface PermissionRole {
    role: {
        read_content: boolean
        insert_content: boolean
        update_content: boolean
    },
    type: "bot_permission",
    bot_id: Id,
    parent_id: Id,
    parent_table: "space"
}

export interface FetchPageResponse {
    cursor: {
        stack: unknown[]
    }
    recordMap: {
        __version__: number
        team: unknown[]
        space: unknown[]
        block: {
            [id: Id]: {
                spaceId?: Id // page has this
                value: {
                    role: "reader",
                    value: {
                        id: Id,
                        version: number,
                        type: "collection_view" | "page" | "column" | "column_list" | "gallery" | "table",
                        name?: string // gallery has this
                        view_ids: Id[]
                        collection_id: Id
                        properties?: { [key: string]: string[][] } // page has this
                        content?: Id[] // page has this
                        format: {
                            column_ratio?: number
                            page_icon: string, // emoji or image url
                            block_color: string, // background_yellow or image url
                            block_locked: boolean,
                            block_locked_by: Id
                            page_full_width: boolean,
                            collection_pointer?: { // collection_view has this
                                id: Id,
                                table: "collection",
                                spaceId: Id
                            }
                            copied_from_pointer?: { // page has this
                                id: Id,
                                table: "block",
                                spaceId: Id
                            }
                            // gallery and table a lot of further format
                        }
                        permissions: (Permission | PermissionRole)[]

                        created_time: Unix
                        last_edited_time: Unix
                        parent_id: Id,
                        parent_table: "block",
                        alive: boolean,
                        page_sort?: Id[] // gallery has this
                        file_ids?: Id[] // page has this
                        copied_from?: Id // page has this
                        created_by_table: "notion_user",
                        created_by_id: Id,
                        last_edited_by_table: "notion_user",
                        last_edited_by_id: Id,
                        space_id: Id
                    }
                }
            }
        }
        collection?: {
            [key: Id]: {

                value: {
                    value: {
                        schema: PageSchema
                        icon: string
                        format: {
                            [key: number]: { visible: boolean, property: PropertyKey }
                        }
                        property_visibility: {
                            property: PropertyKey
                            visibility: string // enum but cant be fucked to type
                        }[]
                        page_section_visibility: {
                            comments: "section_hide",
                            backlinks: "section_hide"
                        },
                        collection_page_properties: { visible: boolean, property: PropertyKey }[]
                        parent_id: Id
                        parent_table: "block" | "page"
                        alive: boolean
                        // bunch of other stuff
                        space_id: string
                    }
                }
            }
        }
    }
}
export default async function fetchPage(pageId: unknown) {

    const body = {
        page: {
            id: pageId
        },
        limit: 30,
        cursor: {
            stack: []
        },
        chunkNumber: 0,
        verticalColumns: false
    }
    // const res = await axios.post<FetchPageResponse>("https://www.notion.so/api/v3/loadCachedPageChunk", body, {
    //     // "credentials": "include",
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0",
    //         "Accept": "*/*",
    //         "Accept-Language": "en-US,en;q=0.5",
    //         "notion-client-version": "23.10.26.29",
    //         "notion-audit-log-platform": "web",
    //         "x-notion-active-user-header": "2a6a02e4-98af-496f-8e2d-f72c6648b503",
    //         "Content-Type": "application/json",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-origin",
    //         "Sec-GPC": "1"
    //     },
    //     // "referrer": "https://www.notion.so/codeuniversitywiki/04418b8e32c44266a9bbd76acabbc092?v=72ec6856e9d141ddbc36ee24a9f46fc6&p=c12000db15284f798d0de96a1ccd609a&pm=c",
    //     // "mode": "cors"
    // })
    // const data = res.data

    const res = await fetch("https://www.notion.so/api/v3/loadCachedPageChunk", {
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
        // "referrer": "https://www.notion.so/codeuniversitywiki/04418b8e32c44266a9bbd76acabbc092?v=72ec6856e9d141ddbc36ee24a9f46fc6&p=c12000db15284f798d0de96a1ccd609a&pm=c",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors"
    })


    const foo = await res.json()

    // console.log("fetchPage result:", foo)

    if (res.status !== 200) console.log("fetchPage failed with status", res.status, res.statusText)

    const data: FetchPageResponse = foo

    return data
}