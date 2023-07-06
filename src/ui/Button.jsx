import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    "bg-yellow-400 text-sm uppercase text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed border-2 border-yellow-400";

  const primary = base + " py-3 px-4 sm:px-6 sm:py-4";
  const small = base + " py-1.5 px-2 sm:px-3 sm:py-2";
  const secondary =
    "border-2 text-sm border-stone-300 uppercase text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed py-3 px-4 sm:px-6 sm:py-4";

  const classes =
    type === "small" ? small : type === "secondary" ? secondary : primary;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (onClick)
    return (
      <button disabled={disabled} className={classes} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;
