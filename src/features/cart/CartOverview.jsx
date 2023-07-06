import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const nPizzas = useSelector(getTotalQuantity);
  const total = useSelector(getTotalPrice);

  if (!nPizzas) return null;

  return (
    <div className="bg-stone-800 text-stone-200  uppercase px-4 py-4 sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{nPizzas} pizzas</span>
        <span>${total}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
