import { createPluginParams, createPluginSchema } from '../utils'

export const reusePathsParams = createPluginParams()

export const reusePathsPlugin = createPluginSchema('reusePaths', reusePathsParams)
