import { join } from 'node:path'
import { messages, reportDifferences } from 'eslint-formatting-reporter'
import { createSyncFn } from 'synckit'
import { dirWorkers } from '../dir'
import type { Rule } from 'eslint'
import type { Config } from 'svgo'

// import from svgo next release
type Output = { data: string }

let optimizeSVG: (input: string, config: Config) => Output

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
          js2svg: {
            type: 'object',
            properties: {
              indent: {
                type: 'number',
              },
              pretty: {
                type: 'boolean',
              },
              eol: {
                type: 'string',
                enum: ['lf', 'crlf'],
              },
            },
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
        js2svg: {
          indent: 2,
          pretty: true,
        },
        plugins: ['preset-default'],
      },
    ],
  },
  create(context) {
    if (!optimizeSVG) {
      optimizeSVG = createSyncFn(join(dirWorkers, 'svgo.cjs')) as any
    }

    return {
      Program() {
        const sourceCode = context.sourceCode.text

        try {
          const output = optimizeSVG(sourceCode, {
            path: context.filename,
            ...(context.options?.[0] || {}),
          })

          reportDifferences(context, sourceCode, output.data)
        } catch (err) {
          console.log({
            err,
          })
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
