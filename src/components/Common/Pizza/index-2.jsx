import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, getCartItemsCount } from "../../../redux/cart/cartSlice";
import DeleteItem from "../Cart/DeleteItem";
import UpdateItemQuantity from "../Cart/UpdateItemQuantity";

function truncate(str, n) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.slice(0, n - 1);
  return subString + " ...";
}

export default function Pizza({
  name,
  description,
  price,
  className,
  type,
  id,
}) {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCartItemsCount(id));

  const base = `mt-3 flex h-[8rem] items-center justify-center space-x-5 bg-white drop-shadow-sm ${
    className ? className : ""
  }`;

  const styles = {
    menu: base,
    cart: base + "mx-auto w-4/5",
  };

  function handleAddToCart(e) {
    const unitPrice = parseFloat(24);
    e.preventDefault();
    const newOrder = {
      id: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newOrder));
  }

  return (
    <div className={styles[type]}>
      <div
        onClick={handleAddToCart}
        className="mt-2 flex h-11 w-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-md bg-cyan-700 "
      >
        {<FaCartShopping className="fill-white" />}
      </div>
      <Link to={`/menu/${id}`} className="w-3/5">
        <h4 className="flex w-full justify-between text-xl font-medium text-gray-800 dark:text-gray-200">
          <span>{name}</span>
          <span className="text-primary font-bold">P{price}</span>
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {truncate(description, 60)}
        </p>
      </Link>
      <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
      {currentQuantity > 0 && <DeleteItem id={id} />}
    </div>
  );
}
