import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'mergePaths',
  rule,
  invalid: [
    {
      description: 'mergePaths - merge multiple path elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['mergePaths'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M10 10h30v30h-30z" fill="blue" />
          <path d="M50 50h30v30h-30z" fill="blue" />
        </svg>
      `,
      output(output) {
        const pathCount = (output.match(/<path/g) || []).length
        expect(pathCount).toBeLessThan(2)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'mergePaths valid SVG with single path',
      filename: 'file.svg',
      options: [
        {
          plugins: ['mergePaths'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 10h80v80h-80z" fill="blue"/></svg>',
    },
  ],
})
