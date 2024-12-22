/**
 * @kind default
 */

import { createParamsSchema, createPluginSchema } from '../utils'

export const removeUnusedNSParams = createParamsSchema()

export const removeUnusedNSPlugin = createPluginSchema('removeUnusedNS', removeUnusedNSParams)
