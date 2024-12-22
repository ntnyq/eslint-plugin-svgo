/**
 * @kind default
 */

import { createParamsSchema, createPluginSchema } from '../utils'

export const removeUselessDefsParams = createParamsSchema()

export const removeUselessDefsPlugin = createPluginSchema(
  'removeUselessDefs',
  removeUselessDefsParams,
)
