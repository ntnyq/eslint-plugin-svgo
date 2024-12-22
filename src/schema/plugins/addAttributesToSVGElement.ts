import { stringArraySchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const addAttributesToSVGElementParams = createPluginParams({
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
