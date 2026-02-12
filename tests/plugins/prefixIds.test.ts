import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'prefixIds',
  rule,
  invalid: [
    {
      description: 'prefixIds - add prefix to IDs',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'prefixIds',
              params: {
                prefix: 'icon',
              },
            },
          ],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <circle id="myCircle" cx="50" cy="50" r="30" />
          </defs>
          <use href="#myCircle" />
        </svg>
      `,
      output(output) {
        expect(output).toMatch(/id="icon__myCircle"/)
        expect(output).toMatch(/href="#icon__myCircle"/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'prefixIds valid SVG with prefixed IDs',
      filename: 'file.svg',
      options: [
        {
          plugins: [
            {
              name: 'prefixIds',
              params: {
                prefix: 'icon',
              },
            },
          ],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><circle id="icon__myCircle" cx="50" cy="50" r="30"/></defs><use href="#icon__myCircle"/></svg>',
    },
  ],
})
