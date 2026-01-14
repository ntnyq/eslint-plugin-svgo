import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeStyleElement',
  rule,
  invalid: [
    {
      description: 'removeStyleElement - remove style elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeStyleElement'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <style>.shape { fill: blue; }</style>
          <rect x="10" y="10" width="80" height="80" class="shape" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<style/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeStyleElement valid SVG without style elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeStyleElement'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
