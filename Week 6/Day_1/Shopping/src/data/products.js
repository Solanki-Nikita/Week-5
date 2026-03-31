// Fake API-style product data
// Instead of writing products manually:  
// GET https://fakestoreapi.com/products for random products
// rontend (React)
//       ↓ request
// API Server (FakeStore)
//       ↓ response (JSON)
// Frontend renders UI based on the response
// In shpooingCard.jsx, we fetch this data and display it to users.
// Handle loading and error states as well.
// useEffect to fetch data on component mount (runs -> API call -> update state -> re-render with products)
// use (.map) to render list of products in shoppingCard.jsx

export const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (Math.random() * 100 + 10).toFixed(2),
  image: `https://picsum.photos/200?random=${i + 1}`, // random image
}));