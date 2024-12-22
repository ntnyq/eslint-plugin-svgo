import { createPluginParams, createPluginSchema } from '../utils'

export const removeEmptyContainersParams = createPluginParams()

export const removeEmptyContainersPlugin = createPluginSchema(
  'removeEmptyContainers',
  removeEmptyContainersParams,
)
