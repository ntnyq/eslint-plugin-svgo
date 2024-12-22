import { createPluginParams, createPluginSchema } from '../utils'

export const removeStyleElementParams = createPluginParams()

export const removeStyleElementPlugin = createPluginSchema(
  'removeStyleElement',
  removeStyleElementParams,
)
