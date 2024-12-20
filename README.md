# eslint-plugin-svgo

[![CI](https://github.com/ntnyq/eslint-plugin-svgo/workflows/CI/badge.svg)](https://github.com/ntnyq/eslint-plugin-svgo/actions)
[![NPM VERSION](https://img.shields.io/npm/v/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![CODECOV](https://codecov.io/github/ntnyq/eslint-plugin-svgo/branch/main/graph/badge.svg)](https://codecov.io/github/ntnyq/eslint-plugin-svgo)
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

## Usage

```ts
// eslint.config.js

import svgo, { parserPlain } from 'eslint-plugin-svgo'

/**
 * @type import('eslint').Linter.Config[]
 */
export default [
  // ...other flat configs

  {
    files: ['**/*.svg'],
    languageOptions: {
      parser: parserPlain,
    },
    plugins: {
      svgo,
    },
    rules: {
      'svgo/svgo': [
        'error',
        {
          // svgo config
        },
      ],
    },
  },
]
```

## Rules

### `svgo/svgo`

Use svgo to optimize SVG files.

#### Options

All SVGO configs is supported.

## Credits

- [antfu/eslint-plugin-format](https://github.com/antfu/eslint-plugin-format)

## License

[MIT](./LICENSE) License © 2024-PRESENT [ntnyq](https://github.com/ntnyq)
