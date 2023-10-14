import { Link } from "react-router-dom";
import { FaCartShopping, FaCircleUser } from "react-icons/fa6";
import { MenuItem } from "./MenuItem";
import { useSelector } from "react-redux";
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../../../redux/cart/cartSlice";

export default function Menu() {
  const user = useSelector((state) => state.user);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  const menu = [
    {
      name: "Home",
      path: "/",
    },
  ];

  return (
    <div className="hidden text-center lg:flex lg:items-center">
      <ul className="flex-auto list-none items-center justify-end pt-6 lg:flex lg:pt-0">
        {menu.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            name={menuItem.name}
            path={menuItem.path}
          />
        ))}
        <Link to="/cart" className="text-blue-900 hover:text-blue-900">
          <span className="flex items-center">
            {totalCartQuantity}

            <FaCartShopping />
            {totalCartPrice}
          </span>
        </Link>

        {user.username ? (
          <li className="submenu-item group relative mt-0 flex items-center">
            <span className="ml-9 text-blue-900 hover:text-blue-900">
              {user.username}
            </span>
          </li>
        ) : (
          <li className="submenu-item group relative mt-0 flex items-center">
            <Link to="/cart" className="ml-9 text-blue-900 hover:text-blue-900">
              <FaCircleUser />
            </Link>
            <div className="submenu relative ml-3 hidden w-[11rem] rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
              <a
                href="about.html"
                className="text-body-color hover:text-primary block rounded px-4 py-[10px] text-sm"
              >
                My Account
              </a>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
