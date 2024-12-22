import { booleanSchema, precisionSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const cleanupNumericValuesParams = createPluginParams({
  floatPrecision: precisionSchema,
  leadingZero: booleanSchema,
  defaultPx: booleanSchema,
  convertToPx: booleanSchema,
})

export const cleanupNumericValuesPlugin = createPluginSchema(
  'cleanupNumericValues',
  cleanupNumericValuesParams,
)
