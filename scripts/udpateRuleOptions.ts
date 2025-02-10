import { writeFile } from 'node:fs/promises'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { createConfig } from '../src'

const dts = await flatConfigsToRulesDTS([createConfig()], {
  includeAugmentation: false,
})

await writeFile(
  `dts/rule-options.d.ts`,
  dts.replace('export interface RuleOptions {', 'export type RuleOptions = {'),
)
