import { useSelector } from "react-redux";

export default function Navbar() {
  const total = useSelector(state => state.cart.totalQuantity);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">ShopX</h1>
      <div className="relative">
        🛒
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
          {total}
        </span>
      </div>
    </nav>
  );
}