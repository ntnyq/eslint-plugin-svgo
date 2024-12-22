import type { Linter } from 'eslint'
import type { Config as SVGOOptions } from 'svgo'

export type RuleOptions = {
  'svgo/svgo': [SVGOOptions]
}

export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}

export { SVGOOptions }
