import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeEmptyText',
  rule,
  invalid: [
    {
      description: 'removeEmptyText default - remove empty text elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeEmptyText'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <text x="10" y="20"></text>
          <text x="30" y="40">Hello</text>
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<text[^>]*><\/text>/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeEmptyText valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeEmptyText'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="10" y="20">Text content</text></svg>',
    },
  ],
})
