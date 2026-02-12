import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeEditorsNSData',
  rule,
  invalid: [
    {
      description: 'removeEditorsNSData - remove editor namespace data',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeEditorsNSData'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="blue" sketch:type="MSShapeGroup" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/sketch:/)
        expect(output).not.toMatch(/bohemiancoding/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeEditorsNSData valid SVG without editor data',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeEditorsNSData'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
