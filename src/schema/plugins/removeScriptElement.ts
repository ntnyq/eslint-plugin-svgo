import { createParamsSchema, createPluginSchema } from '../utils'

export const removeScriptElementParams = createParamsSchema()

export const removeScriptElementPlugin = createPluginSchema(
  'removeScriptElement',
  removeScriptElementParams,
)
