import { booleanSchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const prefixIdsParams = createParamsSchema({
  delim: stringSchema,
  prefix: {
    oneOf: [booleanSchema, stringSchema],
  },
  prefixIds: booleanSchema,
  prefixClassNames: booleanSchema,
})

export const prefixIdsPlugin = createPluginSchema('prefixIds', prefixIdsParams)
