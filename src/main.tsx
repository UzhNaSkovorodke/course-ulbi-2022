import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App.tsx'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { ErrorBoundary } from './app/providers/ErrorBoundary'
import { store } from '@app/providers/StoreProvider/config/store.ts'
import { StoreProvider } from '@app/providers/StoreProvider/ui/StoreProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </StoreProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
)
