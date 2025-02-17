// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  ignores: ['**/dts/rule-options.d.ts'],
  svgo: true,
  ntnyq: {
    overrides: {
      'ntnyq/no-duplicate-exports': 'error',
    },
  },
})
