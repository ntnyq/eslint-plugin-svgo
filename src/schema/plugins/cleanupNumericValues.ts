import { booleanSchema, precisionSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const cleanupNumericValuesParams = createParamsSchema({
  floatPrecision: precisionSchema,
  leadingZero: booleanSchema,
  defaultPx: booleanSchema,
  convertToPx: booleanSchema,
})

export const cleanupNumericValuesPlugin = createPluginSchema(
  'cleanupNumericValues',
  cleanupNumericValuesParams,
)
