import { createParamsSchema, createPluginSchema } from '../utils'

export const removeXMLNSParams = createParamsSchema()

export const removeXMLNSPlugin = createPluginSchema('removeXMLNS', removeXMLNSParams)
