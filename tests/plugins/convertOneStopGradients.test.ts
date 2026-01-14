import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'convertOneStopGradients',
  rule,
  invalid: [
    {
      description:
        'convertOneStopGradients - convert single-stop gradient to fill',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertOneStopGradients'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stop-color="blue" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="80" height="80" fill="url(#grad)" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/linearGradient/)
        expect(output).toMatch(/fill="blue"/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description: 'convertOneStopGradients valid SVG with multi-stop gradient',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertOneStopGradients'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="grad"><stop offset="0%" stop-color="blue"/><stop offset="100%" stop-color="red"/></linearGradient></defs><rect x="10" y="10" width="80" height="80" fill="url(#grad)"/></svg>',
    },
  ],
})
