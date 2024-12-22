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
  usage: {
    oneOf: [
      booleanSchema,
      {
        type: 'object',
        properties: {
          force: booleanSchema,
          ids: booleanSchema,
          classes: booleanSchema,
          tags: booleanSchema,
        },
        additionalProperties: false,
      },
    ],
  },
})

export const minifyStylesPlugin = createPluginSchema('minifyStyles', minifyStylesParams)
