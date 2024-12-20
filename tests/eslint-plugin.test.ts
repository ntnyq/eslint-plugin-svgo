import { ESLint } from 'eslint'
import { glob } from 'tinyglobby'
import { expect, it } from 'vitest'
import { resolve } from '../scripts/utils'
import { parserPlain, plugin as pluginSvgo } from '../src'

const TEST_CWD = resolve('tests/fixtures/eslint-plugin')

it('should lint work', async () => {
  const files = await glob('**/*.svg', { cwd: TEST_CWD, onlyFiles: true })
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [
      {
        files: ['**/*.svg'],
        plugins: {
          svgo: pluginSvgo,
        },
        languageOptions: {
          parser: parserPlain,
        },
        rules: {
          'svgo/svgo': 'error',
        },
      },
    ],
    cwd: TEST_CWD,
    ignore: false,
  })

  const results: ESLint.LintResult[] = await eslint.lintFiles(files)

  expect(results.length).toBe(files.length)

  results.forEach((result, idx) => {
    expect(result.messages).toMatchSnapshot(files[idx])
  })
})
