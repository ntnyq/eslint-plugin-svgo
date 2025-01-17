import { configs } from './config'
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
export * from './config'
export * from './parser'

export default plugin
