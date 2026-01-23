import { writeFile } from 'node:fs/promises'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import pluginSVGO from '../src'

const dts = await flatConfigsToRulesDTS(
  [
    // recommended config
    pluginSVGO.configs.recommended,
  ],
  {
    includeAugmentation: false,
  },
)

await writeFile(
  'dts/rule-options.d.ts',
  `${dts
    .replace('export interface RuleOptions {', 'export type RuleOptions = {')
    .replace('type SvgoSvgo =', 'export type SvgoSvgo =')}\n`,
)
