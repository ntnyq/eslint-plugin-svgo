import { svgo as rule } from '../../src/rules/svgo'
import { run } from '../internal'

run({
  name: 'removeRasterImages',
  rule,
  invalid: [],
  valid: [
    {
      description: 'removeRasterImages valid SVG without raster images',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeRasterImages'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
