import { configs } from './configs'
import { meta } from './meta'
import { rules } from './rules'
import type { PluginSvgo } from './types'

export const plugin: PluginSvgo = {
  meta,
  rules,
  configs,
}

export * from './meta'
export * from './rules'
export * from './parser'
export * from './configs'

export default plugin
