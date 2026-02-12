import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeOffCanvasPaths',
  rule,
  invalid: [
    {
      description: 'removeOffCanvasPaths - remove paths outside viewBox',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeOffCanvasPaths'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M10 10h80v80h-80z" fill="blue" />
          <path d="M200 200h80v80h-80z" fill="red" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/fill="blue"/)
        expect(output).not.toMatch(/M200 200/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeOffCanvasPaths valid SVG with on-canvas paths only',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeOffCanvasPaths'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 10h80v80h-80z" fill="blue"/></svg>',
    },
  ],
})
