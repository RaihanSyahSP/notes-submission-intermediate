import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { SnackbarProvider } from 'notistack'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        autoHideDuration={2000}
      >
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
