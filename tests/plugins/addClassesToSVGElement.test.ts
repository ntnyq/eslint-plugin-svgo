import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'addClassesToSVGElement',
  rule,
  invalid: [
    {
      description: 'addClassesToSVGElement - add classes to SVG element',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'addClassesToSVGElement',
              params: {
                classNames: ['icon', 'svg-icon'],
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
        expect(output).toMatch(/class="icon svg-icon"/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'addClassesToSVGElement valid SVG already has classes',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'addClassesToSVGElement',
              params: {
                classNames: ['icon'],
              },
            },
          ],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="icon"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
