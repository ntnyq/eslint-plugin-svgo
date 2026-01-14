import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeElementsByAttr',
  rule,
  invalid: [
    {
      description: 'removeElementsByAttr - remove elements by attribute',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'removeElementsByAttr',
              params: {
                id: 'remove-me',
              },
            },
          ],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="30" height="30" fill="blue" id="remove-me" />
          <rect x="50" y="50" width="30" height="30" fill="red" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/id="remove-me"/)
        expect(output).toMatch(/fill="red"/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'removeElementsByAttr valid SVG without matching elements',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'removeElementsByAttr',
              params: {
                id: 'remove-me',
              },
            },
          ],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
