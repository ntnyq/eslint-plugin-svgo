# AGENTS.md

Agent guidance for `eslint-plugin-svgo`.

## Scope

- This repository is an ESLint plugin that exposes one rule: `svgo/svgo`.
- Keep changes minimal and targeted; avoid broad refactors unless explicitly requested.

## Fast Start

- Install deps: `pnpm install`
- Run tests: `pnpm test`
- Run lint: `pnpm lint`
- Run typecheck: `pnpm typecheck`
- Build (also regenerates rule options d.ts): `pnpm build`
- Full pre-release gate: `pnpm run release:check`

## Architecture Map

- Plugin entry and exports: [src/index.ts](src/index.ts)
- Recommended flat config: [src/configs.ts](src/configs.ts)
- Core rule implementation: [src/rules/svgo.ts](src/rules/svgo.ts)
- Worker used by rule (via `synckit`): [workers/svgo.mjs](workers/svgo.mjs)
- Rule schema assembly: [src/schema/index.ts](src/schema/index.ts)
- Per-plugin schema definitions: [src/schema/plugins/](src/schema/plugins/)
- Shared schema helpers: [src/schema/shared.ts](src/schema/shared.ts), [src/schema/utils.ts](src/schema/utils.ts)
- Diff reporting/fixes: [src/reporter.ts](src/reporter.ts)
- Plugin lists/constants: [src/constants.ts](src/constants.ts)

## Change Workflows

### Rule behavior changes

1. Update [src/rules/svgo.ts](src/rules/svgo.ts) and/or [workers/svgo.mjs](workers/svgo.mjs).
2. Add/adjust tests under [tests/rules/](tests/rules/) or [tests/plugins/](tests/plugins/).
3. Run `pnpm test` and `pnpm typecheck`.

### SVGO option/schema changes

1. Add/edit plugin schema in [src/schema/plugins/](src/schema/plugins/).
2. Ensure it is exported in [src/schema/plugins/index.ts](src/schema/plugins/index.ts) and wired in [src/schema/index.ts](src/schema/index.ts).
3. Run `pnpm build` to regenerate [dts/rule-options.d.ts](dts/rule-options.d.ts).
4. Add/adjust plugin tests in [tests/plugins/](tests/plugins/).

## Repository Conventions

- Do not manually edit generated types in [dts/rule-options.d.ts](dts/rule-options.d.ts); use `pnpm build`.
- Coverage is strict: [vitest.config.ts](vitest.config.ts) enforces 100% thresholds.
- Keep sorted lists stable where `@keep-sorted` markers exist (for example in [src/constants.ts](src/constants.ts)).
- Test helpers come from [tests/internal.ts](tests/internal.ts) (`run`, `$`, `unindent`).

## Pitfalls

- The rule API is synchronous; optimization runs through a worker bridge (`synckit`). Be careful changing call signatures between [src/rules/svgo.ts](src/rules/svgo.ts) and [workers/svgo.mjs](workers/svgo.mjs).
- When `svgoConfig` is used, behavior comes from external config resolution in the worker. Validate path/cwd assumptions in tests.
- Snapshot outputs can change when SVGO behavior changes; update snapshots intentionally.

## Useful References

- User-facing usage and compatibility: [README.md](README.md)
- Package scripts and release flow: [package.json](package.json)
- Build bundling behavior: [tsdown.config.ts](tsdown.config.ts)
- Local linting standards used by this repo: [eslint.config.mjs](eslint.config.mjs)
