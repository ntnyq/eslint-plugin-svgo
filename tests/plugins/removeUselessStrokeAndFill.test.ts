import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeUselessStrokeAndFill',
  rule,
  invalid: [
    {
      description:
        'removeUselessStrokeAndFill - remove useless stroke and fill attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeUselessStrokeAndFill'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M10 10h80v80h-80z" fill="none" stroke="none" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/stroke="none"/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description:
        'removeUselessStrokeAndFill valid SVG with meaningful attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeUselessStrokeAndFill'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
  ],
})
