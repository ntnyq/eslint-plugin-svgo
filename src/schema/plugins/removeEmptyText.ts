import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeEmptyTextParams = createParamsSchema({
  text: booleanSchema,
  tspan: booleanSchema,
  tref: booleanSchema,
})

export const removeEmptyTextPlugin = createPluginSchema('removeEmptyText', removeEmptyTextParams)
