/**
 * @kind default
 */

import { createParamsSchema, createPluginSchema } from '../utils'

export const collapseGroupsParams = createParamsSchema()

export const collapseGroupsPlugin = createPluginSchema('collapseGroups', collapseGroupsParams)
