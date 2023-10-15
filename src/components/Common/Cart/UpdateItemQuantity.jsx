import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../../redux/cart/cartSlice";

export default function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div>
      {currentQuantity}
      <button onClick={() => dispatch(increaseItemQuantity(id))}>
        Increase
      </button>
      <button onClick={() => dispatch(decreaseItemQuantity(id))}>
        Decrease
      </button>
    </div>
  );
}
