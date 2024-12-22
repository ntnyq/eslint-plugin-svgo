import { createPluginParams, createPluginSchema } from '../utils'

export const removeAttributesBySelectorParams = createPluginParams({
  selectors: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        selector: {
          type: 'string',
        },
        attributes: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
    },
  },
})

export const removeAttributesBySelectorPlugin = createPluginSchema(
  'removeAttributesBySelector',
  removeAttributesBySelectorParams,
)
