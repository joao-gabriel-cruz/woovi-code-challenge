import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './styles/theme.ts';
import { PaymentProvider } from './context/payment-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PaymentProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </PaymentProvider>
  </React.StrictMode>,
)
