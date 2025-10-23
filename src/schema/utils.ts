import type { JSONSchema4 } from 'json-schema'

export function createParamsSchema(
  properties: JSONSchema4['properties'] = {},
  additionalProperties = false,
) {
  const schema: JSONSchema4 = {
    type: 'object',
    properties,
    additionalProperties,
  }
  return schema
}

export function createPluginSchema(pluginName: string, params?: JSONSchema4) {
  const schema: JSONSchema4 = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        enum: [pluginName],
      },
      ...(params && Object.keys(params.properties || {}).length > 0
        ? { params }
        : {}),
    },
    required: ['name'],
    additionalProperties: false,
  }

  return schema
}
