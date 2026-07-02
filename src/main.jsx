import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from './context/CartContext.jsx'
import SearchProvider from './context/SearchContext.jsx'
import PopupProvider from './context/PopupContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PopupProvider>
    <SearchProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </SearchProvider>
    </PopupProvider>
  </StrictMode>,
)
