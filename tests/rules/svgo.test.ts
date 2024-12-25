import { expect } from 'vitest'
import { resolve } from '../../scripts/utils'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'svgo',
  rule,
  invalid: [
    /**
     * ===========================================
     *                 js2svg
     * ===========================================
     */
    {
      description: 'js2svg default',
      filename: 'file.svg',
      options: {
        plugins: [],
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
          "<?xml version="1.0" encoding="UTF-8"?>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0  150 100 " width="150">
          <!--Created with love!-->
            <defs>
              <ellipse cx="50" cy="50.0" rx="50.00" ry="auto" fill="black" id="circle"/>
            </defs>
            <g>
              <use href="#circle" transform="skewX(16)"/>
              <rect id="useless" width="0" height="0" fill="#ff0000"/>
            </g>
          </svg>
          "
        `)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'js2svg pretty false',
      filename: 'file.svg',
      options: {
        js2svg: {
          pretty: false,
        },
        plugins: [],
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
        expect(output).toMatchInlineSnapshot(
          `"<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0  150 100 " width="150"><!--Created with love!--><defs><ellipse cx="50" cy="50.0" rx="50.00" ry="auto" fill="black" id="circle"/></defs><g><use href="#circle" transform="skewX(16)"/><rect id="useless" width="0" height="0" fill="#ff0000"/></g></svg>"`,
        )
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'js2svg indent 4',
      filename: 'file.svg',
      options: {
        js2svg: {
          indent: 4,
        },
        plugins: [],
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
          "<?xml version="1.0" encoding="UTF-8"?>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0  150 100 " width="150">
          <!--Created with love!-->
              <defs>
                  <ellipse cx="50" cy="50.0" rx="50.00" ry="auto" fill="black" id="circle"/>
              </defs>
              <g>
                  <use href="#circle" transform="skewX(16)"/>
                  <rect id="useless" width="0" height="0" fill="#ff0000"/>
              </g>
          </svg>
          "
        `)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },

    /**
     * ===========================================
     *                 preset-default
     * ===========================================
     */
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
      description: 'preset-default with cleanupIds params',
      filename: 'file.svg',
      options: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: {
                  // minify referenced IDs
                  minify: false,
                },
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

    /**
     * ===========================================
     *                 plugins
     * ===========================================
     */
    {
      description: 'plugin cleanupIds name',
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
    {
      description: 'plugin cleanupIds object',
      filename: 'file.svg',
      options: {
        plugins: [
          {
            name: 'cleanupIds',
          },
        ],
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
    {
      description: 'plugin cleanupIds with params',
      filename: 'file.svg',
      options: {
        plugins: [
          {
            name: 'cleanupIds',
            params: {
              remove: false,
            },
          },
        ],
      },
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" width="150">
          <rect id="useless" width="0" height="0" fill="#ff0000"/>
        </svg>
      `,
      output(output) {
        expect(output).toMatchInlineSnapshot(`
          "<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" width="150">
            <rect id="useless" width="0" height="0" fill="#ff0000"/>
          </svg>
          "
        `)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },

    /**
     * ===========================================
     *                 svgoConfig
     * ===========================================
     */
    {
      description: 'svgoConfig default',
      filename: 'file.svg',
      options: {
        svgoConfig: true,
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
        expect(output).toMatchInlineSnapshot(
          `
          "<?xml version="1.0" encoding="UTF-8"?>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0  150 100 " width="150">
          <!--Created with love!-->
              <defs>
                  <ellipse cx="50" cy="50.0" rx="50.00" ry="auto" fill="black" id="a"/>
              </defs>
              <g>
                  <use href="#a" transform="skewX(16)"/>
                  <rect width="0" height="0" fill="#ff0000"/>
              </g>
          </svg>
          "
        `,
        )
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'svgoConfig config path',
      filename: 'file.svg',
      options: {
        svgoConfig: resolve('svgo.config.mjs'),
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
          "<?xml version="1.0" encoding="UTF-8"?>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0  150 100 " width="150">
          <!--Created with love!-->
              <defs>
                  <ellipse cx="50" cy="50.0" rx="50.00" ry="auto" fill="black" id="a"/>
              </defs>
              <g>
                  <use href="#a" transform="skewX(16)"/>
                  <rect width="0" height="0" fill="#ff0000"/>
              </g>
          </svg>
          "
        `)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },

    /**
     * ===========================================
     *                parser error
     * ===========================================
     */
    {
      description: 'invalid',
      filename: 'file.svg',
      code: $`
        <svg>
      `,
      output(output) {
        expect(output).toMatchInlineSnapshot(`"<svg>"`)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'not svg',
      filename: 'file.svg',
      code: $`
        name: CI
        on:
          push:
            branches:
              - main
      `,
      output(output) {
        expect(output).toMatchInlineSnapshot(`
          "name: CI
          on:
            push:
              branches:
                - main"
        `)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
})
