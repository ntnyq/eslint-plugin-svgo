/**
 * @kind default
 */

import {
  booleanSchema,
  onlyFalseSchema,
  positiveNumberSchema,
  precisionSchema,
} from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const convertPathDataParams = createParamsSchema({
  applyTransforms: booleanSchema,
  applyTransformsStroked: booleanSchema,
  makeArcs: {
    type: 'object',
    properties: {
      threshold: positiveNumberSchema,
      tolerance: positiveNumberSchema,
    },
    additionalProperties: false,
  },
  straightCurves: booleanSchema,
  convertToQ: booleanSchema,
  lineShorthands: booleanSchema,
  convertToZ: booleanSchema,
  curveSmoothShorthands: booleanSchema,
  floatPrecision: {
    oneOf: [onlyFalseSchema, precisionSchema],
  },
  transformPrecision: precisionSchema,
  smartArcRounding: booleanSchema,
  removeUseless: booleanSchema,
  collapseRepeated: booleanSchema,
  utilizeAbsolute: booleanSchema,
  leadingZero: booleanSchema,
  negativeExtraSpace: booleanSchema,
  noSpaceAfterFlags: booleanSchema,
  forceAbsolutePath: booleanSchema,
})

export const convertPathDataPlugin = createPluginSchema(
  'convertPathData',
  convertPathDataParams,
)
