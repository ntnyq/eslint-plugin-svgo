import { booleanSchema, precisionSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const convertShapeToPathParams = createPluginParams({
  convertArcs: booleanSchema,
  floatPrecision: precisionSchema,
})

export const convertShapeToPathPlugin = createPluginSchema(
  'convertShapeToPath',
  convertShapeToPathParams,
)
