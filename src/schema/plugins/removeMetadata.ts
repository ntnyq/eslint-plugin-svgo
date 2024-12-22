import { createParamsSchema, createPluginSchema } from '../utils'

export const removeMetadataParams = createParamsSchema()

export const removeMetadataPlugin = createPluginSchema('removeMetadata', removeMetadataParams)
