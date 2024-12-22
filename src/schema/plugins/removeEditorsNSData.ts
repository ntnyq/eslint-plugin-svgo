import { stringArraySchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const removeEditorsNSDataParams = createPluginParams({
  additionalNamespaces: stringArraySchema,
})

export const removeEditorsNSDataPlugin = createPluginSchema(
  'removeEditorsNSData',
  removeEditorsNSDataParams,
)
