import type { Linter } from 'eslint'
import type { Config as SVGOOptions } from 'svgo'

type DeepExcludeVoid<T> = T extends void
  ? never
  : T extends object
    ? {
        [K in keyof T]: DeepExcludeVoid<T[K]>
      }
    : T extends (infer U)[]
      ? DeepExcludeVoid<U>[]
      : T extends (...args: any[]) => any
        ? (...args: Parameters<T>) => DeepExcludeVoid<ReturnType<T>>
        : Exclude<T, void>

/**
 * rule options
 */
export type RuleOptions = {
  'svgo/svgo': [DeepExcludeVoid<SVGOOptions>]
}

/**
 * rules
 */
export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}

export { SVGOOptions }
