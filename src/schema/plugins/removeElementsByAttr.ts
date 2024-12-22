import { stringArraySchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeElementsByAttrParams = createParamsSchema({
  id: stringArraySchema,
  class: stringArraySchema,
})

export const removeElementsByAttrPlugin = createPluginSchema(
  'removeElementsByAttr',
  removeElementsByAttrParams,
)
