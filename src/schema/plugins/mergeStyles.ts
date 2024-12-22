import { createParamsSchema, createPluginSchema } from '../utils'

export const mergeStylesParams = createParamsSchema()

export const mergeStylesPlugin = createPluginSchema('mergeStyles', mergeStylesParams)
