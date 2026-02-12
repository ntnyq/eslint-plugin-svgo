import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeUnknownsAndDefaults',
  rule,
  invalid: [
    {
      description:
        'removeUnknownsAndDefaults - remove unknown elements and default attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeUnknownsAndDefaults'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
          <unknownElement />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/unknownElement/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeUnknownsAndDefaults valid SVG without defaults',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeUnknownsAndDefaults'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
