import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const convertColorsParams = createPluginParams({
  currentColor: booleanSchema,
  names2hex: booleanSchema,
  rgb2hex: booleanSchema,
  convertCase: {
    oneOf: [
      {
        type: 'boolean',
      },
      {
        type: 'string',
        enum: ['lower', 'upper'],
      },
    ],
  },
  shorthex: booleanSchema,
  shortname: booleanSchema,
})

export const convertColorsPlugin = createPluginSchema('convertColors', convertColorsParams)
