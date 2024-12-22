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
  'removeTitle',
  'removeUnknownsAndDefaults',
  'removeUnusedNS',
  'removeUselessDefs',
  'removeUselessStrokeAndFill',
  'removeViewBox',
  'removeXMLProcInst',
  'sortAttrs',
  'sortDefsChildren',
]

// @keep-sorted
export const PLUGIN_NON_DEFAULT = [
  // required params
  'addAttributesToSVGElement',
  // required params
  'addClassesToSVGElement',
  'cleanupListOfValues',
  'convertOneStopGradients',
  'convertStyleToAttrs',
  'prefixIds',
  // required params
  'removeAttributesBySelector',
  // required params
  'removeAttrs',
  'removeDimensions',
  // required params
  'removeElementsByAttr',
  'removeOffCanvasPaths',
  'removeRasterImages',
  'removeScriptElement',
  'removeStyleElement',
  'removeXlink',
  'removeXMLNS',
  'reusePaths',
]
