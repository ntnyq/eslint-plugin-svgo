import { createPluginParams, createPluginSchema } from '../utils'

export const removeTitleParams = createPluginParams()

export const removeTitlePlugin = createPluginSchema('removeTitle', removeTitleParams)
