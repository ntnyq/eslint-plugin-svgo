import { optionalPluginNames, pluginSchemas } from './plugins/catalog'
import {
  booleanSchema,
  datauriSchema,
  eolSchema,
  integerSchema,
  objectSchema,
  precisionSchema,
  stringSchema,
} from './shared'
import type { JSONSchema4 } from 'json-schema'

/**
 * Stringify Options
 *
 * Options below are not supported
 * - `regEntities`
 * - `regValEntities`
 * - `encodeEntity`
 */
const js2svgSchema = {
  ...objectSchema,
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
    eol: eolSchema,
    finalNewline: booleanSchema,
    indent: {
      oneOf: [stringSchema, integerSchema],
    },
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

const pluginsSchema = {
  type: 'array',
  items: {
    anyOf: [
      {
        ...stringSchema,
        enum: optionalPluginNames,
      },
      ...pluginSchemas,
    ],
  },
} satisfies JSONSchema4

export const svgoConfigProperties = {
  path: stringSchema,
  multipass: booleanSchema,
  floatPrecision: precisionSchema,
  datauri: datauriSchema,
  js2svg: js2svgSchema,
  plugins: pluginsSchema,
} satisfies JSONSchema4['properties']
