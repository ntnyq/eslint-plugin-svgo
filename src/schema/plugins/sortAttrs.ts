import { stringArraySchema, stringSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const sortAttrsParams = createPluginParams({
  order: stringArraySchema,
  xmlnsOrder: {
    ...stringSchema,
    enum: ['front'],
  },
})

export const sortAttrsPlugin = createPluginSchema('sortAttrs', sortAttrsParams)
