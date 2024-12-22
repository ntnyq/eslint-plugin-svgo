import { createPluginParams, createPluginSchema } from '../utils'

export const convertEllipseToCircleParams = createPluginParams()

export const convertEllipseToCirclePlugin = createPluginSchema(
  'convertEllipseToCircle',
  convertEllipseToCircleParams,
)
