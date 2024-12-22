import { createPluginParams, createPluginSchema } from '../utils'

export const removeMetadataParams = createPluginParams()

export const removeMetadataPlugin = createPluginSchema('removeMetadata', removeMetadataParams)
