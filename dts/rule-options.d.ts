import type { Linter } from 'eslint'
import type { Config as SVGOOptions } from 'svgo'

type AnyFn = (...args: any[]) => any

/**
 * ESLint options doesn't suppport:
 * - void
 * - function
 * - regexp
 */
type DeepExcludeVoidAndFnAndRegexp<T> = T extends AnyFn | RegExp | void
  ? never
  : T extends object
    ? { [K in keyof T]: DeepExcludeVoidAndFnAndRegexp<T[K]> }
    : T extends (infer U)[]
      ? DeepExcludeVoidAndFnAndRegexp<U>[]
      : T

/**
 * rule options
 */
export type RuleOptions = {
  'svgo/svgo': [DeepExcludeVoidAndFnAndRegexp<SVGOOptions>]
}

/**
 * rules
 */
export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}

export { SVGOOptions }
