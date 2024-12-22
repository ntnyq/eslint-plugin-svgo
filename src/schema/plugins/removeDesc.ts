/**
 * @kind default
 */

import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeDescParams = createParamsSchema({
  removeAny: booleanSchema,
})

export const removeDescPlugin = createPluginSchema('removeDesc', removeDescParams)
