import { configs } from './configs'
import { meta } from './meta'
import { rules } from './rules'
import type { ESLint } from 'eslint'

export const plugin = {
  meta,
  rules,
  configs,
} satisfies ESLint.Plugin

export * from './meta'
export * from './rules'
export * from './parser'
export * from './configs'

export default plugin
