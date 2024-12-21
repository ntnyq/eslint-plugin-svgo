import { config } from './config'
import { meta } from './meta'
import { svgo } from './rules/svgo'
import type { ESLint } from 'eslint'

const rules = {
  svgo,
}

export const plugin = {
  meta,
  rules,
  configs: {
    recommended: config(),
  },
} satisfies ESLint.Plugin

export default plugin

export * from './meta'
export * from './config'
export * from './parser'
