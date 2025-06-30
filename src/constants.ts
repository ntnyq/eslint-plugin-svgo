/**
 * @see {@link https://svgo.dev/docs/preset-default/}
 */
export const PLUGIN_PRESET_DEFAULT = 'preset-default'

/**
 * @see {@link https://svgo.dev/docs/preset-default/}
 */
// @keep-sorted
export const PLUGINS_PRESET_DEFAULT = [
  'cleanupAttrs',
  'cleanupEnableBackground',
  'cleanupIds',
  'cleanupNumericValues',
  'collapseGroups',
  'convertColors',
  'convertEllipseToCircle',
  'convertPathData',
  'convertShapeToPath',
  'convertTransform',
  'inlineStyles',
  'mergePaths',
  'mergeStyles',
  'minifyStyles',
  'moveElemsAttrsToGroup',
  'moveGroupAttrsToElems',
  'removeComments',
  'removeDesc',
  'removeDoctype',
  'removeEditorsNSData',
  'removeEmptyAttrs',
  'removeEmptyContainers',
  'removeEmptyText',
  'removeHiddenElems',
  'removeMetadata',
  'removeNonInheritableGroupAttrs',
  'removeUnknownsAndDefaults',
  'removeUnusedNS',
  'removeUselessDefs',
  'removeUselessStrokeAndFill',
  'removeXMLProcInst',
  'sortAttrs',
  'sortDefsChildren',
]

// @keep-sorted
export const PLUGINS_REQUIRED_PARAMS = [
  'addAttributesToSVGElement',
  'addClassesToSVGElement',
  'removeAttributesBySelector',
  'removeAttrs',
  'removeElementsByAttr',
]

// @keep-sorted
export const PLUGINS_NON_DEFAULT = [
  'cleanupListOfValues',
  'convertOneStopGradients',
  'convertStyleToAttrs',
  'prefixIds',
  'removeDeprecatedAttrs',
  'removeDimensions',
  'removeOffCanvasPaths',
  'removeRasterImages',
  'removeScripts',
  'removeStyleElement',
  'removeTitle',
  'removeViewBox',
  'removeXlink',
  'removeXMLNS',
  'reusePaths',
  ...PLUGINS_REQUIRED_PARAMS,
]
