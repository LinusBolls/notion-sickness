import { readFile } from "node:fs/promises"

const FILE_PATH = "/Users/linusbolls/downloads/Knowledge Space-People-db.json"

const Gen = {
    1: "#firstclass",
    2: "#nextgen",
    3: "#thirdparty",
    4: "#fourthdimension",
    5: "#highfive",
    6: "#SixthSense",
}

const StudyProgram = {
    PM: "Product Management",
    SE: "Software Engineering",
    ID: "Interaction Design",
}

const byGen = (gen: string) => (i: any) => i.Labels?.includes(gen)
const byStatus = (status: string) => (i: any) => i.Status?.includes(status)
const byStudyProgram = (program: string) => (i: any) => i["Study program"]?.includes(program)

async function main() {

    const people = JSON.parse(await readFile(FILE_PATH, { encoding: "utf-8" }))

    const students = people.filter(byStatus("Active student"))

    const fifth = students.filter(byGen(Gen[5]))

    const genToNumStudents = Object.fromEntries(Object.values(Gen).map(i => [i, students.filter(byGen(i)).length]))

    const programToNumStudents = Object.fromEntries(Object.values(StudyProgram).map(i => [i, students.filter(byStudyProgram(i)).length]))

    const leonard = students.filter(i => i.Name[0].includes("Leonard Darsow"))

    console.log(JSON.stringify(leonard[0], null, 2))
}
main()