const { runAsWorker } = require('synckit')

// TODO: load config from `svgo.config.mjs`

/**
 * @type {import('svgo')}
 */
let svgo

runAsWorker(
  async (
    /**
     * @type {string} svg file source
     */
    input,
    /**
     * @type {import('svgo').Config} svgo config
     */
    config,
  ) => {
    if (!svgo) {
      svgo = await import('svgo')
    }

    return svgo.optimize(input, config)
  },
)
