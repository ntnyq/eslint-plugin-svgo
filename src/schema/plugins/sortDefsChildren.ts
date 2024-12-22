import { createPluginParams, createPluginSchema } from '../utils'

export const sortDefsChildrenParams = createPluginParams()

export const sortDefsChildrenPlugin = createPluginSchema('sortDefsChildren', sortDefsChildrenParams)
