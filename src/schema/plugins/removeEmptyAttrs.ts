import { createPluginParams, createPluginSchema } from '../utils'

export const removeEmptyAttrsParams = createPluginParams()

export const removeEmptyAttrsPlugin = createPluginSchema('removeEmptyAttrs', removeEmptyAttrsParams)
