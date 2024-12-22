import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeUselessStrokeAndFillParams = createParamsSchema({
  stroke: booleanSchema,
  fill: booleanSchema,
  removeNone: booleanSchema,
})

export const removeUselessStrokeAndFillPlugin = createPluginSchema(
  'removeUselessStrokeAndFill',
  removeUselessStrokeAndFillParams,
)
