import { booleanSchema, stringSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const prefixIdsParams = createPluginParams({
  delim: stringSchema,
  // TODO: how to support function in schema, maybe not
  prefix: stringSchema,
  prefixIds: booleanSchema,
  prefixClassNames: booleanSchema,
})

export const prefixIdsPlugin = createPluginSchema('prefixIds', prefixIdsParams)
