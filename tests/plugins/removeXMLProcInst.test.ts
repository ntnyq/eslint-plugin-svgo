import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeXMLProcInst',
  rule,
  invalid: [
    {
      description: 'removeXMLProcInst default - remove XML declaration',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeXMLProcInst'],
        },
      ],
      code: $`
        <?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<\?xml/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeXMLProcInst valid SVG without declaration',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeXMLProcInst'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
