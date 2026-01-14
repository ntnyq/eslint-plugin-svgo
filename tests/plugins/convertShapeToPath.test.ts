import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'convertShapeToPath',
  rule,
  invalid: [
    {
      description: 'convertShapeToPath - convert rect to path',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertShapeToPath'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/<path/)
        expect(output).not.toMatch(/<rect/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'convertShapeToPath valid SVG already using path',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertShapeToPath'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 10h80v80h-80z" fill="blue"/></svg>',
    },
  ],
})
