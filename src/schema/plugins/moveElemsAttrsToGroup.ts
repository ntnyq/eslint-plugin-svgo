import { createPluginParams, createPluginSchema } from '../utils'

export const moveElemsAttrsToGroupParams = createPluginParams()

export const moveElemsAttrsToGroupPlugin = createPluginSchema(
  'moveElemsAttrsToGroup',
  moveElemsAttrsToGroupParams,
)
