import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'svgo',
  rule,
  invalid: [
    {
      filename: 'cleanup-ids.svg',
      options: {
        plugins: ['cleanupIds'],
      },
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" width="150">
          <rect id="useless" width="0" height="0" fill="#ff0000"/>
        </svg>
      `,
      output(output) {
        expect(output).toMatchInlineSnapshot(`
          "<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" width="150">
            <rect width="0" height="0" fill="#ff0000"/>
          </svg>
          "
        `)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
})
