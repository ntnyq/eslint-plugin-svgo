import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeDeprecatedAttrsParams = createParamsSchema({
  removeAny: booleanSchema,
})

export const removeDeprecatedAttrsPlugin = createPluginSchema(
  'removeDeprecatedAttrs',
  removeDeprecatedAttrsParams,
)
