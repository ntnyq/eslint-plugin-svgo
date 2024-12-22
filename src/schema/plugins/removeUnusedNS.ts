import { createPluginParams, createPluginSchema } from '../utils'

export const removeUnusedNSParams = createPluginParams()

export const removeUnusedNSPlugin = createPluginSchema('removeUnusedNS', removeUnusedNSParams)
