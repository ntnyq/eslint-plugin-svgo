import { createPluginParams, createPluginSchema } from '../utils'

export const removeXMLNSParams = createPluginParams()

export const removeXMLNSPlugin = createPluginSchema('removeXMLNS', removeXMLNSParams)
