import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { run } from '../internal'

run({
  name: 'moveGroupAttrsToElems',
  rule,
  invalid: [
    {
      description: 'moveGroupAttrsToElems - distribute group transforms',
      filename: 'file.svg',
      options: [
        {
          plugins: ['moveGroupAttrsToElems'],
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg"><g transform="scale(2)"><path d="M0 0h10" transform="rotate(45)"/><path d="M0 0v10"/></g></svg>',
      output(output) {
        expect(output).toBe(
          '<svg xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h10" transform="scale(2) rotate(45)"/><path d="M0 0v10" transform="scale(2)"/></g></svg>',
        )
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description:
        'moveGroupAttrsToElems valid SVG with attributes on elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['moveGroupAttrsToElems'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><rect x="10" y="10" width="80" height="80" fill="blue"/></g></svg>',
    },
    {
      description:
        'moveGroupAttrsToElems preserves transforms for unsupported children',
      filename: 'file.svg',
      options: [
        {
          plugins: ['moveGroupAttrsToElems'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg"><g transform="scale(2)"><rect width="10" height="10"/></g></svg>',
    },
  ],
})
