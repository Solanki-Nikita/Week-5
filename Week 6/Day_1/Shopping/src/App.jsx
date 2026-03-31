import React from 'react'
import ShoppingCard from './shoppingCard'
import { CartProvider } from './CartContext'
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <div className="app-container">

        {/* Header Section */}
        <header className="header">
          <h1 className="title">🛍 Shopping App</h1>
          <p className="subtitle">Welcome to the Shopping App!</p>
        </header>

        <ShoppingCard />

      </div>
    </CartProvider>
  )
}