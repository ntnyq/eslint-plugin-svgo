import { builtinPlugins } from 'svgo'
import { describe, expect, it } from 'vitest'
import {
  optionalPluginNames,
  pluginCatalog,
  pluginSchemas,
} from '../../src/schema/plugins/catalog'
import type { BuiltinsWithRequiredParams, PluginsParams } from 'svgo'

const requiredPluginNames = [
  'addAttributesToSVGElement',
  'addClassesToSVGElement',
  'removeAttributesBySelector',
  'removeAttrs',
  'removeElementsByAttr',
] as const satisfies ReadonlyArray<keyof BuiltinsWithRequiredParams>

const completePluginCatalog: Record<keyof PluginsParams, unknown> =
  pluginCatalog

describe('pluginCatalog', () => {
  it('should cover every built-in SVGO plugin', () => {
    const builtinPluginNames = builtinPlugins.map(plugin => plugin.name).sort()
    const catalogPluginNames = Object.keys(pluginCatalog).sort()

    expect(catalogPluginNames).toEqual(builtinPluginNames)
  })

  it('should classify every preset-default plugin', () => {
    const presetDefault = builtinPlugins.find(
      plugin => plugin.name === 'preset-default',
    )
    const builtinDefaultPluginNames = presetDefault?.plugins
      ?.map(plugin => plugin.name)
      .sort()
    const catalogDefaultPluginNames = Object.entries(pluginCatalog)
      .filter(([, plugin]) => plugin.kind === 'default')
      .map(([name]) => name)
      .sort()

    expect(catalogDefaultPluginNames).toEqual(builtinDefaultPluginNames)
  })

  it('should require params for required-params plugins', () => {
    for (const pluginName of requiredPluginNames) {
      expect(optionalPluginNames).not.toContain(pluginName)
      expect(pluginCatalog[pluginName].kind).toBe('required')
      expect(pluginCatalog[pluginName].schema.required).toEqual([
        'name',
        'params',
      ])
    }
  })

  it('should expose one schema for every catalog entry', () => {
    expect(pluginSchemas).toHaveLength(
      Object.keys(completePluginCatalog).length,
    )
  })
})
