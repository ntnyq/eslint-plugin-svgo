import { execFileSync } from 'node:child_process'
import { mkdtemp, readdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import process from 'node:process'
import { resolve } from './utils'

async function main() {
  const rootDir = resolve('.')
  const tempDir = await mkdtemp(join(tmpdir(), 'eslint-plugin-svgo-pack-'))
  const packDir = join(tempDir, 'pack')
  const consumerDir = join(tempDir, 'consumer')

  try {
    execFileSync('mkdir', ['-p', packDir, consumerDir], { stdio: 'inherit' })

    execFileSync('pnpm', ['pack', '--pack-destination', packDir], {
      cwd: rootDir,
      stdio: 'inherit',
    })

    const tarballs = await readdir(packDir)
    const tarball = tarballs.find(file => file.endsWith('.tgz'))

    if (!tarball) {
      throw new Error('Failed to produce package tarball with pnpm pack')
    }

    const tarballPath = join(packDir, tarball)

    await writeFile(
      join(consumerDir, 'package.json'),
      JSON.stringify(
        {
          name: 'svgo-pack-smoke-consumer',
          private: true,
          type: 'module',
        },
        null,
        2,
      ),
    )

    await writeFile(
      join(consumerDir, 'check.mjs'),
      `import { ESLint } from 'eslint'
import pluginSVGO from 'eslint-plugin-svgo'

const eslint = new ESLint({
  fix: true,
  cwd: process.cwd(),
  ignore: false,
  overrideConfigFile: true,
  overrideConfig: [pluginSVGO.configs.recommended],
})

const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0 10 10 "><g><rect width="10" height="10" fill="#ff0000"/></g></svg>'
const [result] = await eslint.lintText(svg, { filePath: 'icon.svg' })

if (!result.output || result.output === svg) {
  throw new Error('Pack smoke check failed: svg was not optimized')
}
`,
    )

    execFileSync('pnpm', ['add', '-D', 'eslint@^10', tarballPath], {
      cwd: consumerDir,
      stdio: 'inherit',
    })

    execFileSync('node', ['check.mjs'], {
      cwd: consumerDir,
      stdio: 'inherit',
    })
  } finally {
    await rm(tempDir, { recursive: true, force: true })
  }
}

main().catch((err: unknown) => {
  const reason = err instanceof Error ? err.stack || err.message : String(err)
  console.error(reason)
  process.exitCode = 1
})
