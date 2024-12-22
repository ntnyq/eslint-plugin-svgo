import { createPluginParams, createPluginSchema } from '../utils'

export const removeElementsByAttrParams = createPluginParams({
  id: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
  class: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
})

export const removeElementsByAttrPlugin = createPluginSchema(
  'removeElementsByAttr',
  removeElementsByAttrParams,
)
