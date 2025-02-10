/**
 * @kind default
 */

import { booleanSchema, stringArraySchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const inlineStylesParams = createParamsSchema({
  onlyMatchedOnce: booleanSchema,
  removeMatchedSelectors: booleanSchema,
  useMqs: stringArraySchema,
  usePseudos: stringArraySchema,
})

export const inlineStylesPlugin = createPluginSchema(
  'inlineStyles',
  inlineStylesParams,
)
