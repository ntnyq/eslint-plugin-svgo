import { booleanSchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const convertColorsParams = createParamsSchema({
  currentColor: booleanSchema,
  names2hex: booleanSchema,
  rgb2hex: booleanSchema,
  convertCase: {
    oneOf: [
      booleanSchema,
      {
        ...stringSchema,
        enum: ['lower', 'upper'],
      },
    ],
  },
  shorthex: booleanSchema,
  shortname: booleanSchema,
})

export const convertColorsPlugin = createPluginSchema('convertColors', convertColorsParams)
