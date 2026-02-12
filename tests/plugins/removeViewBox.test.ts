import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeViewBox',
  rule,
  invalid: [
    {
      description:
        'removeViewBox default - remove viewBox when width/height present',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeViewBox'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/viewBox/)
        expect(output).toMatch(/width="100"/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeViewBox valid - viewBox without width/height',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeViewBox'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
