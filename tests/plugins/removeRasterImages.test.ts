import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { run } from '../internal'

run({
  name: 'removeRasterImages',
  rule,
  invalid: [
    {
      description: 'removeRasterImages - remove raster image references',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeRasterImages'],
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image xlink:href="photo.png"/><rect width="1" height="1"/></svg>',
      output(output) {
        expect(output).toBe(
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="1" height="1"/></svg>',
        )
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
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
    {
      description: 'removeRasterImages preserves vector image references',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeRasterImages'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image xlink:href="icon.svg"/></svg>',
    },
  ],
})
