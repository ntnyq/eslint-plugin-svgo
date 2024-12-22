import { booleanSchema, precisionSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const cleanupListOfValuesParams = createPluginParams({
  floatPrecision: precisionSchema,
  leadingZero: booleanSchema,
  defaultPx: booleanSchema,
  convertToPx: booleanSchema,
})

export const cleanupListOfValuesPlugin = createPluginSchema(
  'cleanupListOfValues',
  cleanupListOfValuesParams,
)
