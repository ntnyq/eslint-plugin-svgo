import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'collapseGroups',
  rule,
  invalid: [
    {
      description: 'collapseGroups default - collapse redundant groups',
      filename: 'file.svg',
      options: [
        {
          plugins: ['collapseGroups'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g fill="blue">
            <rect x="10" y="10" width="30" height="30" />
          </g>
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/rect[^>]*fill="blue"/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'collapseGroups valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: [],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g id="group1"><rect x="10" y="10" width="30" height="30" fill="blue"/></g></svg>',
    },
  ],
})
