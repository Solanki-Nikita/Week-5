import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductCard from './ProductCard.jsx'


// Render the App component and ProductCard component to the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ProductCard />
  </StrictMode>,
)
