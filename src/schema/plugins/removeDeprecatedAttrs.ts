import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeDeprecatedAttrsParams = createPluginParams({
  removeAny: booleanSchema,
})

export const removeDeprecatedAttrsPlugin = createPluginSchema(
  'removeDeprecatedAttrs',
  removeDeprecatedAttrsParams,
)
