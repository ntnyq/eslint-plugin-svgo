import { createPluginParams, createPluginSchema } from '../utils'

export const removeRasterImagesParams = createPluginParams()

export const removeRasterImagesPlugin = createPluginSchema(
  'removeRasterImages',
  removeRasterImagesParams,
)
