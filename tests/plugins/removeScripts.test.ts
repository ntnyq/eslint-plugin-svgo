import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeScripts',
  rule,
  invalid: [
    {
      description: 'removeScripts - remove script elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeScripts'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <script>alert('Hello');</script>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<script/)
        expect(output).not.toMatch(/alert/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeScripts valid SVG without scripts',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeScripts'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
