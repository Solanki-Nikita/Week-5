
import React from "react";


// ProductCard component to display product details
export default function ProductCard({ title, price, image, description, onAddToCart }) {
  return (

  // Card container with product details
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>₹ {price}</h3>
      <button onClick={onAddToCart} style={styles.button}>
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};