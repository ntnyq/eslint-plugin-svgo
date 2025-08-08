import { booleanSchema, onlyFalseSchema, precisionSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'
import { cleanupAttrsParams } from './cleanupAttrs'
import { cleanupIdsParams } from './cleanupIds'
import { cleanupNumericValuesParams } from './cleanupNumericValues'
import { convertColorsParams } from './convertColors'
import { convertPathDataParams } from './convertPathData'
import { convertShapeToPathParams } from './convertShapeToPath'
import { convertTransformParams } from './convertTransform'
import { inlineStylesParams } from './inlineStyles'
import { mergePathsParams } from './mergePaths'
import { minifyStylesParams } from './minifyStyles'
import { removeCommentsParams } from './removeComments'
import { removeDeprecatedAttrsParams } from './removeDeprecatedAttrs'
import { removeDescParams } from './removeDesc'
import { removeEditorsNSDataParams } from './removeEditorsNSData'
import { removeEmptyTextParams } from './removeEmptyText'
import { removeHiddenElemsParams } from './removeHiddenElems'
import { removeUnknownsAndDefaultsParams } from './removeUnknownsAndDefaults'
import { removeUselessStrokeAndFillParams } from './removeUselessStrokeAndFill'
import { sortAttrsParams } from './sortAttrs'

export const presetDefaultParams = createParamsSchema({
  floatPrecision: precisionSchema,
  overrides: {
    type: 'object',
    // @keep-sorted
    properties: {
      cleanupAttrs: {
        oneOf: [booleanSchema, cleanupAttrsParams],
      },
      cleanupEnableBackground: onlyFalseSchema,
      cleanupIds: {
        oneOf: [booleanSchema, cleanupIdsParams],
      },
      cleanupNumericValues: {
        oneOf: [booleanSchema, cleanupNumericValuesParams],
      },
      collapseGroups: onlyFalseSchema,
      convertColors: {
        oneOf: [booleanSchema, convertColorsParams],
      },
      convertEllipseToCircle: onlyFalseSchema,
      convertPathData: {
        oneOf: [booleanSchema, convertPathDataParams],
      },
      convertShapeToPath: {
        oneOf: [booleanSchema, convertShapeToPathParams],
      },
      convertTransform: {
        oneOf: [booleanSchema, convertTransformParams],
      },
      inlineStyles: {
        oneOf: [booleanSchema, inlineStylesParams],
      },
      mergePaths: {
        oneOf: [booleanSchema, mergePathsParams],
      },
      mergeStyles: onlyFalseSchema,
      minifyStyles: {
        oneOf: [booleanSchema, minifyStylesParams],
      },
      moveElemsAttrsToGroup: onlyFalseSchema,
      moveGroupAttrsToElems: onlyFalseSchema,
      removeComments: {
        oneOf: [booleanSchema, removeCommentsParams],
      },
      removeDeprecatedAttrs: {
        oneOf: [booleanSchema, removeDeprecatedAttrsParams],
      },
      removeDesc: {
        oneOf: [booleanSchema, removeDescParams],
      },
      removeDoctype: onlyFalseSchema,
      removeEditorsNSData: {
        oneOf: [booleanSchema, removeEditorsNSDataParams],
      },
      removeEmptyAttrs: onlyFalseSchema,
      removeEmptyContainers: onlyFalseSchema,
      removeEmptyText: {
        oneOf: [booleanSchema, removeEmptyTextParams],
      },
      removeHiddenElems: {
        oneOf: [booleanSchema, removeHiddenElemsParams],
      },
      removeMetadata: onlyFalseSchema,
      removeNonInheritableGroupAttrs: onlyFalseSchema,
      removeTitle: onlyFalseSchema,
      removeUnknownsAndDefaults: {
        oneOf: [booleanSchema, removeUnknownsAndDefaultsParams],
      },
      removeUnusedNS: onlyFalseSchema,
      removeUselessDefs: onlyFalseSchema,
      removeUselessStrokeAndFill: {
        oneOf: [booleanSchema, removeUselessStrokeAndFillParams],
      },
      removeViewBox: onlyFalseSchema,
      removeXMLProcInst: onlyFalseSchema,
      sortAttrs: {
        oneOf: [booleanSchema, sortAttrsParams],
      },
      sortDefsChildren: onlyFalseSchema,
    },
    additionalProperties: false,
  },
})

export const presetDefaultPlugin = createPluginSchema(
  'preset-default',
  presetDefaultParams,
)
