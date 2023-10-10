import { NavLink } from "react-router-dom";

export function MenuItem({ name, path }) {
  return (
    <li className="nav__item mr-3">
      <NavLink
        className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
}
