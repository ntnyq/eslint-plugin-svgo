/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export type RuleOptions = {
  /**
   * Use SVGO to optimize SVG files
   * @see https://github.com/ntnyq/eslint-plugin-svgo
   */
  'svgo/svgo'?: Linter.RuleEntry<SvgoSvgo>
}

/* ======= Declarations ======= */
// ----- svgo/svgo -----
export type SvgoSvgo = []|[{
  path?: string
  multipass?: boolean
  floatPrecision?: number
  datauri?: ("base64" | "enc" | "unenc")
  js2svg?: {
    attrEnd?: string
    attrStart?: string
    cdataEnd?: string
    cdataStart?: string
    commentEnd?: string
    commentStart?: string
    doctypeEnd?: string
    doctypeStart?: string
    eol?: ("lf" | "crlf")
    finalNewline?: boolean
    indent?: (string | number)
    pretty?: boolean
    procInstEnd?: string
    procInstStart?: string
    tagCloseEnd?: string
    tagCloseStart?: string
    tagOpenEnd?: string
    tagOpenStart?: string
    tagShortEnd?: string
    tagShortStart?: string
    textEnd?: string
    textStart?: string
    useShortTags?: boolean
  }
  plugins?: (("preset-default" | "cleanupAttrs" | "cleanupEnableBackground" | "cleanupIds" | "cleanupNumericValues" | "collapseGroups" | "convertColors" | "convertEllipseToCircle" | "convertPathData" | "convertShapeToPath" | "convertTransform" | "inlineStyles" | "mergePaths" | "mergeStyles" | "minifyStyles" | "moveElemsAttrsToGroup" | "moveGroupAttrsToElems" | "removeComments" | "removeDesc" | "removeDoctype" | "removeEditorsNSData" | "removeEmptyAttrs" | "removeEmptyContainers" | "removeEmptyText" | "removeHiddenElems" | "removeMetadata" | "removeNonInheritableGroupAttrs" | "removeUnknownsAndDefaults" | "removeUnusedNS" | "removeUselessDefs" | "removeUselessStrokeAndFill" | "removeXMLProcInst" | "sortAttrs" | "sortDefsChildren" | "cleanupListOfValues" | "convertOneStopGradients" | "convertStyleToAttrs" | "prefixIds" | "removeDeprecatedAttrs" | "removeDimensions" | "removeOffCanvasPaths" | "removeRasterImages" | "removeScripts" | "removeStyleElement" | "removeTitle" | "removeViewBox" | "removeXlink" | "removeXMLNS" | "reusePaths" | "addAttributesToSVGElement" | "addClassesToSVGElement" | "removeAttributesBySelector" | "removeAttrs" | "removeElementsByAttr") | {
    name: "addAttributesToSVGElement"
    params?: {
      attribute?: (string | {
        [k: string]: (string | null)
      })
      attributes?: (string | {
        [k: string]: (string | null)
      })[]
    }
  } | {
    name: "addClassesToSVGElement"
    params?: {
      className?: string
      classNames?: string[]
    }
  } | {
    name: "cleanupAttrs"
    params?: {
      newlines?: boolean
      trim?: boolean
      spaces?: boolean
    }
  } | {
    name: "cleanupEnableBackground"
  } | {
    name: "cleanupIds"
    params?: {
      remove?: boolean
      minify?: boolean
      force?: boolean
      preserve?: string[]
      preservePrefixes?: string[]
    }
  } | {
    name: "cleanupListOfValues"
    params?: {
      floatPrecision?: number
      leadingZero?: boolean
      defaultPx?: boolean
      convertToPx?: boolean
    }
  } | {
    name: "cleanupNumericValues"
    params?: {
      floatPrecision?: number
      leadingZero?: boolean
      defaultPx?: boolean
      convertToPx?: boolean
    }
  } | {
    name: "collapseGroups"
  } | {
    name: "convertColors"
    params?: {
      currentColor?: (boolean | string)
      names2hex?: boolean
      rgb2hex?: boolean
      convertCase?: (false | ("lower" | "upper"))
      shorthex?: boolean
      shortname?: boolean
    }
  } | {
    name: "convertEllipseToCircle"
  } | {
    name: "convertOneStopGradients"
  } | {
    name: "convertPathData"
    params?: {
      applyTransforms?: boolean
      applyTransformsStroked?: boolean
      makeArcs?: {
        threshold?: number
        tolerance?: number
      }
      straightCurves?: boolean
      convertToQ?: boolean
      lineShorthands?: boolean
      convertToZ?: boolean
      curveSmoothShorthands?: boolean
      floatPrecision?: (false | number)
      transformPrecision?: number
      smartArcRounding?: boolean
      removeUseless?: boolean
      collapseRepeated?: boolean
      utilizeAbsolute?: boolean
      leadingZero?: boolean
      negativeExtraSpace?: boolean
      noSpaceAfterFlags?: boolean
      forceAbsolutePath?: boolean
    }
  } | {
    name: "convertShapeToPath"
    params?: {
      convertArcs?: boolean
      floatPrecision?: number
    }
  } | {
    name: "convertStyleToAttrs"
    params?: {
      keepImportant?: boolean
    }
  } | {
    name: "convertTransform"
    params?: {
      convertToShorts?: boolean
      floatPrecision?: number
      transformPrecision?: number
      matrixToTransform?: boolean
      shortTranslate?: boolean
      shortScale?: boolean
      shortRotate?: boolean
      removeUseless?: boolean
      collapseIntoOne?: boolean
    }
  } | {
    name: "inlineStyles"
    params?: {
      onlyMatchedOnce?: boolean
      removeMatchedSelectors?: boolean
      useMqs?: string[]
      usePseudos?: string[]
    }
  } | {
    name: "mergePaths"
    params?: {
      force?: boolean
      floatPrecision?: number
      noSpaceAfterFlags?: boolean
    }
  } | {
    name: "mergeStyles"
  } | {
    name: "minifyStyles"
    params?: {
      restructure?: boolean
      forceMediaMerge?: boolean
      comments?: (boolean | string)
      usage?: (boolean | {
        force?: boolean
        ids?: boolean
        classes?: boolean
        tags?: boolean
      })
    }
  } | {
    name: "moveElemsAttrsToGroup"
  } | {
    name: "moveGroupAttrsToElems"
  } | {
    name: "prefixIds"
    params?: {
      delim?: string
      prefix?: (boolean | string)
      prefixIds?: boolean
      prefixClassNames?: boolean
    }
  } | {
    name: "preset-default"
    params?: {
      overrides?: {
        cleanupAttrs?: (boolean | {
          newlines?: boolean
          trim?: boolean
          spaces?: boolean
        })
        cleanupEnableBackground?: false
        cleanupIds?: (boolean | {
          remove?: boolean
          minify?: boolean
          force?: boolean
          preserve?: string[]
          preservePrefixes?: string[]
        })
        cleanupNumericValues?: (boolean | {
          floatPrecision?: number
          leadingZero?: boolean
          defaultPx?: boolean
          convertToPx?: boolean
        })
        collapseGroups?: false
        convertColors?: (boolean | {
          currentColor?: (boolean | string)
          names2hex?: boolean
          rgb2hex?: boolean
          convertCase?: (false | ("lower" | "upper"))
          shorthex?: boolean
          shortname?: boolean
        })
        convertEllipseToCircle?: false
        convertPathData?: (boolean | {
          applyTransforms?: boolean
          applyTransformsStroked?: boolean
          makeArcs?: {
            threshold?: number
            tolerance?: number
          }
          straightCurves?: boolean
          convertToQ?: boolean
          lineShorthands?: boolean
          convertToZ?: boolean
          curveSmoothShorthands?: boolean
          floatPrecision?: (false | number)
          transformPrecision?: number
          smartArcRounding?: boolean
          removeUseless?: boolean
          collapseRepeated?: boolean
          utilizeAbsolute?: boolean
          leadingZero?: boolean
          negativeExtraSpace?: boolean
          noSpaceAfterFlags?: boolean
          forceAbsolutePath?: boolean
        })
        convertShapeToPath?: (boolean | {
          convertArcs?: boolean
          floatPrecision?: number
        })
        convertTransform?: (boolean | {
          convertToShorts?: boolean
          floatPrecision?: number
          transformPrecision?: number
          matrixToTransform?: boolean
          shortTranslate?: boolean
          shortScale?: boolean
          shortRotate?: boolean
          removeUseless?: boolean
          collapseIntoOne?: boolean
        })
        inlineStyles?: (boolean | {
          onlyMatchedOnce?: boolean
          removeMatchedSelectors?: boolean
          useMqs?: string[]
          usePseudos?: string[]
        })
        mergePaths?: (boolean | {
          force?: boolean
          floatPrecision?: number
          noSpaceAfterFlags?: boolean
        })
        mergeStyles?: false
        minifyStyles?: (boolean | {
          restructure?: boolean
          forceMediaMerge?: boolean
          comments?: (boolean | string)
          usage?: (boolean | {
            force?: boolean
            ids?: boolean
            classes?: boolean
            tags?: boolean
          })
        })
        moveElemsAttrsToGroup?: false
        moveGroupAttrsToElems?: false
        removeComments?: (boolean | {
          preservePatterns?: (false | string[])
        })
        removeDesc?: (boolean | {
          removeAny?: boolean
        })
        removeDoctype?: (boolean | {})
        removeEditorsNSData?: (boolean | {
          additionalNamespaces?: string[]
        })
        removeEmptyAttrs?: false
        removeEmptyContainers?: false
        removeEmptyText?: (boolean | {
          text?: boolean
          tspan?: boolean
          tref?: boolean
        })
        removeHiddenElems?: (boolean | {
          isHidden?: boolean
          displayNone?: boolean
          opacity0?: boolean
          circleR0?: boolean
          ellipseRX0?: boolean
          ellipseRY0?: boolean
          rectWidth0?: boolean
          rectHeight0?: boolean
          patternWidth0?: boolean
          patternHeight0?: boolean
          imageWidth0?: boolean
          imageHeight0?: boolean
          pathEmptyD?: boolean
          polylineEmptyPoints?: boolean
          polygonEmptyPoints?: boolean
        })
        removeMetadata?: false
        removeNonInheritableGroupAttrs?: false
        removeTitle?: false
        removeUnknownsAndDefaults?: (boolean | {
          unknownContent?: boolean
          unknownAttrs?: boolean
          defaultAttrs?: boolean
          defaultMarkupDeclarations?: boolean
          uselessOverrides?: boolean
          keepDataAttrs?: boolean
          keepAriaAttrs?: boolean
          keepRoleAttr?: boolean
        })
        removeUnusedNS?: false
        removeUselessDefs?: false
        removeUselessStrokeAndFill?: (boolean | {
          stroke?: boolean
          fill?: boolean
          removeNone?: boolean
        })
        removeViewBox?: false
        removeXMLProcInst?: false
        sortAttrs?: (boolean | {
          order?: string[]
          xmlnsOrder?: ("front" | "alphabetical")
        })
        sortDefsChildren?: false
      }
    }
  } | {
    name: "removeAttributesBySelector"
    params?: {
      selectors?: {
        selector?: string
        attributes?: string[]
        [k: string]: unknown | undefined
      }[]
    }
  } | {
    name: "removeAttrs"
    params?: {
      attrs?: (string | string[])
      elemSeparator?: string
      preserveCurrentColor?: boolean
    }
  } | {
    name: "removeComments"
    params?: {
      preservePatterns?: (false | string[])
    }
  } | {
    name: "removeDeprecatedAttrs"
    params?: {
      removeAny?: boolean
    }
  } | {
    name: "removeDesc"
    params?: {
      removeAny?: boolean
    }
  } | {
    name: "removeDimensions"
    params?: {}
  } | {
    name: "removeDoctype"
    params?: {}
  } | {
    name: "removeEditorsNSData"
    params?: {
      additionalNamespaces?: string[]
    }
  } | {
    name: "removeElementsByAttr"
    params?: {
      id?: (string | string[])
      class?: (string | string[])
    }
  } | {
    name: "removeEmptyAttrs"
  } | {
    name: "removeEmptyContainers"
  } | {
    name: "removeEmptyText"
    params?: {
      text?: boolean
      tspan?: boolean
      tref?: boolean
    }
  } | {
    name: "removeHiddenElems"
    params?: {
      isHidden?: boolean
      displayNone?: boolean
      opacity0?: boolean
      circleR0?: boolean
      ellipseRX0?: boolean
      ellipseRY0?: boolean
      rectWidth0?: boolean
      rectHeight0?: boolean
      patternWidth0?: boolean
      patternHeight0?: boolean
      imageWidth0?: boolean
      imageHeight0?: boolean
      pathEmptyD?: boolean
      polylineEmptyPoints?: boolean
      polygonEmptyPoints?: boolean
    }
  } | {
    name: "removeMetadata"
  } | {
    name: "removeNonInheritableGroupAttrs"
  } | {
    name: "removeOffCanvasPaths"
  } | {
    name: "removeRasterImages"
  } | {
    name: "removeScripts"
  } | {
    name: "removeStyleElement"
  } | {
    name: "removeTitle"
  } | {
    name: "removeUnknownsAndDefaults"
    params?: {
      unknownContent?: boolean
      unknownAttrs?: boolean
      defaultAttrs?: boolean
      defaultMarkupDeclarations?: boolean
      uselessOverrides?: boolean
      keepDataAttrs?: boolean
      keepAriaAttrs?: boolean
      keepRoleAttr?: boolean
    }
  } | {
    name: "removeUnusedNS"
  } | {
    name: "removeUselessDefs"
  } | {
    name: "removeUselessStrokeAndFill"
    params?: {
      stroke?: boolean
      fill?: boolean
      removeNone?: boolean
    }
  } | {
    name: "removeViewBox"
  } | {
    name: "removeXlink"
    params?: {
      includeLegacy?: boolean
    }
  } | {
    name: "removeXMLNS"
  } | {
    name: "removeXMLProcInst"
  } | {
    name: "reusePaths"
  } | {
    name: "sortAttrs"
    params?: {
      order?: string[]
      xmlnsOrder?: ("front" | "alphabetical")
    }
  } | {
    name: "sortDefsChildren"
  })[]
  
  svgoConfig?: (boolean | string)
}]