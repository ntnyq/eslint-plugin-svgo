import { createPluginParams, createPluginSchema } from '../utils'

export const removeNonInheritableGroupAttrsParams = createPluginParams()

export const removeNonInheritableGroupAttrsPlugin = createPluginSchema(
  'removeNonInheritableGroupAttrs',
  removeNonInheritableGroupAttrsParams,
)
