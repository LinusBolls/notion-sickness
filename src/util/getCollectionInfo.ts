export type MetaData = [null, { title: [[string]] }, null, null, { title: [[string]] }]

const getCollectionInfo = (collectionData: any) => {

    const props = Object.values(collectionData?.recordMap?.block ?? {}).map((i: any) => ({ props: i?.value?.properties, id: i?.value?.id })) as any[] & MetaData

    const isEmpty = props.slice(-5).every((i: any) => i.props == null)

    if (isEmpty) console.error("collection is empty")

    const [, { title: [[collectionTitle]] }, , , { title: [[spaceTitle]] }] = props.map((i: any) => i.props).slice(-5) as any as MetaData

    const items = props.slice(0, -5)

    return { items, collectionTitle, spaceTitle }
}
export default getCollectionInfo