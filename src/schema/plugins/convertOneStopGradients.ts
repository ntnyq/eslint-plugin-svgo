import { createPluginParams, createPluginSchema } from '../utils'

export const convertOneStopGradientsParams = createPluginParams()

export const convertOneStopGradientsPlugin = createPluginSchema(
  'convertOneStopGradients',
  convertOneStopGradientsParams,
)
