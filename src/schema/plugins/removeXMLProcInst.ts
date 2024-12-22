import { createPluginParams, createPluginSchema } from '../utils'

export const removeXMLProcInstParams = createPluginParams()

export const removeXMLProcInstPlugin = createPluginSchema(
  'removeXMLProcInst',
  removeXMLProcInstParams,
)
