import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const cleanupAttrsParams = createPluginParams({
  newlines: booleanSchema,
  trim: booleanSchema,
  spaces: booleanSchema,
})

export const cleanupAttrsPlugin = createPluginSchema('cleanupAttrs', cleanupAttrsParams)
