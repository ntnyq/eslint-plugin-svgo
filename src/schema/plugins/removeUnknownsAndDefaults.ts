import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeUnknownsAndDefaultsParams = createPluginParams({
  unknownContent: booleanSchema,
  unknownAttrs: booleanSchema,
  defaultAttrs: booleanSchema,
  defaultMarkupDeclarations: booleanSchema,
  uselessOverrides: booleanSchema,
  keepDataAttrs: booleanSchema,
  keepAriaAttrs: booleanSchema,
  keepRoleAttr: booleanSchema,
})

export const removeUnknownsAndDefaultsPlugin = createPluginSchema(
  'removeUnknownsAndDefaults',
  removeUnknownsAndDefaultsParams,
)
