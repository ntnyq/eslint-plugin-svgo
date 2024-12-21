import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const cleanupIdsParams = createPluginParams({
  remove: booleanSchema,
  minify: booleanSchema,
  force: booleanSchema,
  preserve: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
  preservePrefixes: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
})

export const cleanupIdsPlugin = createPluginSchema('cleanupIds', cleanupIdsParams)
