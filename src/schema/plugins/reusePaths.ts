import { createParamsSchema, createPluginSchema } from '../utils'

export const reusePathsParams = createParamsSchema()

export const reusePathsPlugin = createPluginSchema('reusePaths', reusePathsParams)
