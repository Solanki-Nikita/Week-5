import React from "react";
import ProductCard from "./ProductCard";
import headphone from "./assets/HeadPhone.jpg";


// Main App component to render the product card
export default function App() {
// Function to handle adding product to cart
  const handleAddToCart = (product) => {
    console.log("Added:", product);
  };


// Render the ProductCard component with product details
  return (

// Container for the product card
    <div>
      <ProductCard

// Pass product details as props to the ProductCard component
        title="Wireless Headphones"
        price={2999}
        image={headphone}
        description="High quality noise cancelling headphones."
        onAddToCart={() => handleAddToCart("Wireless Headphones")}
      />
    </div>
    
  );
}