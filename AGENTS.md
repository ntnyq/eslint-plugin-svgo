# Repository Guidelines

## Project Structure & Module Organization

This package is an ESM TypeScript ESLint plugin exposing the `svgo/svgo` rule. Core code lives in `src/`: `rules/svgo.ts` implements the rule, `schema/` defines SVGO option schemas, and `reporter.ts` builds diagnostics and fixes. `workers/svgo.mjs` runs optimization through `synckit`; keep its interface aligned with the rule. Tests mirror features under `tests/rules/`, `tests/plugins/`, and `tests/schema/`. SVG samples belong in `tests/fixtures/`, while Vitest snapshots live in adjacent `__snapshots__/` directories. `dts/rule-options.d.ts` is generated; do not edit it manually.

## Build, Test, and Development Commands

- `pnpm install` installs dependencies using the pinned pnpm version.
- `pnpm dev` rebuilds the package in watch mode with tsdown.
- `pnpm build` regenerates rule-option types and creates `dist/`.
- `pnpm test` runs the Vitest suite once.
- `pnpm coverage` runs tests with V8 coverage and enforces project thresholds.
- `pnpm lint`, `pnpm format:check`, and `pnpm typecheck` validate source style and types.
- `pnpm run release:check` runs the complete pre-release validation chain.

Run a focused test with `pnpm test tests/plugins/cleanupIds.test.ts`.

## Coding Style & Naming Conventions

Use strict TypeScript, ESM imports, two-space indentation, single quotes, and no semicolons, matching existing files. Oxfmt handles formatting and the shared `@ntnyq/eslint-config` enforces lint rules. Use camelCase for symbols and SVGO plugin filenames (for example, `cleanupIds.ts`); use descriptive kebab-free test names such as `cleanupIds.test.ts`. Preserve ordering around `@keep-sorted` markers. Run `pnpm format` only when intentionally applying formatting changes.

## Testing Guidelines

Vitest and `eslint-vitest-rule-tester` drive the suite; reuse helpers from `tests/internal.ts`. Add valid and invalid rule cases, including fix output and diagnostic snapshots where behavior changes. Snapshot updates must be intentional and reviewed. Coverage is configured at 100% for `src/**/*.ts`; new branches require tests.

## Commit & Pull Request Guidelines

Follow the repository’s Conventional Commit style: `feat:`, `fix:`, `test:`, `docs:`, or scoped maintenance such as `chore(deps):`. Keep subjects concise and imperative. Pull requests should explain the behavior change, link relevant issues, list validation performed, and call out generated type or snapshot updates. Include before/after SVG examples when rule output changes, and ensure the CI build, format, lint, typecheck, test, and coverage jobs pass.
