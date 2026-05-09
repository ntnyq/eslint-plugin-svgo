import { join } from 'node:path'
import { createSyncFn } from 'synckit'
import { dirWorkers } from '../dir'
import { messages, reportDifferences } from '../reporter'
import { svgoConfigProperties } from '../schema'
import { booleanSchema, stringSchema } from '../schema/shared'
import { isDebugEnabled } from '../utils'
import type { Rule } from 'eslint'
import type { Config, Output } from 'svgo'
import type { SvgoParserError } from '../types'

let optimizeSVG: (input: string, config: Config) => Output

export const svgo: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      recommended: true,
      description: 'Use SVGO to optimize SVG files',
      url: 'https://github.com/ntnyq/eslint-plugin-svgo',
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          ...svgoConfigProperties,

          svgoConfig: {
            description: 'Use an external config file, e.g: svgo.config.mjs',
            oneOf: [booleanSchema, stringSchema],
          },
          reportMode: {
            type: 'string',
            enum: ['diff', 'summary'],
            description:
              'Choose how optimization diagnostics are reported: per-diff or single summary',
          },
        },
        additionalProperties: false,
      },
    ],
    messages,
    defaultOptions: [],
  },
  create(context) {
    if (!optimizeSVG) {
      optimizeSVG = createSyncFn(join(dirWorkers, 'svgo.mjs'))
    }
    const sourceCode = context.sourceCode.text

    return {
      /* v8 ignore next */
      [context.sourceCode.ast.type || 'Program']() {
        try {
          const { reportMode = 'diff', ...optionConfig } =
            context.options?.[0] || {}

          const output = optimizeSVG(sourceCode, {
            path: context.filename,
            ...optionConfig,
          })

          reportDifferences(context, sourceCode, output.data, 0, reportMode)
        } catch (err) {
          if ((err as Error)?.name === 'SvgoParserError') {
            const { reason, line, column } = err as SvgoParserError

            context.report({
              message: `SvgoParserError: ${reason}`,
              loc: {
                start: { line, column },
                end: { line, column },
              },
            })
          } else {
            context.report({
              loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: 0 },
              },
              message: [
                `Failed to optimize SVG file: ${context.filename}`,
                (err as Error)?.message
                  ? `Reason: ${(err as Error).message}`
                  : undefined,
                isDebugEnabled() && (err as Error)?.stack
                  ? `Stack:\n${(err as Error).stack}`
                  : undefined,
              ]
                .filter(Boolean)
                .join('\n'),
            })
          }
        }
      },
    }
  },
}
