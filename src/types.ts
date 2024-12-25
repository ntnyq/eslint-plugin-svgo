/**
 * svgo parser error
 *
 * @see {@link https://github.com/svg/svgo/blob/main/lib/parser.js}
 */
export interface SvgoParserError {
  column: number
  line: number
  message: string
  name: 'SvgoParserError'
  reason: string
}
