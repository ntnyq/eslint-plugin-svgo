import { createPluginParams, createPluginSchema } from '../utils'

export const removeDimensionsParams = createPluginParams({})

export const removeDimensionsPlugin = createPluginSchema('removeDimensions', removeDimensionsParams)
