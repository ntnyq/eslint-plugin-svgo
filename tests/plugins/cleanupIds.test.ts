import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'cleanupIds',
  rule,
  invalid: [
    {
      description: 'cleanupIds default - minify referenced IDs',
      filename: 'file.svg',
      options: [
        {
          plugins: ['cleanupIds'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <circle id="myGradient" cx="50" cy="50" r="30" />
          </defs>
          <use href="#myGradient" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/id="[a-z]"/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'cleanupIds valid SVG with unique IDs',
      filename: 'file.svg',
      options: [
        {
          plugins: [],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="p1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="blue"/></pattern></defs><rect x="0" y="0" width="100" height="100" fill="url(#p1)"/></svg>',
    },
  ],
})
