import { join } from 'node:path'
import { messages, reportDifferences } from 'eslint-formatting-reporter'
import { createSyncFn } from 'synckit'
import { dirWorkers } from '../dir'
import type { Rule } from 'eslint'
import type { Config } from 'svgo'

let optimizeSVG: (input: string, config: Config) => string

export const svgo = {
  meta: {
    type: 'layout',
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
          path: {
            type: 'string',
          },
          multipass: {
            type: 'boolean',
          },
          floatPrecision: {
            type: 'number',
          },
          // TODO: enhance plugin support
          plugins: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        additionalProperties: true,
      },
    ],
    messages,
    defaultOptions: [
      {
        plugins: ['preset-default'],
      },
    ],
  },
  create(context) {
    if (!optimizeSVG) {
      optimizeSVG = createSyncFn(join(dirWorkers, 'svgo.js')) as any
    }

    return {
      Program() {
        const sourceCode = context.sourceCode.text

        try {
          const optimized = optimizeSVG(sourceCode, {
            path: context.filename,
            ...(context.options?.[0] || {}),
          })

          reportDifferences(context, sourceCode, optimized)
        } catch {
          context.report({
            loc: {
              start: { line: 1, column: 0 },
              end: { line: 1, column: 0 },
            },
            message: 'Failed to optimize SVG file',
          })
        }
      },
    }
  },
} satisfies Rule.RuleModule
