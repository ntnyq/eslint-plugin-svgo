import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'moveElemsAttrsToGroup',
  rule,
  invalid: [
    {
      description:
        'moveElemsAttrsToGroup - move common attributes to parent group',
      filename: 'file.svg',
      options: [
        {
          plugins: ['moveElemsAttrsToGroup'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g>
            <rect x="10" y="10" width="30" height="30" fill="blue" />
            <rect x="50" y="50" width="30" height="30" fill="blue" />
          </g>
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/<g fill="blue">/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'moveElemsAttrsToGroup valid SVG with optimized groups',
      filename: 'file.svg',
      options: [
        {
          plugins: ['moveElemsAttrsToGroup'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="blue"><rect x="10" y="10" width="30" height="30"/><rect x="50" y="50" width="30" height="30"/></g></svg>',
    },
  ],
})
