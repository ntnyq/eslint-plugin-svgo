import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'
import { cleanupAttrsParams } from './cleanupAttrs'
import { cleanupEnableBackgroundParams } from './cleanupEnableBackground'
import { cleanupIdsParams } from './cleanupIds'
import { cleanupNumericValuesParams } from './cleanupNumericValues'
import { collapseGroupsParams } from './collapseGroups'
import { convertColorsParams } from './convertColors'
import { convertEllipseToCircleParams } from './convertEllipseToCircle'
import { convertShapeToPathParams } from './convertShapeToPath'
import { convertTransformParams } from './convertTransform'
import { inlineStylesParams } from './inlineStyles'
import { mergePathsParams } from './mergePaths'
import { mergeStylesParams } from './mergeStyles'
import { minifyStylesParams } from './minifyStyles'
import { moveElemsAttrsToGroupParams } from './moveElemsAttrsToGroup'
import { moveGroupAttrsToElemsParams } from './moveGroupAttrsToElems'
import { removeCommentsParams } from './removeComments'
import { removeDescParams } from './removeDesc'
import { removeDoctypeParams } from './removeDoctype'
import { removeEditorsNSDataParams } from './removeEditorsNSData'
import { removeEmptyAttrsParams } from './removeEmptyAttrs'
import { removeEmptyContainersParams } from './removeEmptyContainers'
import { removeEmptyTextParams } from './removeEmptyText'
import { removeHiddenElemsParams } from './removeHiddenElems'
import { removeMetadataParams } from './removeMetadata'
import { removeNonInheritableGroupAttrsParams } from './removeNonInheritableGroupAttrs'
import { removeTitleParams } from './removeTitle'
import { removeUnknownsAndDefaultsParams } from './removeUnknownsAndDefaults'
import { removeUnusedNSParams } from './removeUnusedNS'
import { removeUselessDefsParams } from './removeUselessDefs'
import { removeUselessStrokeAndFillParams } from './removeUselessStrokeAndFill'
import { removeViewBoxParams } from './removeViewBox'
import { removeXMLProcInstParams } from './removeXMLProcInst'
import { sortAttrsParams } from './sortAttrs'
import { sortDefsChildrenParams } from './sortDefsChildren'

export const presetDefaultParams = createPluginParams({
  overrides: {
    type: 'object',
    // @keep-sorted
    properties: {
      cleanupAttrs: {
        oneOf: [booleanSchema, cleanupAttrsParams],
      },
      cleanupEnableBackground: {
        oneOf: [booleanSchema, cleanupEnableBackgroundParams],
      },
      cleanupIds: {
        oneOf: [booleanSchema, cleanupIdsParams],
      },
      cleanupNumericValues: {
        oneOf: [booleanSchema, cleanupNumericValuesParams],
      },
      collapseGroups: {
        oneOf: [booleanSchema, collapseGroupsParams],
      },
      convertColors: {
        oneOf: [booleanSchema, convertColorsParams],
      },
      convertEllipseToCircle: {
        oneOf: [booleanSchema, convertEllipseToCircleParams],
      },
      convertPathData: {
        oneOf: [booleanSchema, convertColorsParams],
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
      mergeStyles: {
        oneOf: [booleanSchema, mergeStylesParams],
      },
      minifyStyles: {
        oneOf: [booleanSchema, minifyStylesParams],
      },
      moveElemsAttrsToGroup: {
        oneOf: [booleanSchema, moveElemsAttrsToGroupParams],
      },
      moveGroupAttrsToElems: {
        oneOf: [booleanSchema, moveGroupAttrsToElemsParams],
      },
      removeComments: {
        oneOf: [booleanSchema, removeCommentsParams],
      },
      removeDesc: {
        oneOf: [booleanSchema, removeDescParams],
      },
      removeDoctype: {
        oneOf: [booleanSchema, removeDoctypeParams],
      },
      removeEditorsNSData: {
        oneOf: [booleanSchema, removeEditorsNSDataParams],
      },
      removeEmptyAttrs: {
        oneOf: [booleanSchema, removeEmptyAttrsParams],
      },
      removeEmptyContainers: {
        oneOf: [booleanSchema, removeEmptyContainersParams],
      },
      removeEmptyText: {
        oneOf: [booleanSchema, removeEmptyTextParams],
      },
      removeHiddenElems: {
        oneOf: [booleanSchema, removeHiddenElemsParams],
      },
      removeMetadata: {
        oneOf: [booleanSchema, removeMetadataParams],
      },
      removeNonInheritableGroupAttrs: {
        oneOf: [booleanSchema, removeNonInheritableGroupAttrsParams],
      },
      removeTitle: {
        oneOf: [booleanSchema, removeTitleParams],
      },
      removeUnknownsAndDefaults: {
        oneOf: [booleanSchema, removeUnknownsAndDefaultsParams],
      },
      removeUnusedNS: {
        oneOf: [booleanSchema, removeUnusedNSParams],
      },
      removeUselessDefs: {
        oneOf: [booleanSchema, removeUselessDefsParams],
      },
      removeUselessStrokeAndFill: {
        oneOf: [booleanSchema, removeUselessStrokeAndFillParams],
      },
      removeViewBox: {
        oneOf: [booleanSchema, removeViewBoxParams],
      },
      removeXMLProcInst: {
        oneOf: [booleanSchema, removeXMLProcInstParams],
      },
      sortAttrs: {
        oneOf: [booleanSchema, sortAttrsParams],
      },
      sortDefsChildren: {
        oneOf: [booleanSchema, sortDefsChildrenParams],
      },
    },
    additionalProperties: false,
  },
})

export const presetDefaultPlugin = createPluginSchema('preset-default', presetDefaultParams)
