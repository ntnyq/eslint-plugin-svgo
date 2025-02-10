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
 */
export function createConfig(options: CreateConfigOptions = {}) {
  const config: Linter.Config<RuleOptions> = {
    ...options,

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
  }

  return config
}

export const configs = {
  /**
   * recommended config for eslint-plugin-svgo
   */
  recommended: createConfig({
    name: 'svgo/recommended',
    files: ['**/*.svg'],
    rules: {
      'svgo/svgo': 'error',
    },
  }),
}
