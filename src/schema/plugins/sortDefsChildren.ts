import { createParamsSchema, createPluginSchema } from '../utils'

export const sortDefsChildrenParams = createParamsSchema()

export const sortDefsChildrenPlugin = createPluginSchema('sortDefsChildren', sortDefsChildrenParams)
