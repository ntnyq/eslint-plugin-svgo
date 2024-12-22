import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const inlineStylesParams = createParamsSchema({
  onlyMatchedOnce: booleanSchema,
  removeMatchedSelectors: booleanSchema,
})

export const inlineStylesPlugin = createPluginSchema('inlineStyles', inlineStylesParams)
