import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function NavBar() {
  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        <Link to="/" className="mr-4 whitespace-nowrap py-1.5 text-lg">
          <h1 className="font-bold">The Pizza Guy</h1>
          {/* <img src="img/logo.png" alt="Logo" /> */}
        </Link>
        <Menu />
      </nav>
    </div>
  );
}
