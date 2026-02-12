import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'cleanupListOfValues',
  rule,
  invalid: [
    {
      description: 'cleanupListOfValues - optimize list-based attribute values',
      filename: 'file.svg',
      options: [
        {
          plugins: ['cleanupListOfValues'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <polygon points="10, 10  50, 90  90, 10" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/points="10 10 50 90 90 10"/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'cleanupListOfValues valid SVG with optimized list values',
      filename: 'file.svg',
      options: [
        {
          plugins: ['cleanupListOfValues'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="10 10 50 90 90 10" fill="blue"/></svg>',
    },
  ],
})
