import { createParamsSchema, createPluginSchema } from '../utils'

export const removeStyleElementParams = createParamsSchema()

export const removeStyleElementPlugin = createPluginSchema(
  'removeStyleElement',
  removeStyleElementParams,
)
