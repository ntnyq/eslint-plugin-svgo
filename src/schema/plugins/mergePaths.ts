import { booleanSchema, precisionSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const mergePathsParams = createPluginParams({
  force: booleanSchema,
  floatPrecision: precisionSchema,
  noSpaceAfterFlags: booleanSchema,
})

export const mergePathsPlugin = createPluginSchema('mergePaths', mergePathsParams)
