import type { JSONSchema4 } from 'json-schema'

export const booleanSchema: JSONSchema4 = {
  type: 'boolean',
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

export const stringArraySchema: JSONSchema4 = {
  type: 'array',
  items: stringSchema,
}

export const precisionSchema: JSONSchema4 = {
  ...integerSchema,
  minimum: 0,
}
