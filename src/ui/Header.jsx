import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user.userName);
  return (
    <header className="bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 flex items-center justify-between font-sans">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      {user && (
        <div className="font-semibold text-sm hidden md:block">{user}</div>
      )}
    </header>
  );
};
export default Header;
