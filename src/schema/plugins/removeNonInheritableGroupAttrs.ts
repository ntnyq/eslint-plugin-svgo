import { createParamsSchema, createPluginSchema } from '../utils'

export const removeNonInheritableGroupAttrsParams = createParamsSchema()

export const removeNonInheritableGroupAttrsPlugin = createPluginSchema(
  'removeNonInheritableGroupAttrs',
  removeNonInheritableGroupAttrsParams,
)
