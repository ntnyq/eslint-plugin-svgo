import { booleanSchema, onlyFalseSchema, precisionSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'
import { addAttributesToSVGElementPlugin } from './addAttributesToSVGElement'
import { addClassesToSVGElementPlugin } from './addClassesToSVGElement'
import { cleanupAttrsPlugin } from './cleanupAttrs'
import { cleanupEnableBackgroundPlugin } from './cleanupEnableBackground'
import { cleanupIdsPlugin } from './cleanupIds'
import { cleanupListOfValuesPlugin } from './cleanupListOfValues'
import { cleanupNumericValuesPlugin } from './cleanupNumericValues'
import { collapseGroupsPlugin } from './collapseGroups'
import { convertColorsPlugin } from './convertColors'
import { convertEllipseToCirclePlugin } from './convertEllipseToCircle'
import { convertOneStopGradientsPlugin } from './convertOneStopGradients'
import { convertPathDataPlugin } from './convertPathData'
import { convertShapeToPathPlugin } from './convertShapeToPath'
import { convertStyleToAttrsPlugin } from './convertStyleToAttrs'
import { convertTransformPlugin } from './convertTransform'
import { inlineStylesPlugin } from './inlineStyles'
import { mergePathsPlugin } from './mergePaths'
import { mergeStylesPlugin } from './mergeStyles'
import { minifyStylesPlugin } from './minifyStyles'
import { moveElemsAttrsToGroupPlugin } from './moveElemsAttrsToGroup'
import { moveGroupAttrsToElemsPlugin } from './moveGroupAttrsToElems'
import { prefixIdsPlugin } from './prefixIds'
import { removeAttributesBySelectorPlugin } from './removeAttributesBySelector'
import { removeAttrsPlugin } from './removeAttrs'
import { removeCommentsPlugin } from './removeComments'
import { removeDeprecatedAttrsPlugin } from './removeDeprecatedAttrs'
import { removeDescPlugin } from './removeDesc'
import { removeDimensionsPlugin } from './removeDimensions'
import { removeDoctypePlugin } from './removeDoctype'
import { removeEditorsNSDataPlugin } from './removeEditorsNSData'
import { removeElementsByAttrPlugin } from './removeElementsByAttr'
import { removeEmptyAttrsPlugin } from './removeEmptyAttrs'
import { removeEmptyContainersPlugin } from './removeEmptyContainers'
import { removeEmptyTextPlugin } from './removeEmptyText'
import { removeHiddenElemsPlugin } from './removeHiddenElems'
import { removeMetadataPlugin } from './removeMetadata'
import { removeNonInheritableGroupAttrsPlugin } from './removeNonInheritableGroupAttrs'
import { removeOffCanvasPathsPlugin } from './removeOffCanvasPaths'
import { removeRasterImagesPlugin } from './removeRasterImages'
import { removeScriptsPlugin } from './removeScripts'
import { removeStyleElementPlugin } from './removeStyleElement'
import { removeTitlePlugin } from './removeTitle'
import { removeUnknownsAndDefaultsPlugin } from './removeUnknownsAndDefaults'
import { removeUnusedNSPlugin } from './removeUnusedNS'
import { removeUselessDefsPlugin } from './removeUselessDefs'
import { removeUselessStrokeAndFillPlugin } from './removeUselessStrokeAndFill'
import { removeViewBoxPlugin } from './removeViewBox'
import { removeXlinkPlugin } from './removeXlink'
import { removeXMLNSPlugin } from './removeXMLNS'
import { removeXMLProcInstPlugin } from './removeXMLProcInst'
import { reusePathsPlugin } from './reusePaths'
import { sortAttrsPlugin } from './sortAttrs'
import { sortDefsChildrenPlugin } from './sortDefsChildren'
import type { JSONSchema4 } from 'json-schema'
import type {
  BuiltinsWithOptionalParams,
  BuiltinsWithRequiredParams,
  DefaultPlugins,
} from 'svgo'

type PluginKind = 'default' | 'optional' | 'required'

interface PluginCatalogEntry<Kind extends PluginKind> {
  kind: Kind
  schema: JSONSchema4
}

type PluginCatalog = {
  [Name in keyof DefaultPlugins]: PluginCatalogEntry<'default'>
} & {
  [Name in Exclude<
    keyof BuiltinsWithOptionalParams,
    keyof DefaultPlugins
  >]: PluginCatalogEntry<'optional'>
} & {
  [Name in keyof BuiltinsWithRequiredParams]: PluginCatalogEntry<'required'>
}

type BasePluginCatalog = Omit<PluginCatalog, 'preset-default'>

function createPluginCatalog(catalog: PluginCatalog): PluginCatalog {
  return Object.fromEntries(
    Object.entries(catalog).map(([name, plugin]) => [
      name,
      plugin.kind === 'required'
        ? {
            ...plugin,
            schema: {
              ...plugin.schema,
              required: ['name', 'params'],
            },
          }
        : plugin,
    ]),
  ) as PluginCatalog
}

function createPresetOverrideSchema(pluginSchema: JSONSchema4): JSONSchema4 {
  const paramsSchema = pluginSchema.properties?.params

  return paramsSchema
    ? {
        oneOf: [booleanSchema, paramsSchema],
      }
    : onlyFalseSchema
}

// @keep-sorted
const basePluginCatalog = {
  addAttributesToSVGElement: {
    kind: 'required',
    schema: addAttributesToSVGElementPlugin,
  },
  addClassesToSVGElement: {
    kind: 'required',
    schema: addClassesToSVGElementPlugin,
  },
  cleanupAttrs: {
    kind: 'default',
    schema: cleanupAttrsPlugin,
  },
  cleanupEnableBackground: {
    kind: 'default',
    schema: cleanupEnableBackgroundPlugin,
  },
  cleanupIds: {
    kind: 'default',
    schema: cleanupIdsPlugin,
  },
  cleanupListOfValues: {
    kind: 'optional',
    schema: cleanupListOfValuesPlugin,
  },
  cleanupNumericValues: {
    kind: 'default',
    schema: cleanupNumericValuesPlugin,
  },
  collapseGroups: {
    kind: 'default',
    schema: collapseGroupsPlugin,
  },
  convertColors: {
    kind: 'default',
    schema: convertColorsPlugin,
  },
  convertEllipseToCircle: {
    kind: 'default',
    schema: convertEllipseToCirclePlugin,
  },
  convertOneStopGradients: {
    kind: 'optional',
    schema: convertOneStopGradientsPlugin,
  },
  convertPathData: {
    kind: 'default',
    schema: convertPathDataPlugin,
  },
  convertShapeToPath: {
    kind: 'default',
    schema: convertShapeToPathPlugin,
  },
  convertStyleToAttrs: {
    kind: 'optional',
    schema: convertStyleToAttrsPlugin,
  },
  convertTransform: {
    kind: 'default',
    schema: convertTransformPlugin,
  },
  inlineStyles: {
    kind: 'default',
    schema: inlineStylesPlugin,
  },
  mergePaths: {
    kind: 'default',
    schema: mergePathsPlugin,
  },
  mergeStyles: {
    kind: 'default',
    schema: mergeStylesPlugin,
  },
  minifyStyles: {
    kind: 'default',
    schema: minifyStylesPlugin,
  },
  moveElemsAttrsToGroup: {
    kind: 'default',
    schema: moveElemsAttrsToGroupPlugin,
  },
  moveGroupAttrsToElems: {
    kind: 'default',
    schema: moveGroupAttrsToElemsPlugin,
  },
  prefixIds: {
    kind: 'optional',
    schema: prefixIdsPlugin,
  },
  removeAttributesBySelector: {
    kind: 'required',
    schema: removeAttributesBySelectorPlugin,
  },
  removeAttrs: {
    kind: 'required',
    schema: removeAttrsPlugin,
  },
  removeComments: {
    kind: 'default',
    schema: removeCommentsPlugin,
  },
  removeDeprecatedAttrs: {
    kind: 'default',
    schema: removeDeprecatedAttrsPlugin,
  },
  removeDesc: {
    kind: 'default',
    schema: removeDescPlugin,
  },
  removeDimensions: {
    kind: 'optional',
    schema: removeDimensionsPlugin,
  },
  removeDoctype: {
    kind: 'default',
    schema: removeDoctypePlugin,
  },
  removeEditorsNSData: {
    kind: 'default',
    schema: removeEditorsNSDataPlugin,
  },
  removeElementsByAttr: {
    kind: 'required',
    schema: removeElementsByAttrPlugin,
  },
  removeEmptyAttrs: {
    kind: 'default',
    schema: removeEmptyAttrsPlugin,
  },
  removeEmptyContainers: {
    kind: 'default',
    schema: removeEmptyContainersPlugin,
  },
  removeEmptyText: {
    kind: 'default',
    schema: removeEmptyTextPlugin,
  },
  removeHiddenElems: {
    kind: 'default',
    schema: removeHiddenElemsPlugin,
  },
  removeMetadata: {
    kind: 'default',
    schema: removeMetadataPlugin,
  },
  removeNonInheritableGroupAttrs: {
    kind: 'default',
    schema: removeNonInheritableGroupAttrsPlugin,
  },
  removeOffCanvasPaths: {
    kind: 'optional',
    schema: removeOffCanvasPathsPlugin,
  },
  removeRasterImages: {
    kind: 'optional',
    schema: removeRasterImagesPlugin,
  },
  removeScripts: {
    kind: 'optional',
    schema: removeScriptsPlugin,
  },
  removeStyleElement: {
    kind: 'optional',
    schema: removeStyleElementPlugin,
  },
  removeTitle: {
    kind: 'optional',
    schema: removeTitlePlugin,
  },
  removeUnknownsAndDefaults: {
    kind: 'default',
    schema: removeUnknownsAndDefaultsPlugin,
  },
  removeUnusedNS: {
    kind: 'default',
    schema: removeUnusedNSPlugin,
  },
  removeUselessDefs: {
    kind: 'default',
    schema: removeUselessDefsPlugin,
  },
  removeUselessStrokeAndFill: {
    kind: 'default',
    schema: removeUselessStrokeAndFillPlugin,
  },
  removeViewBox: {
    kind: 'optional',
    schema: removeViewBoxPlugin,
  },
  removeXlink: {
    kind: 'optional',
    schema: removeXlinkPlugin,
  },
  removeXMLNS: {
    kind: 'optional',
    schema: removeXMLNSPlugin,
  },
  removeXMLProcInst: {
    kind: 'default',
    schema: removeXMLProcInstPlugin,
  },
  reusePaths: {
    kind: 'optional',
    schema: reusePathsPlugin,
  },
  sortAttrs: {
    kind: 'default',
    schema: sortAttrsPlugin,
  },
  sortDefsChildren: {
    kind: 'default',
    schema: sortDefsChildrenPlugin,
  },
} satisfies BasePluginCatalog

const presetDefaultOverrides: Record<string, JSONSchema4> = {}

for (const [name, plugin] of Object.entries(basePluginCatalog)) {
  if (plugin.kind === 'default') {
    presetDefaultOverrides[name] = createPresetOverrideSchema(plugin.schema)
  }
}

const presetDefaultParams = createParamsSchema({
  floatPrecision: precisionSchema,
  overrides: {
    type: 'object',
    properties: presetDefaultOverrides,
    additionalProperties: false,
  },
})

const presetDefaultPlugin = createPluginSchema(
  'preset-default',
  presetDefaultParams,
)

export const pluginCatalog: PluginCatalog = createPluginCatalog({
  ...basePluginCatalog,
  'preset-default': {
    kind: 'optional',
    schema: presetDefaultPlugin,
  },
})

const pluginNames = Object.keys(pluginCatalog) as Array<keyof PluginCatalog>

export const optionalPluginNames: Array<keyof BuiltinsWithOptionalParams> =
  pluginNames.filter(
    (name): name is keyof BuiltinsWithOptionalParams =>
      pluginCatalog[name].kind !== 'required',
  )

export const pluginSchemas: JSONSchema4[] = Object.values(pluginCatalog).map(
  plugin => plugin.schema,
)
