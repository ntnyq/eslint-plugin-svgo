import { expect } from 'vitest'
import { svgo as rule } from '../../src/rules/svgo'
import { $, run } from '../internal'

run({
  name: 'removeScripts',
  rule,
  invalid: [
    {
      description: 'removeScripts - remove script elements',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeScripts'],
        },
      ],
      code: $`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <script>alert('Hello');</script>
          <rect x="10" y="10" width="80" height="80" fill="blue" />
        </svg>
      `,
      output(output) {
        expect(output).not.toMatch(/<script/)
        expect(output).not.toMatch(/alert/)
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'removeScripts - remove SVG event attributes',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeScripts'],
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" onload="alert(1)"><rect id="target" onclick="alert(2)"/></svg>',
      output(output) {
        expect(output).toBe(
          '<svg xmlns="http://www.w3.org/2000/svg"><rect id="target"/></svg>',
        )
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'removeScripts - collapse executable links',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeScripts'],
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg"><a href="javascript:alert(1)"><rect id="js"/></a><a href="vbscript:alert(1)"><rect id="vb"/></a><a href="data:text/html,&lt;script&gt;alert(1)&lt;/script&gt;"><rect id="html"/></a><a href="data:image/png;base64,AA=="><rect id="png"/></a><a href="https://example.com"><rect id="https"/></a></svg>',
      output(output) {
        expect(output).toBe(
          '<svg xmlns="http://www.w3.org/2000/svg"><rect id="js"/><rect id="vb"/><rect id="html"/><a href="data:image/png;base64,AA=="><rect id="png"/></a><a href="https://example.com"><rect id="https"/></a></svg>',
        )
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'removeScripts - sanitize foreignObject HTML',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeScripts'],
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg"><foreignObject><div xmlns="http://www.w3.org/1999/xhtml" onclick="alert(1)"><iframe srcdoc="&lt;script&gt;alert(1)&lt;/script&gt;"/><form action="javascript:alert(1)"><img src="data:image/svg+xml,&lt;svg onload=alert(1)&gt;"/><img id="safe" src="data:image/png;base64,AA=="/></form></div></foreignObject></svg>',
      output(output) {
        expect(output).toBe(
          '<svg xmlns="http://www.w3.org/2000/svg"><foreignObject><div xmlns="http://www.w3.org/1999/xhtml"><iframe/><form><img/><img id="safe" src="data:image/png;base64,AA=="/></form></div></foreignObject></svg>',
        )
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
    {
      description: 'removeScripts - sanitize namespaced and obfuscated links',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeScripts'],
        },
      ],
      code: '<svg:svg xmlns:svg="http://www.w3.org/2000/svg"><svg:a href="java&#9;script:alert(1)"><svg:rect id="unsafe"/></svg:a></svg:svg>',
      output(output) {
        expect(output).toBe(
          '<svg:svg xmlns:svg="http://www.w3.org/2000/svg"><svg:rect id="unsafe"/></svg:svg>',
        )
      },
      errors(errors) {
        expect(errors).toMatchSnapshot()
      },
    },
  ],
  valid: [
    {
      description: 'removeScripts valid SVG without scripts',
      filename: 'file.svg',
      options: [
        {
          plugins: ['removeScripts'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" fill="blue"/></svg>',
    },
    {
      description: 'preset-default does not enable removeScripts',
      filename: 'file.svg',
      options: [
        {
          plugins: ['preset-default'],
          js2svg: { pretty: false },
        },
      ],
      code: '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script><path d="M0 0h1v1H0z"/></svg>',
    },
  ],
})
