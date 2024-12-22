import { createPluginParams, createPluginSchema } from '../utils'

export const removeEditorsNSDataParams = createPluginParams({
  additionalNamespaces: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
})

export const removeEditorsNSDataPlugin = createPluginSchema(
  'removeEditorsNSData',
  removeEditorsNSDataParams,
)
