import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeEmptyContainers',
  rule,
  invalid: [
    {
      description: 'removeEmptyContainers default - remove empty groups',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeEmptyContainers'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g></g>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<g><\/g>/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeEmptyContainers valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeEmptyContainers'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><rect x="10" y="10" width="80" height="80" fill="blue"/></g></svg>',
    },
  ],
})
