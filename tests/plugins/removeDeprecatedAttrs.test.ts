import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeDeprecatedAttrs',
  rule,
  invalid: [
    {
      description: 'removeDeprecatedAttrs - remove deprecated SVG attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeDeprecatedAttrs'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/version="1\.1"/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description:
        'removeDeprecatedAttrs valid SVG without deprecated attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeDeprecatedAttrs'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
