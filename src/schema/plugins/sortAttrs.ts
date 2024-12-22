import { stringArraySchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const sortAttrsParams = createParamsSchema({
  order: stringArraySchema,
  xmlnsOrder: {
    ...stringSchema,
    enum: ['front'],
  },
})

export const sortAttrsPlugin = createPluginSchema('sortAttrs', sortAttrsParams)
