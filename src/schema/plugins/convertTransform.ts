import { booleanSchema, precisionSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const convertTransformParams = createPluginParams({
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

export const convertTransformPlugin = createPluginSchema('convertTransform', convertTransformParams)
