/**
 * @kind default
 */

import {
  booleanOrStringSchema,
  booleanSchema,
  colorCaseSchema,
  onlyFalseSchema,
} from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const convertColorsParams = createParamsSchema({
  currentColor: booleanOrStringSchema,
  names2hex: booleanSchema,
  rgb2hex: booleanSchema,
  convertCase: {
    oneOf: [onlyFalseSchema, colorCaseSchema],
  },
  shorthex: booleanSchema,
  shortname: booleanSchema,
})

export const convertColorsPlugin = createPluginSchema(
  'convertColors',
  convertColorsParams,
)
