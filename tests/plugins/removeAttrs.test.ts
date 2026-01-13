import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeAttrs',
  rule,
  invalid: [
    {
      description: 'removeAttrs - remove specific attributes by name',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: ['id', 'class'],
              },
            },
          ],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" id="rect1" class="shape" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/id="/)
        expect(output).not.toMatch(/class="/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeAttrs valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: ['data-*'],
              },
            },
          ],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
