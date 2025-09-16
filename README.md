# eslint-plugin-svgo

[![CI](https://github.com/ntnyq/eslint-plugin-svgo/workflows/CI/badge.svg)](https://github.com/ntnyq/eslint-plugin-svgo/actions)
[![NPM VERSION](https://img.shields.io/npm/v/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![CODECOV](https://codecov.io/github/ntnyq/eslint-plugin-svgo/graph/badge.svg?token=1B7879ETB6)](https://codecov.io/github/ntnyq/eslint-plugin-svgo)
[![LICENSE](https://img.shields.io/github/license/ntnyq/eslint-plugin-svgo.svg)](https://github.com/ntnyq/eslint-plugin-svgo/blob/main/LICENSE)

Optimize SVG files with [SVGO](https://github.com/svg/svgo) via ESLint.

## Compatibility

- SVGO v4.0.0+
- ESLint v9.5.0+

## Installation

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
    // Optional plugin name
    name: 'svgo',

    // Only check SVG files
    files: ['**/*.svg'],

    // Ignore matched SVG files
    ignores: ['icons/foo.svg', 'images/**/*.svg'],

    // Use SVGO plugins
    plugins: {
      svgo: pluginSVGO,
    },

    // Use parser
    languageOptions: {
      parser: parserPlain,
    },

    rules: {
      'svgo/svgo': [
        'error',
        {
          // SVGO configuration
          floatPrecision: 2,
          js2svg: {
            pretty: true,
          },
          plugins: [
            // Plugin: preset-default
            'preset-default',

            // Override preset-default
            {
              name: 'preset-default',
              params: {
                overrides: {
                  // Disable plugin
                  cleanupAttrs: false,

                  // Custom plugin parameters
                  cleanupIds: {
                    minify: false,
                  },
                },
              },
            },

            // Plugin name
            'cleanupIds',

            // Plugin with parameters
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

## Integration

### VSCode

Enable `xml` support:

```json
{
  "eslint.validate": ["xml"]
}
```

### Prettier

You should ignore `**/*.svg` in your `eslint-plugin-prettier` configuration or add it to `.prettierignore`.

## Rules

### `svgo/svgo`

Use SVGO to optimize SVG files.

#### Options

##### svgoConfig

- **type**: `boolean | string`
- **default**: `undefined`

Use an external config file, e.g. `svgo.config.mjs`.

Set to `true` to auto-load the config.

Set to `path/to/your/svgo.config` to specify a custom config file path.

> [!NOTE]
> If you use `svgoConfig`, all other rule options will be ignored unless no config file is found.

##### path

- **type**: `string`
- **default**: `context.filename`

Can be used by plugins, e.g. `prefixIds`.

##### multipass

- **type**: `boolean`
- **default**: `false`

Run multiple optimization passes to ensure all optimizations are applied.

##### floatPrecision

- **type**: `number`
- **default**: `3`

Precision for floating point numbers. This value is passed to each plugin that supports this parameter.

##### datauri

- **type**: `'base64' | 'enc' | 'unenc'`
- **default**: `undefined`

Output as a Data URI string.

##### js2svg

- **type**: `object`
- **default**: `undefined`

Options for rendering optimized SVG from AST. See [svgo/lib/types.d.ts](https://github.com/svg/svgo/blob/main/lib/types.d.ts) for details.

The following options are not supported:

- `regEntities`
- `regValEntities`
- `encodeEntity`

##### plugins

- **type**: `array`
- **default**: `['preset-default']`

Plugins configuration. See [Plugins | SVGO Documentation](https://svgo.dev/docs/plugins/) for details.

## Limitations

ESLint requires rule options to be compatible with JSON schema, so **function** and **regexp** types are not supported in the `svgo/svgo` rule options. See below:

- `js2svg`
  - `regEntities` - `function`
  - `regValEntities` - `function`
  - `encodeEntity` - `function`
- `plugins`
  - `prefixIds`
    - `prefix` - `function` (only `boolean` and `string` are supported)
  - `addClassesToSVGElement`
    - `className` - `function` (only `string` is supported)
    - `classNames` - `function` (only `string` is supported)
  - `convertColors`
    - `currentColor` - `regexp` (only `boolean` and `string` are supported)
  - `removeComments`
    - `preservePatterns` - `regexp` (only `boolean` and `string` are supported)
- Any custom plugins
  - `fn` - `function`

> [!TIP]
> You can still support all of these by using the **[svgoConfig](https://github.com/ntnyq/eslint-plugin-svgo#svgoconfig)** option and a SVGO config file.

## Credits

- [antfu/eslint-plugin-format](https://github.com/antfu/eslint-plugin-format)

## License

[MIT](./LICENSE) License © 2024-PRESENT [ntnyq](https://github.com/ntnyq)
