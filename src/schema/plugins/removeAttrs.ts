import { booleanSchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeAttrsParams = createParamsSchema({
  attrs: stringSchema,
  elemSeparator: stringSchema,
  preserveCurrentColor: booleanSchema,
})

export const removeAttrsPlugin = createPluginSchema('removeAttrs', removeAttrsParams)
