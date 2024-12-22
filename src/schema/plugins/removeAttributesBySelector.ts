import { stringArraySchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeAttributesBySelectorParams = createParamsSchema({
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
