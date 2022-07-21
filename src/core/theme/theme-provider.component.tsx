import React from 'react'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  StylesProvider,
} from '@material-ui/core'
import { theme } from './theme'

interface Props {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <StylesProvider injectFirst={true}>
      <CacheProvider value={cache}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </CacheProvider>
    </StylesProvider>
  )
}
