import { createPluginParams, createPluginSchema } from '../utils'

export const collapseGroupsParams = createPluginParams()

export const collapseGroupsPlugin = createPluginSchema('collapseGroups', collapseGroupsParams)
