import type { Linter } from 'eslint'

/**
 * @copyright {@link https://github.com/so1ve/eslint-parser-plain}
 */
export const parserPlain: Linter.Parser = {
  meta: {
    name: 'plain-eslint-parser',
  },
  parseForESLint: (code: string) => ({
    ast: {
      body: [],
      comments: [],
      loc: { start: 0, end: code.length },
      range: [0, code.length],
      tokens: [],
      type: 'Program',
    },
    scopeManager: null,
    services: { isPlain: true },
    visitorKeys: {
      Program: [],
    },
  }),
}
