import { createParamsSchema, createPluginSchema } from '../utils'

export const removeDimensionsParams = createParamsSchema({})

export const removeDimensionsPlugin = createPluginSchema('removeDimensions', removeDimensionsParams)
