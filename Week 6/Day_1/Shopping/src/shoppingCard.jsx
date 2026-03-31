import React from "react";
import { useCart } from "./CartContext";
import { products } from "./data/products";


export default function ShoppingCart() {
  const { cartState, cartDispatch } = useCart();

  /**
   * Add item to cart
   */
  const addToCart = (item) => {
    const existing = cartState.cartItems.find(
      (c) => c.id === item.id
    );

    if (existing) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: existing.quantity + 1 },
      });
    } else {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { ...item, quantity: 1 },
      });
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id, quantity },
      });
    }
  };

  const removeFromCart = (id) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="container">
      {/* CART SECTION */}
      <div className="cart">
        <h2 style={{ color: "black" }}> 🛒 Cart</h2>

        {cartState.cartItems.length === 0 &&  <p style={{color: "red"}}>Your cart is empty</p>}

        {cartState.cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Qty: {item.quantity}</span>

            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>

      {/* PRODUCT LIST */}
      <div className="products">
        <h2>🛍 Products</h2>

        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}