import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeDesc',
  rule,
  invalid: [
    {
      description: 'removeDesc default - remove desc elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeDesc'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <desc>This is a description</desc>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).toBeTruthy()
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeDesc valid SVG without desc',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeDesc'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
