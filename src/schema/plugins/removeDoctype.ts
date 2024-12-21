import { createPluginParams, createPluginSchema } from '../utils'

export const removeDoctypeParams = createPluginParams({})

export const removeDoctypePlugin = createPluginSchema('removeDoctype', removeDoctypeParams)
