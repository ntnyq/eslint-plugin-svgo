import { booleanSchema, precisionSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const cleanupListOfValuesParams = createParamsSchema({
  floatPrecision: precisionSchema,
  leadingZero: booleanSchema,
  defaultPx: booleanSchema,
  convertToPx: booleanSchema,
})

export const cleanupListOfValuesPlugin = createPluginSchema(
  'cleanupListOfValues',
  cleanupListOfValuesParams,
)
