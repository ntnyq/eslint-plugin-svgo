import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'convertTransform',
  rule,
  invalid: [
    {
      description: 'convertTransform default - optimize transform',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertTransform'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="blue" transform="translate(0,0)" />
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
      description: 'convertTransform valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: [],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue" transform="translate(10, 20)"/></svg>',
    },
  ],
})
