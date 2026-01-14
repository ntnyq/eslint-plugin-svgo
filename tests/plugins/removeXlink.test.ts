import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeXlink',
  rule,
  invalid: [
    {
      description: 'removeXlink - remove xlink namespace and convert to href',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeXlink'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
          <defs>
            <circle id="circle" cx="50" cy="50" r="30" />
          </defs>
          <use xlink:href="#circle" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/xlink:href/)
        expect(output).toMatch(/href="#circle"/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeXlink valid SVG with href instead of xlink:href',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeXlink'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><circle id="circle" cx="50" cy="50" r="30"/></defs><use href="#circle"/></svg>',
    },
  ],
})
