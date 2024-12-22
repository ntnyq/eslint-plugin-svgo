import { createPluginParams, createPluginSchema } from '../utils'

export const removeScriptElementParams = createPluginParams()

export const removeScriptElementPlugin = createPluginSchema(
  'removeScriptElement',
  removeScriptElementParams,
)
