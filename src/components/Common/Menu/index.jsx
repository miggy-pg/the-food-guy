import { Link, NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="hidden text-center lg:flex lg:items-center">
      <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
        <li className="nav__item mr-3">
          <NavLink
            className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item mr-3">
          <NavLink
            className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="nav__item mr-3">
          <NavLink
            className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li className="nav__item mr-3">
          <NavLink
            to="/contact"
            className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Link to="/cart" className="hover:text-blue-9 00 text-sm text-blue-900">
        Open cart &rarr;
      </Link>
    </div>
  );
}
