import process from 'node:process'
import { describe, expect, it, vi } from 'vitest'
import type { Rule } from 'eslint'

// Mock synckit module
vi.mock('synckit', () => ({
  createSyncFn: vi.fn(),
}))

describe('svgo rule error handling', () => {
  it('should include reason for non-SvgoParserError errors', async () => {
    vi.resetModules()
    const { createSyncFn } = await import('synckit')
    const { svgo } = await import('../../src/rules/svgo')

    // Mock the optimizeSVG function to throw a generic error
    const mockOptimizeSVG = vi.fn().mockImplementation(() => {
      throw new Error('Generic optimization error')
    })

    vi.mocked(createSyncFn).mockReturnValue(mockOptimizeSVG)

    // Create a mock context
    const context = {
      sourceCode: {
        ast: { type: 'Program' },
        text: '<svg></svg>',
      },
      filename: 'test.svg',
      options: [{}],
      report: vi.fn(),
    } as unknown as Rule.RuleContext

    // Create the rule
    const rule = svgo.create(context)

    // Call the Program visitor with a mock node
    const mockNode = {} as any
    rule.Program?.(mockNode)

    // Verify the generic error message was reported (this is line 69)
    expect(context.report).toHaveBeenCalledWith({
      loc: {
        start: { line: 1, column: 0 },
        end: { line: 1, column: 0 },
      },
      message:
        'Failed to optimize SVG file: test.svg\nReason: Generic optimization error',
    })
  })

  it('should include stack trace in debug mode', async () => {
    vi.resetModules()
    const { createSyncFn } = await import('synckit')
    const { svgo } = await import('../../src/rules/svgo')
    const previousDebug = process.env.ESLINT_PLUGIN_SVGO_DEBUG
    process.env.ESLINT_PLUGIN_SVGO_DEBUG = '1'

    const mockOptimizeSVG = vi.fn().mockImplementation(() => {
      throw new Error('Debug optimization error')
    })

    vi.mocked(createSyncFn).mockReturnValue(mockOptimizeSVG)

    const context = {
      sourceCode: {
        ast: { type: 'Program' },
        text: '<svg></svg>',
      },
      filename: 'test.svg',
      options: [{}],
      report: vi.fn(),
    } as unknown as Rule.RuleContext

    const rule = svgo.create(context)
    rule.Program?.({} as any)

    expect(context.report).toHaveBeenCalledOnce()

    const [reportArg] = vi.mocked(context.report).mock.calls[0] as [
      {
        loc: {
          start: { line: number; column: number }
          end: { line: number; column: number }
        }
        message: string
      },
    ]
    expect(reportArg.loc).toEqual({
      start: { line: 1, column: 0 },
      end: { line: 1, column: 0 },
    })
    expect(reportArg.message).toContain(
      'Failed to optimize SVG file: test.svg\nReason: Debug optimization error',
    )
    expect(reportArg.message).toContain(
      '\nStack:\nError: Debug optimization error',
    )

    if (previousDebug === undefined) {
      delete process.env.ESLINT_PLUGIN_SVGO_DEBUG
    } else {
      process.env.ESLINT_PLUGIN_SVGO_DEBUG = previousDebug
    }
  })
})
