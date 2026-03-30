import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(addToCart(item))}>+</button>
      </div>
    </div>
  );
}