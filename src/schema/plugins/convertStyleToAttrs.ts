import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const convertStyleToAttrsParams = createPluginParams({
  keepImportant: booleanSchema,
})

export const convertStyleToAttrsPlugin = createPluginSchema(
  'convertStyleToAttrs',
  convertStyleToAttrsParams,
)
