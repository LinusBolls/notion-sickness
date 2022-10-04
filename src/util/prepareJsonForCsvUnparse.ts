export default function prepareJsonForCsvUnparse(data: any[], additionalKeys: string[]) {

    const flattenedData = data.map(({ props, ...rest }) => ({ ...props, ...rest }))

    const foo = Object.values(flattenedData).reduce((obj, i) => ({ ...obj as any, ...i as any }), {})

    const keyRow = Object.keys(foo)

    const allKeysRow = [...keyRow, ...additionalKeys]

    const valueRows = Object.values(flattenedData).map(i => Array(allKeysRow.length).fill(null).map((_, idx) => i?.[allKeysRow[idx] as string] ?? null))

    return [allKeysRow, ...valueRows]
}