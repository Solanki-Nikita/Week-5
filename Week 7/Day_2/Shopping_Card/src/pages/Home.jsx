import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";

export default function Home() {
  const dispatch = useDispatch();

  // products state
  const { items, loading } = useSelector(state => state.products);

  // cart state (MISSING in your code)
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <div className="products">
        {items.map(product => {
          // 👇 IMPORTANT: yaha calculate karo
          const isInCart = cart.some(item => item.id === product.id);

          return (
            <div className="card" key={product.id}>
              <h3>{product.title}</h3>

              <button
                className={isInCart ? "btn-added" : "btn-add"}
                onClick={() => dispatch(addToCart(product))}
              >
                {isInCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}