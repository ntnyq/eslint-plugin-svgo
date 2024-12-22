import { booleanSchema, stringSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const convertColorsParams = createPluginParams({
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
