import { stringArraySchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const addAttributesToSVGElementParams = createParamsSchema({
  attributes: {
    oneOf: [
      {
        type: 'object',
        additionalProperties: true,
      },
      stringArraySchema,
    ],
  },
})

export const addAttributesToSVGElementPlugin = createPluginSchema(
  'addAttributesToSVGElement',
  addAttributesToSVGElementParams,
)
