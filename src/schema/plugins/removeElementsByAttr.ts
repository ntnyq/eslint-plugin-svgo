import { stringArraySchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeElementsByAttrParams = createParamsSchema({
  id: {
    oneOf: [stringSchema, stringArraySchema],
  },
  class: {
    oneOf: [stringSchema, stringArraySchema],
  },
})

export const removeElementsByAttrPlugin = createPluginSchema(
  'removeElementsByAttr',
  removeElementsByAttrParams,
)
