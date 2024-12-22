import { booleanSchema, precisionSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const mergePathsParams = createParamsSchema({
  force: booleanSchema,
  floatPrecision: precisionSchema,
  noSpaceAfterFlags: booleanSchema,
})

export const mergePathsPlugin = createPluginSchema('mergePaths', mergePathsParams)
