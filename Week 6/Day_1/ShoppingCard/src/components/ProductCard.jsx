import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
      <img src={product.image} className="w-full h-40 object-cover rounded-lg" />

      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-gray-500">₹{product.price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}