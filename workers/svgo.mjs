// @ts-check

import { loadConfig, optimize } from 'svgo'
import { runAsWorker } from 'synckit'

/**
 * @typedef {import('svgo').Config & { svgoConfig?: boolean | string }} Options
 */

/**
 * @type {import('svgo').Config | null}
 */
let externalConfig

runAsWorker(
  async (
    /**
     * @type {string} svg file source
     */
    input,
    /**
     * @type {Options} optimize options
     */
    options,
  ) => {
    const { svgoConfig, ...ruleConfig } = options

    if (svgoConfig && !externalConfig) {
      externalConfig =
        typeof svgoConfig === 'string'
          ? await loadConfig(svgoConfig)
          : await loadConfig()
    }

    return optimize(
      input,
      svgoConfig ? externalConfig || ruleConfig : ruleConfig,
    )
  },
)
