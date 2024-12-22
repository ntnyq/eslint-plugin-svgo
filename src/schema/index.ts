import { PLUGIN_NON_DEFAULT, PLUGIN_PRESET_DEFAULT, PLUGINS_PRESET_DEFAULT } from '../constants'
import {
  addAttributesToSVGElementPlugin,
  addClassesToSVGElementPlugin,
  cleanupAttrsPlugin,
  cleanupEnableBackgroundPlugin,
  cleanupIdsPlugin,
  cleanupListOfValuesPlugin,
  cleanupNumericValuesPlugin,
  collapseGroupsPlugin,
  convertColorsPlugin,
  convertEllipseToCirclePlugin,
  convertOneStopGradientsPlugin,
  convertPathDataPlugin,
  convertShapeToPathPlugin,
  convertStyleToAttrsPlugin,
  convertTransformPlugin,
  inlineStylesPlugin,
  mergePathsPlugin,
  mergeStylesPlugin,
  minifyStylesPlugin,
  moveElemsAttrsToGroupPlugin,
  moveGroupAttrsToElemsPlugin,
  prefixIdsPlugin,
  presetDefaultPlugin,
  removeAttributesBySelectorPlugin,
  removeAttrsPlugin,
  removeCommentsPlugin,
  removeDeprecatedAttrsPlugin,
  removeDescPlugin,
  removeDimensionsPlugin,
  removeDoctypePlugin,
  removeEditorsNSDataPlugin,
  removeElementsByAttrPlugin,
  removeEmptyAttrsPlugin,
  removeEmptyContainersPlugin,
  removeEmptyTextPlugin,
  removeHiddenElemsPlugin,
  removeMetadataPlugin,
  removeNonInheritableGroupAttrsPlugin,
  removeOffCanvasPathsPlugin,
  removeRasterImagesPlugin,
  removeScriptElementPlugin,
  removeStyleElementPlugin,
  removeTitlePlugin,
  removeUnknownsAndDefaultsPlugin,
  removeUnusedNSPlugin,
  removeUselessDefsPlugin,
  removeUselessStrokeAndFillPlugin,
  removeViewBoxPlugin,
  removeXlinkPlugin,
  removeXMLNSPlugin,
  removeXMLProcInstPlugin,
  reusePathsPlugin,
  sortAttrsPlugin,
  sortDefsChildrenPlugin,
} from './plugins'
import { booleanSchema, integerSchema, precisionSchema, stringSchema } from './shared'
import type { JSONSchema4 } from 'json-schema'

/**
 * Stringify Options
 *
 * Bellow options are not supported
 * - `regEntities`
 * - `regValEntities`
 * - `encodeEntity`
 */
const js2svg = {
  type: 'object',
  // @keep-sorted
  properties: {
    attrEnd: stringSchema,
    attrStart: stringSchema,
    cdataEnd: stringSchema,
    cdataStart: stringSchema,
    commentEnd: stringSchema,
    commentStart: stringSchema,
    doctypeEnd: stringSchema,
    doctypeStart: stringSchema,
    eol: {
      ...stringSchema,
      enum: ['lf', 'crlf'],
    },
    finalNewline: booleanSchema,
    indent: integerSchema,
    pretty: booleanSchema,
    procInstEnd: stringSchema,
    procInstStart: stringSchema,
    tagCloseEnd: stringSchema,
    tagCloseStart: stringSchema,
    tagOpenEnd: stringSchema,
    tagOpenStart: stringSchema,
    tagShortEnd: stringSchema,
    tagShortStart: stringSchema,
    textEnd: stringSchema,
    textStart: stringSchema,
    useShortTags: booleanSchema,
  },
} satisfies JSONSchema4

const plugins = {
  type: 'array',
  items: {
    anyOf: [
      {
        type: 'string',
        enum: [
          PLUGIN_PRESET_DEFAULT,

          // preset-default plugin names
          ...PLUGINS_PRESET_DEFAULT,

          // non-default plugin names
          ...PLUGIN_NON_DEFAULT,
        ],
      },

      /**
       * plugins with params
       */

      addAttributesToSVGElementPlugin,
      addClassesToSVGElementPlugin,
      cleanupAttrsPlugin,
      cleanupEnableBackgroundPlugin,
      cleanupIdsPlugin,
      cleanupListOfValuesPlugin,
      cleanupNumericValuesPlugin,
      collapseGroupsPlugin,
      convertColorsPlugin,
      convertEllipseToCirclePlugin,
      convertOneStopGradientsPlugin,
      convertPathDataPlugin,
      convertShapeToPathPlugin,
      convertStyleToAttrsPlugin,
      convertTransformPlugin,
      inlineStylesPlugin,
      mergePathsPlugin,
      mergeStylesPlugin,
      minifyStylesPlugin,
      moveElemsAttrsToGroupPlugin,
      moveGroupAttrsToElemsPlugin,
      prefixIdsPlugin,
      presetDefaultPlugin,
      removeAttributesBySelectorPlugin,
      removeAttrsPlugin,
      removeCommentsPlugin,
      removeDeprecatedAttrsPlugin,
      removeDescPlugin,
      removeDimensionsPlugin,
      removeDoctypePlugin,
      removeEditorsNSDataPlugin,
      removeElementsByAttrPlugin,
      removeEmptyAttrsPlugin,
      removeEmptyContainersPlugin,
      removeEmptyTextPlugin,
      removeHiddenElemsPlugin,
      removeMetadataPlugin,
      removeNonInheritableGroupAttrsPlugin,
      removeOffCanvasPathsPlugin,
      removeRasterImagesPlugin,
      removeScriptElementPlugin,
      removeStyleElementPlugin,
      removeTitlePlugin,
      removeUnknownsAndDefaultsPlugin,
      removeUnusedNSPlugin,
      removeUselessDefsPlugin,
      removeUselessStrokeAndFillPlugin,
      removeViewBoxPlugin,
      removeXlinkPlugin,
      removeXMLNSPlugin,
      removeXMLProcInstPlugin,
      reusePathsPlugin,
      sortAttrsPlugin,
      sortDefsChildrenPlugin,
    ],
  },
} satisfies JSONSchema4

export const svgoConfigProperties = {
  path: stringSchema,
  multipass: booleanSchema,
  floatPrecision: precisionSchema,
  datauri: {
    ...stringSchema,
    enum: ['base64', 'enc', 'unenc'],
  },
  js2svg,
  plugins,
} satisfies JSONSchema4['properties']
