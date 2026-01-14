import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeUnusedNS',
  rule,
  invalid: [
    {
      description: 'removeUnusedNS - remove unused namespace declarations',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeUnusedNS'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/xmlns:xlink/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeUnusedNS valid SVG without unused namespaces',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeUnusedNS'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
