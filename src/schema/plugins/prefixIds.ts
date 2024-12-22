import { booleanSchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const prefixIdsParams = createParamsSchema({
  delim: stringSchema,
  // TODO: how to support function in schema, maybe not
  prefix: stringSchema,
  prefixIds: booleanSchema,
  prefixClassNames: booleanSchema,
})

export const prefixIdsPlugin = createPluginSchema('prefixIds', prefixIdsParams)
