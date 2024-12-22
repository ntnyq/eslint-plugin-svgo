import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeEmptyTextParams = createPluginParams({
  text: booleanSchema,
  tspan: booleanSchema,
  tref: booleanSchema,
})

export const removeEmptyTextPlugin = createPluginSchema('removeEmptyText', removeEmptyTextParams)
