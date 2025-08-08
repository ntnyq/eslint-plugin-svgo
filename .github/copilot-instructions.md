# Copilot Instructions for eslint-plugin-svgo

## Project Overview

- This repo is an ESLint plugin for optimizing SVG files using SVGO (v4+).
- Main logic is in `src/` (rules, schema, plugins, parser, reporter, etc.).
- SVGO plugin implementations are in `src/schema/plugins/`.
- ESLint rule is defined in `src/rules/svgo.ts` and exposed via `src/rules/index.ts`.
- Configurations for ESLint and SVGO are in root (`eslint.config.mjs`, `svgo.config.mjs`).

## Developer Workflows

- **Install dependencies:** Use `pnpm install`.
- **Run tests:** Use `pnpm test` (runs with [Vitest](https://vitest.dev)).
- **Lint code:** Use `pnpm lint` (configured via ESLint and Prettier).
- **Update rule options:** Use script in `scripts/updateRuleOptions.ts`.
- **Debugging:** For rule development, test SVG fixtures in `tests/fixtures/eslint-plugin/` and run tests in `tests/rules/svgo.test.ts`.

## Key Patterns & Conventions

- **Flat ESLint config:** Uses ESLint's flat config format (`eslint.config.mjs`).
- **SVG file targeting:** Rules are scoped to `**/*.svg` via config.
- **SVGO plugin config:** Supports both inline and external config (`svgoConfig` option). See `svgo.config.mjs` for examples.
- **Rule options:** Only JSON-schema compatible types are supported (no functions/regexps in rule options).
- **Plugin params:** For advanced SVGO plugin params, use external config file.
- **Prettier:** SVG files should be ignored by Prettier (see `.prettierignore`).

## Integration Points

- **VSCode:** Enable XML validation for SVG linting (`eslint.validate: ["xml"]`).
- **Prettier:** Ignore SVG files to avoid conflicts with linting.
- **SVGO:** All plugin logic is based on SVGO's plugin API and config structure.

## Example: Custom Rule Config

```js
{
  name: 'svgo',
  files: ['**/*.svg'],
  plugins: { svgo: pluginSVGO },
  languageOptions: { parser: parserPlain },
  rules: {
    'svgo/svgo': [
      'error',
      { svgoConfig: true, floatPrecision: 2, plugins: ['preset-default', 'cleanupIds'] }
    ]
  }
}
```

## Key Files & Directories

- `src/rules/svgo.ts` — main rule implementation
- `src/schema/plugins/` — SVGO plugin logic
- `svgo.config.mjs` — external SVGO config example
- `tests/rules/svgo.test.ts` — main test suite for rule
- `scripts/updateRuleOptions.ts` — update rule options/types

---

For unclear workflows or missing conventions, ask the user for clarification before making assumptions.
