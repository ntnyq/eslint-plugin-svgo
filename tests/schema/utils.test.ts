import { describe, expect, it } from 'vitest'
import { createParamsSchema, createPluginSchema } from '../../src/schema/utils'
import type { JSONSchema4 } from 'json-schema'

describe('createParamsSchema', () => {
  it('should create empty params schema with default values', () => {
    const schema = createParamsSchema()

    expect(schema).toEqual({
      type: 'object',
      properties: {},
      additionalProperties: false,
    })
  })

  it('should create params schema with provided properties', () => {
    const properties: JSONSchema4['properties'] = {
      enabled: { type: 'boolean' },
      value: { type: 'string' },
    }
    const schema = createParamsSchema(properties)

    expect(schema).toEqual({
      type: 'object',
      properties,
      additionalProperties: false,
    })
  })

  it('should create params schema with additionalProperties enabled', () => {
    const properties: JSONSchema4['properties'] = {
      test: { type: 'boolean' },
    }
    const schema = createParamsSchema(properties, true)

    expect(schema).toEqual({
      type: 'object',
      properties,
      additionalProperties: true,
    })
  })
})

describe('createPluginSchema', () => {
  it('should create plugin schema without params', () => {
    const schema = createPluginSchema('testPlugin')

    expect(schema).toEqual({
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['testPlugin'],
        },
      },
      required: ['name'],
      additionalProperties: false,
    })
  })

  it('should create plugin schema with valid params', () => {
    const params: JSONSchema4 = {
      type: 'object',
      properties: {
        enabled: { type: 'boolean' },
        value: { type: 'string' },
      },
      additionalProperties: false,
    }

    const schema = createPluginSchema('testPlugin', params)

    expect(schema).toEqual({
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['testPlugin'],
        },
        params,
      },
      required: ['name'],
      additionalProperties: false,
    })
  })

  it('should create plugin schema without params when params has no properties', () => {
    const params: JSONSchema4 = {
      type: 'object',
      properties: {},
      additionalProperties: false,
    }

    const schema = createPluginSchema('testPlugin', params)

    expect(schema).toEqual({
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['testPlugin'],
        },
      },
      required: ['name'],
      additionalProperties: false,
    })
  })

  it('should create plugin schema without params when params is undefined', () => {
    const schema = createPluginSchema('testPlugin', undefined)

    expect(schema).toEqual({
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['testPlugin'],
        },
      },
      required: ['name'],
      additionalProperties: false,
    })
  })

  it('should create plugin schema without params when params has undefined properties', () => {
    const params: JSONSchema4 = {
      type: 'object',
      additionalProperties: false,
    }

    const schema = createPluginSchema('testPlugin', params)

    expect(schema).toEqual({
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['testPlugin'],
        },
      },
      required: ['name'],
      additionalProperties: false,
    })
  })

  it('should handle complex plugin names with special characters', () => {
    const pluginName = 'preset-default'
    const schema = createPluginSchema(pluginName)

    expect(schema.properties?.name).toEqual({
      type: 'string',
      enum: [pluginName],
    })
  })

  it('should handle complex params schema structure', () => {
    const params: JSONSchema4 = {
      type: 'object',
      properties: {
        floatPrecision: {
          type: 'integer',
          minimum: 0,
        },
        overrides: {
          type: 'object',
          properties: {
            cleanupIds: {
              oneOf: [
                { type: 'boolean' },
                {
                  type: 'object',
                  properties: {
                    minify: { type: 'boolean' },
                  },
                },
              ],
            },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    }

    const schema = createPluginSchema('preset-default', params)

    expect(schema).toEqual({
      type: 'object',
      properties: {
        name: {
          type: 'string',
          enum: ['preset-default'],
        },
        params,
      },
      required: ['name'],
      additionalProperties: false,
    })
  })

  describe('edge cases', () => {
    it('should handle empty string plugin name', () => {
      const schema = createPluginSchema('')

      expect(schema.properties?.name).toEqual({
        type: 'string',
        enum: [''],
      })
    })

    it('should handle plugin name with spaces', () => {
      const pluginName = 'my plugin name'
      const schema = createPluginSchema(pluginName)

      expect(schema.properties?.name).toEqual({
        type: 'string',
        enum: [pluginName],
      })
    })

    it('should include params when params has at least one property', () => {
      const params: JSONSchema4 = {
        type: 'object',
        properties: {
          singleProp: { type: 'boolean' },
        },
        additionalProperties: false,
      }

      const schema = createPluginSchema('testPlugin', params)

      expect(schema.properties).toHaveProperty('params')
      expect(schema.properties?.params).toBe(params)
    })

    it('should exclude params when params object exists but properties is empty', () => {
      const params: JSONSchema4 = {
        type: 'object',
        properties: {},
        additionalProperties: false,
      }

      const schema = createPluginSchema('testPlugin', params)

      expect(schema.properties).not.toHaveProperty('params')
    })
  })

  describe('real-world examples', () => {
    it('should work with cleanupIds plugin schema', () => {
      const params: JSONSchema4 = {
        type: 'object',
        properties: {
          remove: { type: 'boolean' },
          minify: { type: 'boolean' },
          force: { type: 'boolean' },
          preserve: {
            type: 'array',
            items: { type: 'string' },
          },
          preservePrefixes: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        additionalProperties: false,
      }

      const schema = createPluginSchema('cleanupIds', params)

      expect(schema).toMatchSnapshot()
    })

    it('should work with removeMetadata plugin (no params)', () => {
      const schema = createPluginSchema('removeMetadata')

      expect(schema).toMatchSnapshot()
    })

    it('should work with prefixIds plugin schema', () => {
      const params: JSONSchema4 = {
        type: 'object',
        properties: {
          delim: { type: 'string' },
          prefix: {
            oneOf: [{ type: 'boolean' }, { type: 'string' }],
          },
          prefixIds: { type: 'boolean' },
          prefixClassNames: { type: 'boolean' },
        },
        additionalProperties: false,
      }

      const schema = createPluginSchema('prefixIds', params)

      expect(schema).toMatchSnapshot()
    })
  })
})
