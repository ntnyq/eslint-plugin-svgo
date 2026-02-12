import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'cleanupAttrs',
  rule,
  invalid: [
    {
      description: 'cleanupAttrs default - remove empty attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['cleanupAttrs'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="" stroke="" />
          <circle cx="50" cy="50" r="30" id="" class="" />
        </svg>
      `,
      output(output) {
        expect(output).toBeTruthy()
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'cleanupAttrs with newlines true',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'cleanupAttrs',
              params: {
                newlines: true,
              },
            },
          ],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" title="test&#xA;newline" />
        </svg>
      `,
      output(output) {
        expect(output).toBeTruthy()
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'cleanupAttrs with trim true',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'cleanupAttrs',
              params: {
                trim: true,
              },
            },
          ],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" title="  spaced text  " />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/title="spaced text"/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'cleanupAttrs with spaces true',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'cleanupAttrs',
              params: {
                spaces: true,
              },
            },
          ],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" d="M 10  20  L 30  40" />
        </svg>
      `,
      output(output) {
        expect(output).toBeTruthy()
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'cleanupAttrs valid SVG',
      filename: 'file.svg',
      options: [
        {
          plugins: [],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue" stroke="red"/><circle cx="50" cy="50" r="30" id="circle1" class="shape"/></svg>',
    },
  ],
})
