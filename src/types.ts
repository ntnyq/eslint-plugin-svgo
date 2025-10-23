import type { Linter, Rule } from 'eslint'

/**
 * svgo parser error
 *
 * @see {@link https://github.com/svg/svgo/blob/main/lib/parser.js}
 */
export interface SvgoParserError {
  column: number
  line: number
  message: string
  name: 'SvgoParserError'
  reason: string
}

export interface PluginSvgo {
  configs: {
    recommended: Linter.Config<Linter.RulesRecord>
  }
  meta: {
    name: string
    version: string
  }
  rules: {
    svgo: Rule.RuleModule
  }
}
