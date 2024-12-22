import { stringArraySchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeEditorsNSDataParams = createParamsSchema({
  additionalNamespaces: stringArraySchema,
})

export const removeEditorsNSDataPlugin = createPluginSchema(
  'removeEditorsNSData',
  removeEditorsNSDataParams,
)
