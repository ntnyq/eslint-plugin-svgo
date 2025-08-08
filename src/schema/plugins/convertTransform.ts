/**
 * @kind default
 */

import { booleanSchema, precisionSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const convertTransformParams = createParamsSchema({
  convertToShorts: booleanSchema,
  degPrecision: booleanSchema,
  floatPrecision: precisionSchema,
  transformPrecision: precisionSchema,
  matrixToTransform: booleanSchema,
  shortTranslate: booleanSchema,
  shortScale: booleanSchema,
  shortRotate: booleanSchema,
  removeUseless: booleanSchema,
  collapseIntoOne: booleanSchema,
  leadingZero: booleanSchema,
  negativeExtraSpace: booleanSchema,
})

export const convertTransformPlugin = createPluginSchema(
  'convertTransform',
  convertTransformParams,
)
