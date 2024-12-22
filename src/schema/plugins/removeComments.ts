/**
 * @kind default
 */

import { booleanSchema, stringArraySchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeCommentsParams = createParamsSchema({
  preservePatterns: {
    oneOf: [booleanSchema, stringArraySchema],
  },
})

export const removeCommentsPlugin = createPluginSchema('removeComments', removeCommentsParams)
