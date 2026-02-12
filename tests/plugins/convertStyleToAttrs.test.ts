import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'convertStyleToAttrs',
  rule,
  invalid: [
    {
      description: 'convertStyleToAttrs default - convert style to attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertStyleToAttrs'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" style="fill:blue" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/fill="blue"/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'convertStyleToAttrs valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertStyleToAttrs'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
