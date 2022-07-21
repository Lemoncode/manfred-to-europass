import React from 'react'
import { useTheme } from '@material-ui/core'

export type ResultType<Classes> = {
  [K in keyof Classes]?: Classes[K] extends string | Function
    ? string
    : ResultType<Classes[K]>
}

export type PropsType<Classes, K extends keyof Classes = keyof Classes> = {
  [Key in K]: Classes[Key] extends (arg1: any, arg2: any) => string
    ? Parameters<Classes[Key]>[1] extends undefined
      ? never
      : Parameters<Classes[Key]>[1]
    : Classes[Key] extends string
    ? never
    : PropsType<Classes[Key]>
}[K]

export type ClassesHasProps<Classes> = PropsType<Classes> extends never
  ? false
  : true

const feedThemeAndProps = (classes, theme, props) => {
  return Object.entries(classes).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]:
        typeof value === 'function'
          ? value(theme, props)
          : typeof value === 'object'
          ? feedThemeAndProps(value, theme, props)
          : value,
    }),
    {}
  )
}

export const useWithTheme = <Classes extends Record<string, unknown>>(
  classes: Classes,
  ...rest: ClassesHasProps<Classes> extends true
    ? [props: PropsType<Classes>]
    : []
): ResultType<Classes> => {
  const theme = useTheme()
  const props = React.useMemo(() => rest[0], [rest[0]])

  const result = React.useMemo(
    () => feedThemeAndProps(classes, theme, props) as ResultType<Classes>,
    [classes, theme, props]
  )

  return result
}
