/**
 * @type {import('svgo').Config}
 */

export default {
  js2svg: {
    pretty: true,
  },
  plugins: [
    // plugin
    'cleanupIds',
  ],
}
