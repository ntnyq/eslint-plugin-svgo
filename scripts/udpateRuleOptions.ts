import { writeFile } from 'node:fs/promises'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { config } from '../src'

const configs = [config()]

const dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false,
})

await writeFile(
  `dts/rule-options.d.ts`,
  dts.replace('export interface RuleOptions {', 'export type RuleOptions = {'),
)
