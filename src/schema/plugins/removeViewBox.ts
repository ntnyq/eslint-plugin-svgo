import { createPluginParams, createPluginSchema } from '../utils'

export const removeViewBoxParams = createPluginParams()

export const removeViewBoxPlugin = createPluginSchema('removeViewBox', removeViewBoxParams)
