import process from 'node:process'

export function isDebugEnabled() {
  const { DEBUG, ESLINT_PLUGIN_SVGO_DEBUG } = process.env

  return (
    ESLINT_PLUGIN_SVGO_DEBUG === '1' ||
    ESLINT_PLUGIN_SVGO_DEBUG === 'true' ||
    DEBUG?.includes('eslint-plugin-svgo')
  )
}
