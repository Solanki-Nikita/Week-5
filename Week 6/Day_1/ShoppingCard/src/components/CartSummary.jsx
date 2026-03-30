import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

export default function CartSummary() {
  const { totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">Summary</h3>
      <p className="mt-2">Total: ₹{totalPrice}</p>

      <button
        onClick={() => dispatch(clearCart())}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
      >
        Clear Cart
      </button>
    </div>
  );
}
