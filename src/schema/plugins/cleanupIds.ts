import { booleanSchema, stringArraySchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const cleanupIdsParams = createPluginParams({
  remove: booleanSchema,
  minify: booleanSchema,
  force: booleanSchema,
  preserve: stringArraySchema,
  preservePrefixes: stringArraySchema,
})

export const cleanupIdsPlugin = createPluginSchema('cleanupIds', cleanupIdsParams)
