import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'

import { Routes } from './routes/index.routes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />

        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
