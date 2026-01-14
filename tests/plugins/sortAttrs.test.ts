import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'sortAttrs',
  rule,
  invalid: [
    {
      description: 'sortAttrs - sort attributes alphabetically',
      filename: 'file.svg',
      options: [
        {
          plugins: ['sortAttrs'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect fill="blue" x="10" y="10" width="80" height="80" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(
          /<rect[^>]*width="80"[^>]*height="80"[^>]*x="10"[^>]*y="10"[^>]*fill="blue"/,
        )
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'sortAttrs valid SVG with sorted attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['sortAttrs'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="80" height="80" x="10" y="10" fill="blue"/></svg>',
    },
  ],
})
