import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { run } from '../internal'

run({
  name: 'reusePaths',
  rule,
  invalid: [
    {
      description: 'reusePaths - replace duplicate paths with use elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['reusePaths'],
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg"><path d="M0 0h10v10z" fill="red"/><path d="M0 0h10v10z" fill="red" transform="translate(20)"/></svg>',
      output(output) {
        expect(output).toBe(
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path fill="red" d="M0 0h10v10z" id="reuse-0"/></defs><use xlink:href="#reuse-0"/><use transform="translate(20)" xlink:href="#reuse-0"/></svg>',
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
        'reusePaths valid SVG - plugin has no effect on simple paths',
      filename: 'file.svg',
      options: [
        {
          plugins: ['reusePaths'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 10h20v20h-20z" fill="blue"/><path d="M50 50h20v20h-20z" fill="red"/></svg>',
    },
  ],
})
