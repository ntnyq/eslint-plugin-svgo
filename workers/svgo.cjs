// @ts-check

const { runAsWorker } = require('synckit')

/**
 * @typedef {import('svgo').Config & { svgoConfig?: boolean | string }} Options
 */

/**
 * @type {import('svgo')}
 */
let svgo

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

    if (!svgo) {
      svgo = await import('svgo')
    }

    if (svgoConfig && !externalConfig) {
      externalConfig =
        typeof svgoConfig === 'string'
          ? await svgo.loadConfig(svgoConfig)
          : await svgo.loadConfig()
    }

    return svgo.optimize(
      input,
      svgoConfig ? externalConfig || ruleConfig : ruleConfig,
    )
  },
)
