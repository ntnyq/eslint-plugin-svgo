# eslint-plugin-svgo

[![CI](https://github.com/ntnyq/eslint-plugin-svgo/workflows/CI/badge.svg)](https://github.com/ntnyq/eslint-plugin-svgo/actions)
[![NPM VERSION](https://img.shields.io/npm/v/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![CODECOV](https://codecov.io/github/ntnyq/eslint-plugin-svgo/branch/main/graph/badge.svg?token=1B7879ETB6)](https://codecov.io/github/ntnyq/eslint-plugin-svgo)
[![LICENSE](https://img.shields.io/github/license/ntnyq/eslint-plugin-svgo.svg)](https://github.com/ntnyq/eslint-plugin-svgo/blob/main/LICENSE)

Optimize SVG files with [SVGO](https://github.com/svg/svgo) using ESLint.

## Supported

- SVGO v4.0.0+
- ESLint v9.5.0+

## Install

```shell
npm install eslint-plugin-svgo -D
```

```shell
yarn add eslint-plugin-svgo -D
```

```shell
pnpm add eslint-plugin-svgo -D
```

## Basic Usage

```ts
// eslint.config.js

import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // ...other flat configs
  pluginSVGO.configs.recommended,
])
```

## Advanced Usage

```ts
// eslint.config.js

import { defineConfig } from 'eslint/config'
import { parserPlain, plugin as pluginSVGO } from 'eslint-plugin-svgo'

export default defineConfig([
  // ...other flat configs
  {
    // plugin name, optional
    name: 'svgo',

    // only check svg files
    files: ['**/*.svg'],

    // ignore matched svg files
    ignores: ['icons/foo.svg', 'images/**/*.svg'],

    // use svgo plugins
    plugins: {
      svgo: pluginSVGO,
    },

    // use parser
    languageOptions: {
      parser: parserPlain,
    },

    rules: {
      'svgo/svgo': [
        'error',
        {
          // svgo config
          floatPrecision: 2,
          js2svg: {
            pretty: true,
          },
          plugins: [
            // plugin preset-default
            'preset-default',

            // overrides preset-default
            {
              name: 'preset-default',
              params: {
                overrides: {
                  // disable plugin
                  cleanupAttrs: false,

                  // custom plugin params
                  cleanupIds: {
                    minify: false,
                  },
                },
              },
            },

            // plugin name
            'cleanupIds',

            // plugin with params
            {
              name: 'cleanupIds',
              params: {
                minify: false,
              },
            },
          ],
        },
      ],
    },
  },
])
```

## Intergrated

### VSCode

Enable `xml` support.

```json
{
  "eslint.validate": ["xml"]
}
```

### Prettier

You should ignores `**/*.svg` for `eslint-plugin-prettier` config or add it to `.prettierignore`

## Rules

### `svgo/svgo`

Use svgo to optimize SVG files.

#### Options

##### svgoConfig

- **type**: `boolean | string`
- **default**: `undefined`

Use an external config file, e.g: svgo.config.mjs.

Set to `true`, svgo will auto load config.

Set to `path/to/your/svgo.config` to custom config file path.

> [!NOTE]
> If you use `svgoConfig`, any other rule options will be ignored unless no config file is found.

##### path

- **type**: `string`
- **default**: `context.filename`

Can be used by plugins, for example prefixids.

##### multipass

- **type**: `boolean`
- **default**: `false`

Pass over SVGs multiple times to ensure all optimizations are applied.

##### floatPrecision

- **type**: `number`
- **default**: `3`

Precision of floating point numbers. Will be passed to each plugin that supports this param.

##### datauri

- **type**: `'base64' | 'enc' | 'unenc'`
- **default**: `undefined`

Output as Data URI string.

##### js2svg

- **type**: `object`
- **default**: `undefined`

Options for rendering optimized SVG from AST. Check [svgo/lib/types.d.ts](https://github.com/svg/svgo/blob/main/lib/types.d.ts) for details.

Options bellow are not supported:

- `regEntities`
- `regValEntities`
- `encodeEntity`

##### plugins

- **type**: `array`
- **default**: `['preset-default']`

Plugins configuration. Check [Plugins | SVGO Documentation](https://svgo.dev/docs/plugins/) for details.

## Limitation

For ESLint use json schema compatible syntax as its rule options, so **function**, **regexp** types are not supported in rule `svgo/svgo` options. See bellow:

- `js2svg`
  - `regEntities` - `function`
  - `regValEntities` - `function`
  - `encodeEntity` - `function`
- `plugins`
  - `prefixIds`
    - `prefix` - `function`, but type `boolean` and `string` is supported
  - `addClassesToSVGElement`
    - `className` - `function`, but type `string` is supported
    - `classNames` - `function`, but type `string` is supported
  - `convertColors`
    - `currentColor` - `regexp`, but type `boolean` and `string` is supported
  - `removeComments`
    - `preservePatterns` - `regexp`, but type `boolean` and `string` is supported
- any custom plugins
  - `fn` - `function`

> [!TIP]
> You can still support all of them by using options **[svgoConfig](https://github.com/ntnyq/eslint-plugin-svgo#svgoconfig)** and a svgo config file.

## Credits

- [antfu/eslint-plugin-format](https://github.com/antfu/eslint-plugin-format)

## License

[MIT](./LICENSE) License © 2024-PRESENT [ntnyq](https://github.com/ntnyq)
