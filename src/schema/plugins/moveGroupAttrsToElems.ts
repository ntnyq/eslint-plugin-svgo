import { createParamsSchema, createPluginSchema } from '../utils'

export const moveGroupAttrsToElemsParams = createParamsSchema()

export const moveGroupAttrsToElemsPlugin = createPluginSchema(
  'moveGroupAttrsToElems',
  moveGroupAttrsToElemsParams,
)
