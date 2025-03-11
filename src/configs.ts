import { parserPlain } from './parser'
import plugin from '.'
import type { Linter } from 'eslint'

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
