/**
 * @kind default
 */

import { booleanSchema, precisionSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const convertShapeToPathParams = createParamsSchema({
  convertArcs: booleanSchema,
  floatPrecision: precisionSchema,
})

export const convertShapeToPathPlugin = createPluginSchema(
  'convertShapeToPath',
  convertShapeToPathParams,
)
