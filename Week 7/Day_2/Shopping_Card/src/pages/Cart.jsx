import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../features/cart/cartSlice";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  return (
    <div className="container cart">
      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>

          <p>Qty: {item.quantity}</p>

          <h2>Total: ₹{total.toFixed(2)}</h2>

          <button onClick={() => dispatch(increaseQty(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(decreaseQty(item.id))}>
            -
          </button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}