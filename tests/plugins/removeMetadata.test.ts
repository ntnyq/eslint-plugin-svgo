import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeMetadata',
  rule,
  invalid: [
    {
      description: 'removeMetadata default - remove metadata elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeMetadata'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <metadata><dc:title xmlns:dc="http://purl.org/dc/elements/1.1/">Icon</dc:title></metadata>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<metadata/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeMetadata valid SVG without metadata',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeMetadata'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
