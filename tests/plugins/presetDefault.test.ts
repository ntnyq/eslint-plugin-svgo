import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'preset-default',
  rule,
  invalid: [
    {
      description: 'preset-default - apply default optimizations',
      filename: 'file.svg',
      options: [
        {
          plugins: ['preset-default'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <!-- Comment -->
          <title>My SVG</title>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<!--/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'preset-default with overrides - customize specific plugins',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeComments: false,
                },
              },
            },
          ],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <!-- Comment -->
          <title>My SVG</title>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/<!--/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'preset-default valid SVG already optimized',
      filename: 'file.svg',
      options: [
        {
          plugins: ['preset-default'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#00f" d="M10 10h80v80H10z"/></svg>',
    },
  ],
})
