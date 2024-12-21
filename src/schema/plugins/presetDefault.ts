import { booleanSchema } from '../shared'
import { createPluginParams, createPluginSchema } from '../utils'
import { cleanupIdsParams } from './cleanupIds'
import { convertColorsParams } from './convertColors'
import { inlineStylesParams } from './inlineStyles'
import { mergePathsParams } from './mergePaths'
import { removeCommentsParams } from './removeComments'
import { removeDescParams } from './removeDesc'
import { removeEmptyTextParams } from './removeEmptyText'
import { removeHiddenElemsParams } from './removeHiddenElems'
import { removeNonInheritableGroupAttrsParams } from './removeNonInheritableGroupAttrs'
import { removeUnknownsAndDefaultsParams } from './removeUnknownsAndDefaults'
import { removeUselessDefsParams } from './removeUselessDefs'
import { removeUselessStrokeAndFillParams } from './removeUselessStrokeAndFill'
import { removeViewBoxParams } from './removeViewBox'

export const presetDefaultParams = createPluginParams({
  overrides: {
    type: 'object',
    // @keep-sorted
    properties: {
      cleanupIds: {
        oneOf: [booleanSchema, cleanupIdsParams],
      },
      convertColors: {
        oneOf: [booleanSchema, convertColorsParams],
      },
      convertPathData: {
        oneOf: [booleanSchema, convertColorsParams],
      },
      inlineStyles: {
        oneOf: [booleanSchema, inlineStylesParams],
      },
      mergePaths: {
        oneOf: [booleanSchema, mergePathsParams],
      },
      removeComments: {
        oneOf: [booleanSchema, removeCommentsParams],
      },
      removeDesc: {
        oneOf: [booleanSchema, removeDescParams],
      },
      removeDoctype: booleanSchema,
      removeEmptyText: {
        oneOf: [booleanSchema, removeEmptyTextParams],
      },
      removeHiddenElems: {
        oneOf: [booleanSchema, removeHiddenElemsParams],
      },
      removeNonInheritableGroupAttrs: {
        oneOf: [booleanSchema, removeNonInheritableGroupAttrsParams],
      },
      removeTitle: booleanSchema,
      removeUnknownsAndDefaults: {
        oneOf: [booleanSchema, removeUnknownsAndDefaultsParams],
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
    },
    additionalProperties: false,
  },
})

export const presetDefaultPlugin = createPluginSchema('preset-default', presetDefaultParams)
