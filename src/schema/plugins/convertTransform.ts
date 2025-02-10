/**
 * @kind default
 */

import { booleanSchema, precisionSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const convertTransformParams = createParamsSchema({
  convertToShorts: booleanSchema,
  floatPrecision: precisionSchema,
  transformPrecision: precisionSchema,
  matrixToTransform: booleanSchema,
  shortTranslate: booleanSchema,
  shortScale: booleanSchema,
  shortRotate: booleanSchema,
  removeUseless: booleanSchema,
  collapseIntoOne: booleanSchema,
})

export const convertTransformPlugin = createPluginSchema(
  'convertTransform',
  convertTransformParams,
)
