import { createPluginParams, createPluginSchema } from '../utils'

export const cleanupEnableBackgroundParams = createPluginParams()

export const cleanupEnableBackgroundPlugin = createPluginSchema(
  'cleanupEnableBackground',
  cleanupEnableBackgroundParams,
)
