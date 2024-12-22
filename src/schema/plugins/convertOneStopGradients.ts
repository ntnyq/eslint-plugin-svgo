import { createParamsSchema, createPluginSchema } from '../utils'

export const convertOneStopGradientsParams = createParamsSchema()

export const convertOneStopGradientsPlugin = createPluginSchema(
  'convertOneStopGradients',
  convertOneStopGradientsParams,
)
