import { createPluginParams, createPluginSchema } from '../utils'

export const removeOffCanvasPathsParams = createPluginParams()

export const removeOffCanvasPathsPlugin = createPluginSchema(
  'removeOffCanvasPaths',
  removeOffCanvasPathsParams,
)
