const { runAsWorker } = require('synckit')

/**
 * @type import('svgo')
 */
let svgo

runAsWorker(async (input, config) => {
  if (!svgo) {
    svgo = await import('svgo')
  }

  return svgo.optimize(input, config)
})
