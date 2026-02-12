import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'inlineStyles',
  rule,
  invalid: [
    {
      description: 'inlineStyles - inline CSS from style element to attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['inlineStyles'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <style>
            .shape { fill: blue; }
          </style>
          <rect x="10" y="10" width="80" height="80" class="shape" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/style="fill:blue"/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'inlineStyles valid SVG with inline styles',
      filename: 'file.svg',
      options: [
        {
          plugins: ['inlineStyles'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
