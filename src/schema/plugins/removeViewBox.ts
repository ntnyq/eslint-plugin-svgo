/**
 * @kind default
 */

import { createParamsSchema, createPluginSchema } from '../utils'

export const removeViewBoxParams = createParamsSchema()

export const removeViewBoxPlugin = createPluginSchema('removeViewBox', removeViewBoxParams)
