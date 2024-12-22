import { stringArraySchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const addClassesToSVGElementParams = createParamsSchema({
  classNames: stringArraySchema,
  className: stringSchema,
})

export const addClassesToSVGElementPlugin = createPluginSchema(
  'addClassesToSVGElement',
  addClassesToSVGElementParams,
)
