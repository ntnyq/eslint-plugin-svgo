import { parserPlain } from './parser'
import plugin from '.'
import type { Linter } from 'eslint'
import type { RuleOptions } from '../dts/rule-options'

/**
 * Just options of ESLint config options
 *
 * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects}
 */
export type CreateConfigOptions = Linter.Config<RuleOptions>

/**
 * Shortcut for creating an ESLint config
 *
 * @param options - {@link CreateConfigOptions}
 * @returns An eslint config
 *
 * @deprecated
 */
/* v8 ignore start */
export function createConfig(options: CreateConfigOptions = {}) {
  const config: Linter.Config<RuleOptions> = {
    ...options,

    plugins: {
      ...(options.plugins || {}),
      get svgo() {
        return plugin
      },
    },
    languageOptions: {
      ...(options.languageOptions || {}),
      parser: parserPlain,
    },
  }

  return config
}
/* v8 ignore stop */

/**
 * Recommended config of eslint-plugin-svgo
 */
export const recommended: Linter.Config = {
  name: 'svgo/recommended',
  files: ['**/*.svg'],
  plugins: {
    /* v8 ignore start */
    get svgo() {
      return plugin
    },
    /* v8 ignore stop */
  },
  languageOptions: {
    parser: parserPlain,
  },
  rules: {
    'svgo/svgo': 'error',
  },
}

export const configs = {
  recommended,
}
