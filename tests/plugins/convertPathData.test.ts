import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'convertPathData',
  rule,
  invalid: [
    {
      description: 'convertPathData default - convert path data',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertPathData'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M 10 10 L 20 20 L 30 10" fill="none" stroke="black" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/d="/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'convertPathData valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: [],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 10 L20 20 L30 10 Z" fill="blue"/></svg>',
    },
  ],
})
