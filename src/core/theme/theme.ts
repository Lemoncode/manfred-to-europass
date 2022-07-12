import { createTheme, responsiveFontSizes } from '@mui/material'

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
})

export const theme = responsiveFontSizes(defaultTheme)
