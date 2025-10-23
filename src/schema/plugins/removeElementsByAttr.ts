import { stringOrStringArraySchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeElementsByAttrParams = createParamsSchema({
  id: stringOrStringArraySchema,
  class: stringOrStringArraySchema,
})

export const removeElementsByAttrPlugin = createPluginSchema(
  'removeElementsByAttr',
  removeElementsByAttrParams,
)
