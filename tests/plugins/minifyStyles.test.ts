import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'minifyStyles',
  rule,
  invalid: [
    {
      description: 'minifyStyles - minify CSS in style elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['minifyStyles'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <style>
            .shape {
              fill: blue;
              stroke: red;
            }
          </style>
          <rect x="10" y="10" width="80" height="80" class="shape" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/.shape\{fill:#00f;stroke:red\}/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'minifyStyles valid SVG with minified styles',
      filename: 'file.svg',
      options: [
        {
          plugins: ['minifyStyles'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><style>.shape{fill:#00f;stroke:red}</style><rect x="10" y="10" width="80" height="80" class="shape"/></svg>',
    },
  ],
})
