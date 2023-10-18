import { Link } from "react-router-dom";
import { FaCartShopping, FaCircleUser } from "react-icons/fa6";
import { MenuItem } from "../Common/Menu/MenuItem";
import { useSelector } from "react-redux";
import {
  // getTotalCartPrice,
  getTotalCartQuantity,
} from "../../redux/cart/cartSlice";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  // const totalCartPrice = useSelector(getTotalCartPrice);

  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Menu",
      path: "/menu",
    },
  ];

  return (
    <div className="w-full bg-[#1c1917]">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-6 lg:justify-between xl:px-0">
        <Link to="/" className="mr-4 whitespace-nowrap py-1.5 text-lg">
          <h1 className="font-white text-white">The Pizza Guy</h1>
          {/* <img src="img/logo.png" alt="Logo" /> */}
        </Link>
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
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
                  <span className="text-xs">{totalCartQuantity}</span>
                </div>
                <FaCartShopping className="fill-white" />
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
                <Link
                  to="/user/login"
                  className="ml-7 text-blue-900 hover:text-blue-900"
                >
                  <FaCircleUser className="fill-white" />
                </Link>
                <div className="submenu relative ml-3 hidden w-[11rem] rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                  <span className="text-body-color hover:text-primary block rounded px-4 py-[10px] text-sm">
                    My Account
                  </span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
