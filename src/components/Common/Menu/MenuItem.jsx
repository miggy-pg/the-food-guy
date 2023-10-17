import { NavLink } from "react-router-dom";

export function MenuItem({ name, path }) {
  return (
    <li>
      <NavLink
        className="w-full rounded-md px-3 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
}
