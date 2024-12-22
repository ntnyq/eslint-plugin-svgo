import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeXlinkParams = createPluginParams({
  includeLegacy: booleanSchema,
})

export const removeXlinkPlugin = createPluginSchema('removeXlink', removeXlinkParams)
