import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContext, SocketContextProvider } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
        <App />
        <Toaster />
      </SocketContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
)
