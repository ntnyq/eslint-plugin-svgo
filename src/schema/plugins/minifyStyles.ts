import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const minifyStylesParams = createParamsSchema({
  usage: booleanSchema,
})

export const minifyStylesPlugin = createPluginSchema('minifyStyles', minifyStylesParams)
