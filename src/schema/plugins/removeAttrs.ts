import { booleanSchema, stringArraySchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeAttrsParams = createParamsSchema({
  attrs: {
    oneOf: [stringSchema, stringArraySchema],
  },
  elemSeparator: stringSchema,
  preserveCurrentColor: booleanSchema,
})

export const removeAttrsPlugin = createPluginSchema('removeAttrs', removeAttrsParams)
