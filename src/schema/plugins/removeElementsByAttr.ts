import { stringArraySchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeElementsByAttrParams = createPluginParams({
  id: stringArraySchema,
  class: stringArraySchema,
})

export const removeElementsByAttrPlugin = createPluginSchema(
  'removeElementsByAttr',
  removeElementsByAttrParams,
)
