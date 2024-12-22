import { booleanSchema, stringArraySchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeCommentsParams = createPluginParams({
  preservePatterns: {
    oneOf: [booleanSchema, stringArraySchema],
  },
})

export const removeCommentsPlugin = createPluginSchema('removeComments', removeCommentsParams)
