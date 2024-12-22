/**
 * @kind default
 */

import { createParamsSchema, createPluginSchema } from '../utils'

export const removeXMLProcInstParams = createParamsSchema()

export const removeXMLProcInstPlugin = createPluginSchema(
  'removeXMLProcInst',
  removeXMLProcInstParams,
)
