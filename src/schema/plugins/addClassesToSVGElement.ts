import { stringArraySchema, stringSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'

export const addClassesToSVGElementParams = createPluginParams({
  classNames: stringArraySchema,
  className: stringSchema,
})

export const addClassesToSVGElementPlugin = createPluginSchema(
  'addClassesToSVGElement',
  addClassesToSVGElementParams,
)
