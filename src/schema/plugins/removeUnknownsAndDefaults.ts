import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeUnknownsAndDefaultsParams = createParamsSchema({
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
