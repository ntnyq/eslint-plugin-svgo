import { createParamsSchema, createPluginSchema } from '../utils'

export const removeRasterImagesParams = createParamsSchema()

export const removeRasterImagesPlugin = createPluginSchema(
  'removeRasterImages',
  removeRasterImagesParams,
)
