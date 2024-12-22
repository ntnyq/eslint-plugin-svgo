import { createPluginParams, createPluginSchema } from '../utils'

export const moveGroupAttrsToElemsParams = createPluginParams()

export const moveGroupAttrsToElemsPlugin = createPluginSchema(
  'moveGroupAttrsToElems',
  moveGroupAttrsToElemsParams,
)
