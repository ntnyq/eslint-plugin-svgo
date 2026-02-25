import { describe, expect, it, vi } from 'vitest'
import { svgo } from '../../src/rules/svgo'
import type { Rule } from 'eslint'

// Mock synckit module
vi.mock('synckit', () => ({
  createSyncFn: vi.fn(),
}))

describe('svgo rule error handling', () => {
  it('should handle non-SvgoParserError errors (covers line 69)', async () => {
    const { createSyncFn } = await import('synckit')

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
      message: 'Failed to optimize SVG file: test.svg',
    })
  })
})
