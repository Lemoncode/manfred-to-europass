import React from 'react'
import { RouterComponent } from '@/core/routes/router.component'
import { ThemeProvider } from 'core/theme'

export const App = () => {
  return (
    <ThemeProvider>
      <RouterComponent />
    </ThemeProvider>
  )
}
