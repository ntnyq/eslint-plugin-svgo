/**
 * @kind default
 */

import { createParamsSchema, createPluginSchema } from '../utils'

export const cleanupEnableBackgroundParams = createParamsSchema()

export const cleanupEnableBackgroundPlugin = createPluginSchema(
  'cleanupEnableBackground',
  cleanupEnableBackgroundParams,
)
