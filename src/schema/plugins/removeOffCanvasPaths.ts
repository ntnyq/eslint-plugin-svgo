import { createParamsSchema, createPluginSchema } from '../utils'

export const removeOffCanvasPathsParams = createParamsSchema()

export const removeOffCanvasPathsPlugin = createPluginSchema(
  'removeOffCanvasPaths',
  removeOffCanvasPathsParams,
)
