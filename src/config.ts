import { parserPlain } from './parser'
import plugin from '.'
import type { Linter } from 'eslint'
import type { RuleOptions } from '../dts/rule-options'

export function config(options: Linter.Config<RuleOptions> = {}) {
  const config: Linter.Config<RuleOptions> = {
    ...options,

    // Overrides
    name: options.name || 'svgo/recommended',
    files: options.files || ['**/*.svg'],
    plugins: {
      ...(options.plugins || {}),
      /* v8 ignore start */
      get svgo() {
        return plugin
      },
      /* v8 ignore stop */
    },
    languageOptions: {
      ...(options.languageOptions || {}),
      parser: parserPlain,
    },
    rules: {
      'svgo/svgo': 'error',
      // overrides rules
      ...options.rules,
    },
  }

  return config
}
