import { createTheme, responsiveFontSizes } from '@material-ui/core'

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
})

export const theme = responsiveFontSizes(defaultTheme)
