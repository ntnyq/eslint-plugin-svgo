import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeDescParams = createPluginParams({
  removeAny: booleanSchema,
})

export const removeDescPlugin = createPluginSchema('removeDesc', removeDescParams)
