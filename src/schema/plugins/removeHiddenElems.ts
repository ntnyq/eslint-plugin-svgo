/**
 * @kind default
 */

import { booleanSchema } from '../shared'
import { createParamsSchema, createPluginSchema } from '../utils'

export const removeHiddenElemsParams = createParamsSchema({
  isHidden: booleanSchema,
  displayNone: booleanSchema,
  opacity0: booleanSchema,
  circleR0: booleanSchema,
  ellipseRX0: booleanSchema,
  ellipseRY0: booleanSchema,
  rectWidth0: booleanSchema,
  rectHeight0: booleanSchema,
  patternWidth0: booleanSchema,
  patternHeight0: booleanSchema,
  imageWidth0: booleanSchema,
  imageHeight0: booleanSchema,
  pathEmptyD: booleanSchema,
  polylineEmptyPoints: booleanSchema,
  polygonEmptyPoints: booleanSchema,
})

export const removeHiddenElemsPlugin = createPluginSchema(
  'removeHiddenElems',
  removeHiddenElemsParams,
)
