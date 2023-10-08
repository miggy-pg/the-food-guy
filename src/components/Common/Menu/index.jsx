import { NavLink } from "react-router-dom";

export default function Menu() {
  // <div className="navbar-collapse collapse">
  /* <div className="navbar-nav ms-auto py-0 pe-4"> */
  // flex-basis:100%;flex-grow:1;align-items:center
  // nav-link
  // display:block;padding:.5rem 1rem;color:#FEA116;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out
  return (
    <div className="grow basis-full items-center ">
      <div className="mb-0 ml-auto flex list-none flex-col py-0 pe-4 pl-0">
        <NavLink
          className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
          to="/menu"
        >
          Menu
        </NavLink>
        <NavLink
          to="/contact"
          className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
        >
          Contact
        </NavLink>
      </div>
      <NavLink to="/cart">Book A Food</NavLink>
    </div>
  );
}
