/**
 * 
 * so it seems insane, but notion keeps switching what nesting level some properties are
 * found on pageResponse.RecordMap.block items, every time at midnight
 * 
 */

const getBlockValue = (block: any, key: string) => block?.value?.value?.[key] ?? block?.value?.[key]

export default getBlockValue