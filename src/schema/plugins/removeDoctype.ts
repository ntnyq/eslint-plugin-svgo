/**
 * @kind default
 */

import { createParamsSchema, createPluginSchema } from '../utils'

export const removeDoctypeParams = createParamsSchema({})

export const removeDoctypePlugin = createPluginSchema(
  'removeDoctype',
  removeDoctypeParams,
)
