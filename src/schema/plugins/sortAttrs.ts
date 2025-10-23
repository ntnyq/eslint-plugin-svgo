/**
 * @kind default
 */

import { stringArraySchema, xmlnsOrderSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const sortAttrsParams = createParamsSchema({
  order: stringArraySchema,
  xmlnsOrder: xmlnsOrderSchema,
})

export const sortAttrsPlugin = createPluginSchema('sortAttrs', sortAttrsParams)
