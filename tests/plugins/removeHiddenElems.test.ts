import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeHiddenElems',
  rule,
  invalid: [
    {
      description: 'removeHiddenElems default - remove hidden elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeHiddenElems'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="0" height="80" fill="blue" />
          <circle cx="50" cy="50" r="30" display="none" />
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
      description: 'removeHiddenElems valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeHiddenElems'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
