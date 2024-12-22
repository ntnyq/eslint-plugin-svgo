import { createParamsSchema, createPluginSchema } from '../utils'

export const removeEmptyContainersParams = createParamsSchema()

export const removeEmptyContainersPlugin = createPluginSchema(
  'removeEmptyContainers',
  removeEmptyContainersParams,
)
