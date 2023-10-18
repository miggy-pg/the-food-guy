import { NavLink } from "react-router-dom";

export function MenuItem({ name, path }) {
  return (
    <li>
      <NavLink
        className={`w-full rounded-md px-3 py-2 text-white hover:bg-orange-700 hover:text-white focus:bg-orange-700 focus:text-indigo-500 focus:outline-none active:bg-orange-700`}
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
}
