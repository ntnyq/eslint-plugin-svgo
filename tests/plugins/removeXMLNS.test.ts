import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeXMLNS',
  rule,
  invalid: [
    {
      description: 'removeXMLNS - remove xmlns attribute',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeXMLNS'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeXMLNS valid SVG without xmlns',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeXMLNS'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
