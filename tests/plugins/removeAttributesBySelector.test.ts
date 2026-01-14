import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeAttributesBySelector',
  rule,
  invalid: [
    {
      description:
        'removeAttributesBySelector - remove attributes by CSS selector',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'removeAttributesBySelector',
              params: {
                selectors: [
                  {
                    selector: '[fill="red"]',
                    attributes: ['fill'],
                  },
                ],
              },
            },
          ],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="30" height="30" fill="red" />
          <rect x="50" y="50" width="30" height="30" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<rect[^>]*x="10"[^>]*fill="red"/)
        expect(output).toMatch(/fill="blue"/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeAttributesBySelector valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'removeAttributesBySelector',
              params: {
                selectors: [
                  {
                    selector: '[fill="red"]',
                    attributes: ['stroke'],
                  },
                ],
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
