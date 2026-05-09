import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { ESLint } from 'eslint'
import { afterEach, describe, expect, it } from 'vitest'
import { parserPlain, plugin } from '../src'

const SVG_WITH_ID = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
  <rect id="x" width="10" height="10" fill="#ff0000" />
</svg>
`

const KEEP_ID_CONFIG = `export default {
  plugins: [
    {
      name: 'cleanupIds',
      params: { remove: false },
    },
  ],
}
`

const REMOVE_ID_CONFIG = `export default {
  plugins: ['cleanupIds'],
}
`

const strip = (text?: string) => text?.replace(/\s+/g, ' ').trim()

describe('svgoConfig cache behavior', () => {
  let tempDir: string

  afterEach(async () => {
    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true })
    }
  })

  it('should isolate different svgoConfig paths in one process', async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'eslint-plugin-svgo-cache-'))

    const configKeepPath = join(tempDir, 'svgo.keep.mjs')
    const configRemovePath = join(tempDir, 'svgo.remove.mjs')
    const fileA = join(tempDir, 'a.svg')
    const fileB = join(tempDir, 'b.svg')

    await Promise.all([
      writeFile(configKeepPath, KEEP_ID_CONFIG),
      writeFile(configRemovePath, REMOVE_ID_CONFIG),
      writeFile(fileA, SVG_WITH_ID),
      writeFile(fileB, SVG_WITH_ID),
    ])

    const eslint = new ESLint({
      fix: true,
      cwd: tempDir,
      ignore: false,
      overrideConfigFile: true,
      overrideConfig: [
        {
          files: ['a.svg'],
          plugins: { svgo: plugin },
          languageOptions: { parser: parserPlain },
          rules: {
            'svgo/svgo': ['error', { svgoConfig: configKeepPath }],
          },
        },
        {
          files: ['b.svg'],
          plugins: { svgo: plugin },
          languageOptions: { parser: parserPlain },
          rules: {
            'svgo/svgo': ['error', { svgoConfig: configRemovePath }],
          },
        },
      ],
    })

    const [resultA] = await eslint.lintText(SVG_WITH_ID, { filePath: fileA })
    const [resultB] = await eslint.lintText(SVG_WITH_ID, { filePath: fileB })

    expect(strip(resultA.output)).toContain('id="x"')
    expect(strip(resultB.output)).not.toContain('id="x"')
  })

  it('should keep cached svgoConfig when config file content changes', async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'eslint-plugin-svgo-watch-'))

    const configPath = join(tempDir, 'svgo.config.mjs')
    const filePath = join(tempDir, 'icon.svg')

    await Promise.all([
      writeFile(configPath, KEEP_ID_CONFIG),
      writeFile(filePath, SVG_WITH_ID),
    ])

    const eslint = new ESLint({
      fix: true,
      cwd: tempDir,
      ignore: false,
      overrideConfigFile: true,
      overrideConfig: [
        {
          files: ['**/*.svg'],
          plugins: { svgo: plugin },
          languageOptions: { parser: parserPlain },
          rules: {
            'svgo/svgo': ['error', { svgoConfig: configPath }],
          },
        },
      ],
    })

    const [before] = await eslint.lintText(SVG_WITH_ID, { filePath })
    expect(strip(before.output)).toContain('id="x"')

    await writeFile(configPath, REMOVE_ID_CONFIG)

    const [after] = await eslint.lintText(SVG_WITH_ID, { filePath })
    expect(strip(after.output)).toContain('id="x"')
  })
})
