import { createPluginParams, createPluginSchema } from '../utils'

export const mergeStylesParams = createPluginParams()

export const mergeStylesPlugin = createPluginSchema('mergeStyles', mergeStylesParams)
