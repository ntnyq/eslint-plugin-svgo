import { parserPlain } from './parser'
import plugin from '.'
import type { Linter } from 'eslint'
import type { PluginSvgo } from './types'

/**
 * Recommended config of eslint-plugin-svgo
 */
export const recommended: Linter.Config<Linter.RulesRecord> = {
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

export const configs: PluginSvgo['configs'] = {
  recommended,
}
