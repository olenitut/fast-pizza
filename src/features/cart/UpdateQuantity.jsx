import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ id, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 text-l ">
      <button
        className="rounded-full bg-yellow-400 h-6 w-6 flex items-center justify-center"
        onClick={() => dispatch(decreaseQuantity(id))}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        className="rounded-full bg-yellow-400 h-6 w-6 flex items-center justify-center"
        onClick={() => dispatch(increaseQuantity(id))}
      >
        +
      </button>
    </div>
  );
};

export default UpdateItemQuantity;
