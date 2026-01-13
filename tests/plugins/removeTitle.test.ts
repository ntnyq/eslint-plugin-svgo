import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeTitle',
  rule,
  invalid: [
    {
      description: 'removeTitle default - remove title elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeTitle'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <title>My SVG Icon</title>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<title/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeTitle valid SVG without title',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeTitle'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
