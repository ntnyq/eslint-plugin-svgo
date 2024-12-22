import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const convertStyleToAttrsParams = createParamsSchema({
  keepImportant: booleanSchema,
})

export const convertStyleToAttrsPlugin = createPluginSchema(
  'convertStyleToAttrs',
  convertStyleToAttrsParams,
)
