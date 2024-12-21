import { PLUGIN_PRESET_DEFAULT, PLUGINS_PRESET_DEFAULT } from '../constants'
import {
  cleanupIdsPlugin,
  convertColorsPlugin,
  convertPathDataPlugin,
  convertStyleToAttrsPlugin,
  inlineStylesPlugin,
  mergePathsPlugin,
  presetDefaultPlugin,
  removeCommentsPlugin,
  removeDescPlugin,
  removeDimensionsPlugin,
  removeDoctypePlugin,
  removeEmptyTextPlugin,
  removeHiddenElemsPlugin,
  removeNonInheritableGroupAttrsPlugin,
  removeTitlePlugin,
  removeUnknownsAndDefaultsPlugin,
  removeUselessDefsPlugin,
  removeUselessStrokeAndFillPlugin,
  removeViewBoxPlugin,
} from './plugins'
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
    attrEnd: {
      type: 'string',
    },
    attrStart: {
      type: 'string',
    },
    cdataEnd: {
      type: 'string',
    },
    cdataStart: {
      type: 'string',
    },
    commentEnd: {
      type: 'string',
    },
    commentStart: {
      type: 'string',
    },
    doctypeEnd: {
      type: 'string',
    },
    doctypeStart: {
      type: 'string',
    },
    eol: {
      type: 'string',
      enum: ['lf', 'crlf'],
    },
    finalNewline: {
      type: 'boolean',
    },
    indent: {
      type: 'number',
    },
    pretty: {
      type: 'boolean',
    },
    procInstEnd: {
      type: 'string',
    },
    procInstStart: {
      type: 'string',
    },
    tagCloseEnd: {
      type: 'string',
    },
    tagCloseStart: {
      type: 'string',
    },
    tagOpenEnd: {
      type: 'string',
    },
    tagOpenStart: {
      type: 'string',
    },
    tagShortEnd: {
      type: 'string',
    },
    tagShortStart: {
      type: 'string',
    },
    textEnd: {
      type: 'string',
    },
    textStart: {
      type: 'string',
    },
    useShortTags: {
      type: 'boolean',
    },
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
        ],
      },
      /**
       * plugins with params
       */
      cleanupIdsPlugin,
      convertColorsPlugin,
      convertPathDataPlugin,
      convertStyleToAttrsPlugin,
      inlineStylesPlugin,
      mergePathsPlugin,
      presetDefaultPlugin,
      removeCommentsPlugin,
      removeDescPlugin,
      removeDimensionsPlugin,
      removeDoctypePlugin,
      removeEmptyTextPlugin,
      removeHiddenElemsPlugin,
      removeNonInheritableGroupAttrsPlugin,
      removeTitlePlugin,
      removeUnknownsAndDefaultsPlugin,
      removeUselessDefsPlugin,
      removeUselessStrokeAndFillPlugin,
      removeViewBoxPlugin,
    ],
  },
} satisfies JSONSchema4

export const svgoConfigProperties = {
  path: {
    type: 'string',
  },
  multipass: {
    type: 'boolean',
  },
  floatPrecision: {
    type: 'integer',
    minimum: 0,
  },
  datauri: {
    type: 'string',
    enum: ['base64', 'enc', 'unenc'],
  },
  js2svg,
  plugins,
} satisfies JSONSchema4['properties']
