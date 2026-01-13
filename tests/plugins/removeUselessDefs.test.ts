import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeUselessDefs',
  rule,
  invalid: [
    {
      description: 'removeUselessDefs default - remove unused defs',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeUselessDefs'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <pattern id="p1" x="0" y="0" width="10" height="10">
              <rect width="10" height="10" fill="blue" />
            </pattern>
            <pattern id="unused" x="0" y="0" width="10" height="10">
              <rect width="10" height="10" fill="red" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#p1)" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/p1/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeUselessDefs valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeUselessDefs'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="p1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="blue"/></pattern></defs><rect x="0" y="0" width="100" height="100" fill="url(#p1)"/></svg>',
    },
  ],
})
