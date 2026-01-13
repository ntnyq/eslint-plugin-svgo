import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeDimensions',
  rule,
  invalid: [
    {
      description: 'removeDimensions default - remove width and height',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeDimensions'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/svg[^>]*width/)
        expect(output).toMatch(/viewBox/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeDimensions valid SVG without width/height',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeDimensions'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
