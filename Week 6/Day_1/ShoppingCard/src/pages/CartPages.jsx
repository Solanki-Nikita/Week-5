import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

export default function CartPage() {
  const { items } = useSelector(state => state.cart);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-2 space-y-4">
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <CartSummary />
      </div>
    </>
  );
}