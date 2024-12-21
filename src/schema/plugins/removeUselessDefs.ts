import { createPluginParams, createPluginSchema } from '../utils'

export const removeUselessDefsParams = createPluginParams()

export const removeUselessDefsPlugin = createPluginSchema(
  'removeUselessDefs',
  removeUselessDefsParams,
)
