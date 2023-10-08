import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function NavBar() {
  return (
    // position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem
    <>
      {/* navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 */}
      {/* // flex-wrap:nowrap;justify-content:flex-start */}
      <nav className="relative z-[12] flex flex-wrap items-center justify-between px-4 py-3 pb-2 pt-2 opacity-90 lg:flex-nowrap lg:justify-start lg:px-5 lg:py-0">
        <Link to="/" className="mr-4 whitespace-nowrap py-1.5 text-lg">
          <h1>
            <i className="fa fa-utensils me-3"></i>Restoran
          </h1>
          {/* <img src="img/logo.png" alt="Logo" /> */}
        </Link>
        <Menu />
      </nav>
      {/* <div>
        <div>
          <div>
            <div>
              <h1>
                Enjoy Our
                <br />
                Delicious Meal
              </h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link
                to="/cart"
                className="hover:text-blue-9 00 text-sm text-blue-900"
              >
                Open cart &rarr;
              </Link>
            </div>
            <div>
              <img src="img/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
