import getBlockValue from "./getBlockValue"

interface Foo {
  props: {
    title: [[string]]
  }
  id: string
}
interface Bar {
  props: undefined
  id: string
}

type SameSpaceMeta = [Bar, Foo, Bar, Bar, Foo]

type ForeignSpaceMeta = [Foo, Bar, Foo, Bar, Foo]

export type MetaData = SameSpaceMeta | ForeignSpaceMeta


const getCollectionInfo = (collectionData: any) => {

  const { block } = collectionData?.recordMap ?? {};

  const props = Object
    .values(block)
    .map((i: any) => ({
      props: getBlockValue(i, "properties"),
      id: getBlockValue(i, "id"),
      format: getBlockValue(i, "format"),
      createdTime: getBlockValue(i, "created_time"),
      lastEditedTime: getBlockValue(i, "last_edited_time"),
    }))

  const metadata = props.slice(-5) as any as MetaData
  const items = props.slice(0, -5) as any[]

  const foo = metadata.map(i => i.props?.title?.[0]?.[0])

  const [smth, collectionTitle, smthElse, alwaysEmpty, spaceTitle] = foo

  const foreignKeyToTitle = Object
    .entries(block)
    .reduce((obj, [key, i]: any) => ({ ...obj, [key]: getBlockValue(i, "properties")?.title?.[0]?.[0] }), {})

  return { items, collectionTitle, spaceTitle, foreignKeyToTitle }
}
export default getCollectionInfo