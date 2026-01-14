import { svgo as rule } from '../../src/rules/svgo'
import { run } from '../internal'

run({
  name: 'sortDefsChildren',
  rule,
  invalid: [],
  valid: [
    {
      description: 'sortDefsChildren valid SVG with defs children',
      filename: 'file.svg',
      options: [
        {
          plugins: ['sortDefsChildren'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="grad1"><stop offset="0%" stop-color="red"/></linearGradient><linearGradient id="grad2"><stop offset="0%" stop-color="blue"/></linearGradient></defs><rect x="10" y="10" width="80" height="80" fill="url(#grad1)"/></svg>',
    },
  ],
})
