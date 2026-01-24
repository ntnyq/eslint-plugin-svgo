# eslint-plugin-svgo

[![CI](https://github.com/ntnyq/eslint-plugin-svgo/workflows/CI/badge.svg)](https://github.com/ntnyq/eslint-plugin-svgo/actions)
[![NPM VERSION](https://img.shields.io/npm/v/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/eslint-plugin-svgo.svg)](https://www.npmjs.com/package/eslint-plugin-svgo)
[![CODECOV](https://codecov.io/github/ntnyq/eslint-plugin-svgo/graph/badge.svg?token=1B7879ETB6)](https://codecov.io/github/ntnyq/eslint-plugin-svgo)
[![LICENSE](https://img.shields.io/github/license/ntnyq/eslint-plugin-svgo.svg)](https://github.com/ntnyq/eslint-plugin-svgo/blob/main/LICENSE)

> An ESLint plugin that brings the power of [SVGO](https://github.com/svg/svgo) to your SVG optimization workflow.

Optimize SVG files with [SVGO](https://github.com/svg/svgo) via ESLint rules, enabling seamless integration into your development and CI/CD pipelines.

## ✨ Features

- 🚀 Full integration with SVGO v4+
- 📋 Lint SVG files with ESLint
- ⚙️ Highly configurable SVGO plugins
- 🔧 Support for external SVGO config files
- 📦 Works with ESLint's flat config format
- 🎯 TypeScript support

## Compatibility

| Package | Version  |
| ------- | -------- |
| SVGO    | v4.0.0+  |
| ESLint  | v9.5.0+  |
| Node.js | v20.0.0+ |

## 📦 Installation

Choose your package manager:

```shell
npm i eslint-plugin-svgo -D
```

```shell
yarn add eslint-plugin-svgo -D
```

```shell
pnpm add eslint-plugin-svgo -D
```

## 🚀 Quick Start

The quickest way to get started - use the recommended configuration:

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  pluginSVGO.configs.recommended,
])
```

This will automatically:

- Target all `**/*.svg` files
- Enable the `svgo/svgo` rule with sensible defaults
- Use the `preset-default` SVGO plugin configuration

## 🎯 Advanced Usage

For more control over the SVGO optimization process, configure the plugin manually:

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import { parserPlain, plugin as pluginSVGO } from 'eslint-plugin-svgo'

export default defineConfig([
  {
    name: 'svgo',
    files: ['**/*.svg'],
    ignores: ['icons/foo.svg', 'images/**/*.svg'],
    plugins: {
      svgo: pluginSVGO,
    },
    languageOptions: {
      parser: parserPlain,
    },
    rules: {
      'svgo/svgo': [
        'error',
        {
          floatPrecision: 2,
          js2svg: {
            pretty: true,
          },
          plugins: [
            'preset-default',
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

### Plugin Configuration Options

You can configure SVGO plugins in two ways:

**1. By plugin name (using defaults):**

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': [
        'error',
        {
          plugins: ['cleanupIds', 'convertColors'],
        },
      ],
    },
  },
])
```

**2. With custom parameters:**

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': [
        'error',
        {
          plugins: [
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

**3. Override preset defaults:**

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': [
        'error',
        {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupAttrs: false,
                  cleanupIds: {
                    minify: false,
                  },
                },
              },
            },
          ],
        },
      ],
    },
  },
])
```

## 🔌 Integration Guides

### VSCode

Enable ESLint validation for SVG files by adding to your `.vscode/settings.json`:

```json
{
  "eslint.validate": ["xml", "svg"]
}
```

### Prettier

Add SVG files to your `.prettierignore` to prevent conflicts with ESLint:

```
**/*.svg
```

Or configure in `package.json`:

```json
{
  "prettier": {
    "ignorePatterns": ["**/*.svg"]
  }
}
```

## 📚 Rule Reference

### `svgo/svgo`

Optimize SVG files using SVGO.

#### Options

##### `svgoConfig`

- **Type**: `boolean | string`
- **Default**: `undefined`
- **Example**: `true` or `'./svgo.config.js'`

Use an external SVGO config file. This is useful when you need to use features that aren't JSON-schema compatible (like function-based configuration).

- `true` — Auto-load `svgo.config.mjs` or `svgo.config.js` from your project root
- `'path/to/config'` — Use a specific config file path

> **Note**: When `svgoConfig` is used, all other rule options (except `path`) are ignored. Make sure your config file exists, or it will be treated as `false`.

##### `path`

- **Type**: `string`
- **Default**: `context.filename`

Override the file path. Some plugins (like `prefixIds`) use this for context.

##### `multipass`

- **Type**: `boolean`
- **Default**: `false`

Enable multiple optimization passes to ensure all optimizations are fully applied.

##### `floatPrecision`

- **Type**: `number`
- **Default**: `3`

Set precision for floating-point numbers in the output (e.g., `2` converts `1.234` to `1.23`). This is passed to plugins that support it.

##### `datauri`

- **Type**: `'base64' | 'enc' | 'unenc'`
- **Default**: `undefined`

Output format for Data URIs:

- `'base64'` — Base64 encoded
- `'enc'` — URL-encoded
- `'unenc'` — Unencoded

##### `js2svg`

- **Type**: `object`
- **Default**: `undefined`

Options for rendering the optimized SVG from the AST. See [SVGO's js2svg documentation](https://github.com/svg/svgo/blob/main/lib/types.d.ts) for all available options.

Common options:

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': [
        'error',
        {
          js2svg: {
            pretty: true, // Add newlines and indentation
            indent: 2, // Indentation size
            eol: 'lf', // Line ending style
            final: true, // Add final newline
          },
        },
      ],
    },
  },
])
```

> **Unsupported options**: `regEntities`, `regValEntities`, `encodeEntity` (require functions)

##### `plugins`

- **Type**: `array`
- **Default**: `['preset-default']`

List of SVGO plugins to apply. See [SVGO's plugin documentation](https://svgo.dev/docs/plugins/) for available plugins and their parameters.

**Example configuration:**

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': [
        'error',
        {
          plugins: [
            'preset-default',
            'removeDoctype',
            {
              name: 'cleanupIds',
              params: {
                minify: false,
                prefix: 'icon-',
              },
            },
          ],
        },
      ],
    },
  },
])
```

## ⚠️ JSON Schema Limitations

ESLint rule options must be JSON schema compatible, which means **functions** and **regular expressions** cannot be used directly in rule options. However, you can work around this using [external config files](#svgoconfig).

### Unsupported Features in Rule Options

**js2svg:**

- `regEntities` — function
- `regValEntities` — function
- `encodeEntity` — function

**plugins:**

- `prefixIds.prefix` — function (use `boolean` or `string` instead)
- `addClassesToSVGElement.className` — function (use `string` instead)
- `convertColors.currentColor` — regexp (use `boolean` or `string` instead)
- `removeComments.preservePatterns` — regexp (use `boolean` or `string` instead)

### Solution: Use External Config

For advanced configurations requiring functions or regexes, create an external config file:

```js
// svgo.config.mjs
export default {
  plugins: [
    'preset-default',
    {
      name: 'prefixIds',
      params: {
        prefix: node => `svg-${node.attributes.id}`,
      },
    },
  ],
}
```

Then reference it in your ESLint config:

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': ['error', { svgoConfig: './svgo.config.mjs' }],
    },
  },
])
```

> **Tip**: External config files are the most flexible way to configure SVGO with all its advanced features.

## 💡 Common Examples

### Basic SVG Optimization

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': 'error',
    },
  },
])
```

### With Custom Float Precision

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': [
        'error',
        {
          floatPrecision: 2,
        },
      ],
    },
  },
])
```

### Pretty-Printed SVG Output

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': [
        'error',
        {
          js2svg: {
            pretty: true,
            indent: 2,
          },
        },
      ],
    },
  },
])
```

### Disable Specific Plugins

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': [
        'error',
        {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeDoctype: false,
                  removeComments: false,
                },
              },
            },
          ],
        },
      ],
    },
  },
])
```

### Using External Config

```js
import { defineConfig } from 'eslint/config'
import pluginSVGO from 'eslint-plugin-svgo'

export default defineConfig([
  // Your other configs...
  {
    ...pluginSVGO.configs.recommended,
    rules: {
      'svgo/svgo': ['error', { svgoConfig: true }],
    },
  },
])
```

With `svgo.config.mjs`:

```js
export default {
  multipass: true,
  floatPrecision: 2,
  plugins: [
    'preset-default',
    'removeDoctype',
    {
      name: 'cleanupIds',
      params: { minify: false },
    },
  ],
}
```

## 💖 Acknowledgments

- [antfu/eslint-plugin-format](https://github.com/antfu/eslint-plugin-format) — Inspiration for plugin structure
- [SVGO](https://github.com/svg/svgo) — The powerful SVG optimization library
- [ESLint](https://eslint.org/) — Pluggable linting utility

## 📄 License

[MIT](./LICENSE) License © 2024-PRESENT [ntnyq](https://github.com/ntnyq)
