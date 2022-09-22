export interface OutFile {

    name: string // th
    url: string // 
}
export interface OutData {

    files: {
        csv: OutFile
        xml: OutFile
        json: OutFile
    }
    collectionTitle: string;
}

export type ExportState = "not begun" | "working" | "finished" | "terminated"

export type Status<State extends string> = { status: ExportState, msg: string, data: ExportState extends "finished" ? OutData : null, errs: string[] }


