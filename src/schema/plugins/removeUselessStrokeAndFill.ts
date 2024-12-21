import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeUselessStrokeAndFillParams = createPluginParams({
  stroke: booleanSchema,
  fill: booleanSchema,
  removeNone: booleanSchema,
})

export const removeUselessStrokeAndFillPlugin = createPluginSchema(
  'removeUselessStrokeAndFill',
  removeUselessStrokeAndFillParams,
)
