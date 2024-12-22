import { booleanSchema, stringArraySchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const cleanupIdsParams = createParamsSchema({
  remove: booleanSchema,
  minify: booleanSchema,
  force: booleanSchema,
  preserve: stringArraySchema,
  preservePrefixes: stringArraySchema,
})

export const cleanupIdsPlugin = createPluginSchema('cleanupIds', cleanupIdsParams)
