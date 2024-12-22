import { createPluginParams, createPluginSchema } from '../utils'

export const sortAttrsParams = createPluginParams({
  order: {
    type: 'array',
    items: {
      type: 'string',
    },
  },
  xmlnsOrder: {
    type: 'string',
    enum: ['front'],
  },
})

export const sortAttrsPlugin = createPluginSchema('sortAttrs', sortAttrsParams)
