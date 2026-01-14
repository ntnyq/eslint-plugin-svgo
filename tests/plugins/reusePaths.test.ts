import { svgo as rule } from '../../src/rules/svgo'
import { run } from '../internal'

run({
  name: 'reusePaths',
  rule,
  invalid: [],
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
