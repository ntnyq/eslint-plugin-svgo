import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeEmptyAttrs',
  rule,
  invalid: [
    {
      description: 'removeEmptyAttrs default - remove all empty attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeEmptyAttrs'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/fill=""/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeEmptyAttrs valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeEmptyAttrs'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
