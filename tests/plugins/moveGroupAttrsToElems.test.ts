import { svgo as rule } from '../../src/rules/svgo'
import { run } from '../internal'

run({
  name: 'moveGroupAttrsToElems',
  rule,
  invalid: [],
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
  ],
})
