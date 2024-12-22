import { stringArraySchema, stringSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const addClassesToSVGElementParams = createParamsSchema({
  className: stringSchema,
  classNames: stringArraySchema,
})

export const addClassesToSVGElementPlugin = createPluginSchema(
  'addClassesToSVGElement',
  addClassesToSVGElementParams,
)
