import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const inlineStylesParams = createPluginParams({
  onlyMatchedOnce: booleanSchema,
  removeMatchedSelectors: booleanSchema,
})

export const inlineStylesPlugin = createPluginSchema('inlineStyles', inlineStylesParams)
