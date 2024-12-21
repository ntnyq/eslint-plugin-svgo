import { booleanSchema, precisionSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const convertPathDataParams = createPluginParams({
  applyTransforms: booleanSchema,
  applyTransformsStroked: booleanSchema,
  straightCurves: booleanSchema,
  convertToQ: booleanSchema,
  lineShorthands: booleanSchema,
  convertToZ: booleanSchema,
  curveSmoothShorthands: booleanSchema,
  floatPrecision: precisionSchema,
  transformPrecision: precisionSchema,
  smartArcRounding: booleanSchema,
  removeUseless: booleanSchema,
  collapseRepeated: booleanSchema,
  utilizeAbsolute: booleanSchema,
  negativeExtraSpace: booleanSchema,
  forceAbsolutePath: booleanSchema,
})

export const convertPathDataPlugin = createPluginSchema('convertPathData', convertPathDataParams)
