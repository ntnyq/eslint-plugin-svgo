import { objectSchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const addAttributesToSVGElementParams = createParamsSchema({
  attribute: {
    oneOf: [
      stringSchema,
      {
        ...objectSchema,
        patternProperties: {
          '.*': {
            type: ['string', 'null'],
          },
        },
      },
    ],
  },
  attributes: {
    type: 'array',
    items: {
      anyOf: [
        stringSchema,
        {
          ...objectSchema,
          patternProperties: {
            '.*': {
              type: ['string', 'null'],
            },
          },
        },
      ],
    },
  },
})

export const addAttributesToSVGElementPlugin = createPluginSchema(
  'addAttributesToSVGElement',
  addAttributesToSVGElementParams,
)
