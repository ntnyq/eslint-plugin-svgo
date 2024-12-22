import { createParamsSchema, createPluginSchema } from '../utils'

export const removeEmptyAttrsParams = createParamsSchema()

export const removeEmptyAttrsPlugin = createPluginSchema('removeEmptyAttrs', removeEmptyAttrsParams)
