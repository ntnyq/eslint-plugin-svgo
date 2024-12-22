import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const minifyStylesParams = createPluginParams({
  usage: booleanSchema,
})

export const minifyStylesPlugin = createPluginSchema('minifyStyles', minifyStylesParams)
