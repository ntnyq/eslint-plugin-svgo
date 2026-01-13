import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'convertEllipseToCircle',
  rule,
  invalid: [
    {
      description:
        'convertEllipseToCircle default - convert ellipse with equal radii',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertEllipseToCircle'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="30" ry="30" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/<circle/)
        expect(output).not.toMatch(/<ellipse/)
      },
      errors(errors) {
        expect(errors.length).toBeGreaterThan(0)
      },
    },
  ],
  valid: [
    {
      description:
        'convertEllipseToCircle valid - ellipse with different radii',
      filename: 'file.svg',
      options: [
        {
          plugins: ['convertEllipseToCircle'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="40" ry="30" fill="blue"/></svg>',
    },
  ],
})
