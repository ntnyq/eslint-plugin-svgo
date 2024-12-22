import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeXlinkParams = createParamsSchema({
  includeLegacy: booleanSchema,
})

export const removeXlinkPlugin = createPluginSchema('removeXlink', removeXlinkParams)
