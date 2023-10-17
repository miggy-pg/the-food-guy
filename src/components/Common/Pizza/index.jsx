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

  const base = `w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col ${
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
    <div className="flex w-full flex-col bg-yellow-500 p-6 md:w-1/3 xl:w-1/4">
      <a href="#">
        <img
          className="hover:grow hover:shadow-lg"
          src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
        />
        <div className="flex items-center justify-between pt-3">
          <p className="">Product Name</p>
          <svg
            className="h-6 w-6 fill-current text-gray-500 hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
          </svg>
        </div>
        <p className="pt-1 text-gray-900">£9.99</p>
      </a>
    </div>
  );
}

//  <div className={styles[type]}>
//    <div
//      onClick={handleAddToCart}
//      className="mt-2 flex h-11 w-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-md bg-cyan-700 "
//    >
//      {<FaCartShopping className="fill-white" />}
//    </div>
//    <Link to={`/menu/${id}`} className="w-3/5">
//      <a href="#">
//        <img
//          className="hover:grow hover:shadow-lg"
//          src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
//        />
//        <div className="flex items-center justify-between pt-3">
//          <p className="">Product Name</p>
//          <svg
//            className="h-6 w-6 fill-current text-gray-500 hover:text-black"
//            xmlns="http://www.w3.org/2000/svg"
//            viewBox="0 0 24 24"
//          >
//            <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
//          </svg>
//        </div>
//        <p className="pt-1 text-gray-900">£9.99</p>
//      </a>
//      {/* <h4 className="flex w-full justify-between text-xl font-medium text-gray-800 dark:text-gray-200">
//           <span>{name}</span>
//           <span className="text-primary font-bold">P{price}</span>
//         </h4>
//         <p className="mt-1 text-gray-500 dark:text-gray-400">
//           {truncate(description, 60)}
//         </p> */}
//    </Link>
//    <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
//    {currentQuantity > 0 && <DeleteItem id={id} />}
//  </div>;
