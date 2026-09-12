// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  ignores: ['**/dts/rule-options.d.ts'],
  oxfmt: true,
  prettier: false,
  svgo: true,
  test: {
    vitest: {
      overrides: {
        // in favor of eslint-vitest-rule-tester
        'vitest/no-standalone-expect': 'off',
      },
    },
  },
})
