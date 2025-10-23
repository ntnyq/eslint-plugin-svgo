import {
  booleanSchema,
  stringOrStringArraySchema,
  stringSchema,
} from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeAttrsParams = createParamsSchema({
  attrs: stringOrStringArraySchema,
  elemSeparator: stringSchema,
  preserveCurrentColor: booleanSchema,
})

export const removeAttrsPlugin = createPluginSchema(
  'removeAttrs',
  removeAttrsParams,
)
