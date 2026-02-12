import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'cleanupNumericValues',
  rule,
  invalid: [
    {
      description: 'cleanupNumericValues default - clean numeric values',
      filename: 'file.svg',
      options: [
        {
          plugins: ['cleanupNumericValues'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10.00" y="20.00" width="50.0" height="60" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).toBeTruthy()
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'cleanupNumericValues valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: ['cleanupNumericValues'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="20" width="50" height="60" fill="blue"/></svg>',
    },
  ],
})
