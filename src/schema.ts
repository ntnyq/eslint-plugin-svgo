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
  properties: {
    doctypeStart: {
      type: 'string',
    },
    doctypeEnd: {
      type: 'string',
    },
    procInstStart: {
      type: 'string',
    },
    procInstEnd: {
      type: 'string',
    },
    tagOpenStart: {
      type: 'string',
    },
    tagOpenEnd: {
      type: 'string',
    },
    tagCloseStart: {
      type: 'string',
    },
    tagCloseEnd: {
      type: 'string',
    },
    tagShortStart: {
      type: 'string',
    },
    tagShortEnd: {
      type: 'string',
    },
    attrStart: {
      type: 'string',
    },
    attrEnd: {
      type: 'string',
    },
    commentStart: {
      type: 'string',
    },
    commentEnd: {
      type: 'string',
    },
    cdataStart: {
      type: 'string',
    },
    cdataEnd: {
      type: 'string',
    },
    textStart: {
      type: 'string',
    },
    textEnd: {
      type: 'string',
    },
    indent: {
      type: 'number',
    },
    pretty: {
      type: 'boolean',
    },
    useShortTags: {
      type: 'boolean',
    },
    eol: {
      type: 'string',
      enum: ['lf', 'crlf'],
    },
    finalNewline: {
      type: 'boolean',
    },
  },
} satisfies JSONSchema4

const plugins = {
  type: 'array',
  items: {
    type: 'string',
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
