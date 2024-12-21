import { run as _run } from 'eslint-vitest-rule-tester'
import { parserPlain } from '../src'
import type { RuleTesterInitOptions, TestCasesOptions } from 'eslint-vitest-rule-tester'

export function run(options: TestCasesOptions & RuleTesterInitOptions) {
  return _run({
    languageOptions: {
      parser: parserPlain,
    },
    ...options,
  })
}

export { unindent as $, unindent } from 'eslint-vitest-rule-tester'
