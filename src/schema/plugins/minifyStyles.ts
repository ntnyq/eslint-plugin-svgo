/**
 * @kind default
 */

import { booleanSchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const minifyStylesParams = createParamsSchema({
  restructure: booleanSchema,
  forceMediaMerge: booleanSchema,
  comments: {
    oneOf: [booleanSchema, stringSchema],
  },
  usage: booleanSchema,
})

export const minifyStylesPlugin = createPluginSchema('minifyStyles', minifyStylesParams)
