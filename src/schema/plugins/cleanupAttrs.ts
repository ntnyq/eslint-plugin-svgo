/**
 * @kind default
 */

import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const cleanupAttrsParams = createParamsSchema({
  newlines: booleanSchema,
  trim: booleanSchema,
  spaces: booleanSchema,
})

export const cleanupAttrsPlugin = createPluginSchema('cleanupAttrs', cleanupAttrsParams)
