/**
 * @kind default
 */

import { createParamsSchema, createPluginSchema } from '../utils'

export const convertEllipseToCircleParams = createParamsSchema()

export const convertEllipseToCirclePlugin = createPluginSchema(
  'convertEllipseToCircle',
  convertEllipseToCircleParams,
)
