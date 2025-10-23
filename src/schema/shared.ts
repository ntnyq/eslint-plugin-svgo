import type { JSONSchema4 } from 'json-schema'

export const booleanSchema: JSONSchema4 = {
  type: 'boolean',
}

export const numberSchema: JSONSchema4 = {
  type: 'number',
}

export const onlyFalseSchema: JSONSchema4 = {
  type: 'boolean',
  enum: [false],
}

export const stringSchema: JSONSchema4 = {
  type: 'string',
}

export const integerSchema: JSONSchema4 = {
  type: 'integer',
}

export const objectSchema: JSONSchema4 = {
  type: 'object',
  additionalProperties: false,
}

export const stringArraySchema: JSONSchema4 = {
  type: 'array',
  items: stringSchema,
}

export const precisionSchema: JSONSchema4 = {
  ...integerSchema,
  minimum: 0,
}

// Common pattern: boolean or string union schema
export const booleanOrStringSchema: JSONSchema4 = {
  oneOf: [booleanSchema, stringSchema],
}

// Common pattern: string or string array union schema
export const stringOrStringArraySchema: JSONSchema4 = {
  oneOf: [stringSchema, stringArraySchema],
}

// Common pattern: positive number schema
export const positiveNumberSchema: JSONSchema4 = {
  ...numberSchema,
  minimum: 0,
}

// Common enums
export const COLOR_CASE_VALUES = ['lower', 'upper']
export const EOL_VALUES = ['lf', 'crlf']
export const DATAURI_VALUES = ['base64', 'enc', 'unenc']
export const XMLNS_ORDER_VALUES = ['front', 'alphabetical']

// Common enum schemas
export const colorCaseSchema: JSONSchema4 = {
  ...stringSchema,
  enum: COLOR_CASE_VALUES,
}

export const eolSchema: JSONSchema4 = {
  ...stringSchema,
  enum: EOL_VALUES,
}

export const datauriSchema: JSONSchema4 = {
  ...stringSchema,
  enum: DATAURI_VALUES,
}

export const xmlnsOrderSchema: JSONSchema4 = {
  ...stringSchema,
  enum: XMLNS_ORDER_VALUES,
}
