import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeCommentsParams = createPluginParams({
  preservePatterns: {
    oneOf: [
      booleanSchema,
      {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    ],
  },
})

export const removeCommentsPlugin = createPluginSchema('removeComments', removeCommentsParams)
