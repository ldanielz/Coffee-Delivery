import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
