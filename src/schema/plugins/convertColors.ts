/**
 * @kind default
 */

import { booleanSchema, onlyFalseSchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const convertColorsParams = createParamsSchema({
  currentColor: {
    oneOf: [booleanSchema, stringSchema],
  },
  names2hex: booleanSchema,
  rgb2hex: booleanSchema,
  convertCase: {
    oneOf: [
      onlyFalseSchema,
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
