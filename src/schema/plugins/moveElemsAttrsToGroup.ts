import { createParamsSchema, createPluginSchema } from '../utils'

export const moveElemsAttrsToGroupParams = createParamsSchema()

export const moveElemsAttrsToGroupPlugin = createPluginSchema(
  'moveElemsAttrsToGroup',
  moveElemsAttrsToGroupParams,
)
