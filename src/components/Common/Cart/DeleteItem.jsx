import { useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/cart/cartSlice";

export default function DeleteItem({ id }) {
  console.log("DeleteItem: ", id);
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(deleteItem(id))}>Delete</button>;
}
