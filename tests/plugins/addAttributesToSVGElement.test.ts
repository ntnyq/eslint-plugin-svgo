import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'addAttributesToSVGElement',
  rule,
  invalid: [
    {
      description:
        'addAttributesToSVGElement - add custom attributes to SVG element',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'addAttributesToSVGElement',
              params: {
                attributes: [{ role: 'img' }, { 'aria-label': 'Icon' }],
              },
            },
          ],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/role="img"/)
        expect(output).toMatch(/aria-label="Icon"/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'addAttributesToSVGElement valid SVG already has attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'addAttributesToSVGElement',
              params: {
                attributes: [{ role: 'img' }],
              },
            },
          ],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
