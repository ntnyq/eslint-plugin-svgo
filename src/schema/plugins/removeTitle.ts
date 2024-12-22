/**
 * @kind default
 */

import { createParamsSchema, createPluginSchema } from '../utils'

export const removeTitleParams = createParamsSchema()

export const removeTitlePlugin = createPluginSchema('removeTitle', removeTitleParams)
