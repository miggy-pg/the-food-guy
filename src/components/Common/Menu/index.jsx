import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { MenuItem } from "./MenuItem";

export default function Menu() {
  const menu = [
    {
      name: "Home",
      path: "/",
    },
  ];

  return (
    <div className="hidden text-center lg:flex lg:items-center">
      <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
        {menu.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            name={menuItem.name}
            path={menuItem.path}
          />
        ))}
      </ul>
      <Link to="/cart" className="text-blue-900 hover:text-blue-900">
        {<FaCartShopping />}
      </Link>
    </div>
  );
}
