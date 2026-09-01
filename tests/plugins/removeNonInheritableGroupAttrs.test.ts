import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { run } from '../internal'

run({
  name: 'removeNonInheritableGroupAttrs',
  rule,
  invalid: [
    {
      description:
        'removeNonInheritableGroupAttrs - remove unsupported group presentation attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeNonInheritableGroupAttrs'],
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg"><g overflow="hidden" fill="red" opacity=".5"><rect width="10" height="10"/></g></svg>',
      output(output) {
        expect(output).toBe(
          '<svg xmlns="http://www.w3.org/2000/svg"><g fill="red" opacity=".5"><rect width="10" height="10"/></g></svg>',
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
        'removeNonInheritableGroupAttrs valid SVG with inheritable attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeNonInheritableGroupAttrs'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="blue" opacity=".5"><rect x="10" y="10" width="80" height="80"/></g></svg>',
    },
  ],
})
