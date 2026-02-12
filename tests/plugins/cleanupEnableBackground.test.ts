import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'cleanupEnableBackground',
  rule,
  invalid: [
    {
      description:
        'cleanupEnableBackground - remove enable-background attribute',
      filename: 'file.svg',
      options: [
        {
          plugins: ['cleanupEnableBackground'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" enable-background="new 0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/enable-background/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description:
        'cleanupEnableBackground valid SVG without enable-background',
      filename: 'file.svg',
      options: [
        {
          plugins: ['cleanupEnableBackground'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
