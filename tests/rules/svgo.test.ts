import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'svgo',
  rule,
  invalid: [
    {
      description: 'default preset-default',
      filename: 'file.svg',
      code: $`
        <?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0  150 100 " width="150">
          <!-- Created with love! -->
          <defs>
            <ellipse cx="50" cy="50.0" rx="50.00" ry="auto" fill="black" id="circle"/>
          </defs>
          <g>
            <use href="#circle" transform="skewX(16)"/>
            <rect id="useless" width="0" height="0" fill="#ff0000"/>
          </g>
        </svg>
      `,
      output(output) {
        expect(output).toMatchInlineSnapshot(`
          "<svg xmlns="http://www.w3.org/2000/svg" width="150" viewBox="0 0 150 100">
            <defs>
              <circle id="a" cx="50" cy="50" r="50" fill="#000"/>
            </defs>
            <use href="#a" transform="skewX(16)"/>
          </svg>
          "
        `)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'preset-default disable cleanupIds',
      filename: 'file.svg',
      options: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: false,
              },
            },
          },
        ],
      },
      code: $`
        <?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0  150 100 " width="150">
          <!-- Created with love! -->
          <defs>
            <ellipse cx="50" cy="50.0" rx="50.00" ry="auto" fill="black" id="circle"/>
          </defs>
          <g>
            <use href="#circle" transform="skewX(16)"/>
            <rect id="useless" width="0" height="0" fill="#ff0000"/>
          </g>
        </svg>
      `,
      output(output) {
        expect(output).toMatchInlineSnapshot(`
          "<svg xmlns="http://www.w3.org/2000/svg" width="150" viewBox="0 0 150 100">
            <defs>
              <circle id="circle" cx="50" cy="50" r="50" fill="#000"/>
            </defs>
            <use href="#circle" transform="skewX(16)"/>
          </svg>
          "
        `)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'plugin cleanupIds',
      filename: 'file.svg',
      options: {
        plugins: ['cleanupIds'],
      },
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" width="150">
          <rect id="useless" width="0" height="0" fill="#ff0000"/>
        </svg>
      `,
      output(output) {
        expect(output).toMatchInlineSnapshot(`
          "<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" width="150">
            <rect width="0" height="0" fill="#ff0000"/>
          </svg>
          "
        `)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
})
