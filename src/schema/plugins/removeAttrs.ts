import { booleanSchema, stringSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeAttrsParams = createPluginParams({
  attrs: stringSchema,
  elemSeparator: stringSchema,
  preserveCurrentColor: booleanSchema,
})

export const removeAttrsPlugin = createPluginSchema('removeAttrs', removeAttrsParams)
