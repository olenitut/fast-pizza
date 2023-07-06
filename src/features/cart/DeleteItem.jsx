import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

import Button from "../../ui/Button";

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(id));
  };
  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteItem;
