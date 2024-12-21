# eslint-plugin-svgo

[![CI](https://github.com/ntnyq/eslint-plugin-svgo/workflows/CI/badge.svg)](https://github.com/ntnyq/eslint-plugin-svgo/actions)
[![NPM VERSION](https://img.shields.io/npm/v/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![LICENSE](https://img.shields.io/github/license/ntnyq/eslint-plugin-svgo.svg)](https://github.com/ntnyq/eslint-plugin-svgo/blob/main/LICENSE)

Optimize SVG files with [SVGO](https://github.com/svg/svgo) using ESLint.

## Install

```bash
npm install eslint-plugin-svgo -D
```

```bash
yarn add eslint-plugin-svgo -D
```

```bash
pnpm add eslint-plugin-svgo -D
```

## Basic Usage

```ts
// eslint.config.js

import pluginSvgo from 'eslint-plugin-svgo'

/**
 * @type import('eslint').Linter.Config[]
 */
export default [
  // ...other flat configs

  pluginSvgo.configs.recommended,
]
```

### Advanced Usage

```ts
// eslint.config.js

import { config } from 'eslint-plugin-svgo'

/**
 * @type import('eslint').Linter.Config[]
 */
export default [
  // ...other flat configs

  config({
    files: ['**/*.svg'],
    rules: {
      'svgo/svgo': [
        'error',
        {
          // svgo config
          floatPrecision: 2,
          js2svg: {
            pretty: true,
          },
          plugins: [],
        },
      ],
    },
  }),
]
```

## Rules

### `svgo/svgo`

Use svgo to optimize SVG files.

#### Options

Default options:

```json
{
  "js2svg": {
    "indent": 2,
    "pretty": true
  },
  "plugins": ["preset-default"]
}
```

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
- **default**: `{ indent: 2, pretty: true }`

Options for rendering optimized SVG from AST. Check [svgo/lib/types.d.ts](https://github.com/svg/svgo/blob/main/lib/types.d.ts) for details.

Options bellow are not supported:

- `regEntities`
- `regValEntities`
- `encodeEntity`

##### plugins

- **type**: `array`
- **default**: `['preset-default']`

Plugins configuration. Check [Plugins | SVGO Documentation](https://svgo.dev/docs/plugins/) for details.

## Types

### `config`

Helper function to create ESLint config.

#### parameters

All parameters of ESLint flat config are supported.

##### name

- **type**: `string`
- **default**: `svgo/recommended`

##### files

- **type**: `string[]`
- **default**: `[**/*.svg]`

#### rules

- **type**: `Linter.RulesRecord`
- **default**: `{ 'svgo/svgo': 'error' }`

## Credits

- [antfu/eslint-plugin-format](https://github.com/antfu/eslint-plugin-format)

## License

[MIT](./LICENSE) License © 2024-PRESENT [ntnyq](https://github.com/ntnyq)
