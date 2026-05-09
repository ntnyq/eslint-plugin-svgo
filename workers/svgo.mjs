// @ts-check

import { dirname } from 'node:path'
import process from 'node:process'
import { loadConfig, optimize } from 'svgo'
import { runAsWorker } from 'synckit'

/**
 * @typedef {import('svgo').Config & {svgoConfig?: boolean | string}} Options
 */

/**
 * @param {boolean | string} svgoConfig
 * @param {string} cwd
 */
async function loadExternalConfig(svgoConfig, cwd) {
  return typeof svgoConfig === 'string'
    ? loadConfig(svgoConfig, cwd)
    : loadConfig(undefined, cwd)
}

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
    const cwd = ruleConfig.path ? dirname(ruleConfig.path) : process.cwd()
    let externalConfig = null

    if (svgoConfig) {
      externalConfig = await loadExternalConfig(svgoConfig, cwd)
    }

    return optimize(
      input,
      svgoConfig ? externalConfig || ruleConfig : ruleConfig,
    )
  },
)
