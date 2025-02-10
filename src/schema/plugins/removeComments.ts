/**
 * @kind default
 */

import { onlyFalseSchema, stringArraySchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeCommentsParams = createParamsSchema({
  preservePatterns: {
    oneOf: [onlyFalseSchema, stringArraySchema],
  },
})

export const removeCommentsPlugin = createPluginSchema(
  'removeComments',
  removeCommentsParams,
)
