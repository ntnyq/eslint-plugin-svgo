import type { JSONSchema4 } from 'json-schema'

export const booleanSchema: JSONSchema4 = {
  type: 'boolean',
}

export const precisionSchema: JSONSchema4 = {
  type: 'integer',
  minimum: 0,
}
