import { createPluginParams, createPluginSchema } from '../utils'

export const removeEmptyTextParams = createPluginParams({
  text: {
    type: 'boolean',
  },
  tspan: {
    type: 'boolean',
  },
  tref: {
    type: 'boolean',
  },
})

export const removeEmptyTextPlugin = createPluginSchema('removeEmptyText', removeEmptyTextParams)
