import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'mergeStyles',
  rule,
  invalid: [
    {
      description: 'mergeStyles - merge multiple style elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['mergeStyles'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <style>.shape { fill: blue; }</style>
          <style>.text { font-size: 12px; }</style>
          <rect x="10" y="10" width="80" height="80" class="shape" />
        </svg>
      `,
      output(output) {
        const styleCount = (output.match(/<style/g) || []).length
        expect(styleCount).toBeLessThanOrEqual(1)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'mergeStyles valid SVG with single style element',
      filename: 'file.svg',
      options: [
        {
          plugins: ['mergeStyles'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><style>.shape{fill:blue}</style><rect x="10" y="10" width="80" height="80" class="shape"/></svg>',
    },
  ],
})
