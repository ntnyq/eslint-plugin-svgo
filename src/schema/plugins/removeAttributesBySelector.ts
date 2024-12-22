import { stringArraySchema, stringSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeAttributesBySelectorParams = createPluginParams({
  selectors: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        selector: stringSchema,
        attributes: stringArraySchema,
      },
    },
  },
})

export const removeAttributesBySelectorPlugin = createPluginSchema(
  'removeAttributesBySelector',
  removeAttributesBySelectorParams,
)
