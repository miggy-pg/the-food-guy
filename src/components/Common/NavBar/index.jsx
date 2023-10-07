import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>
            <i className="fa fa-utensils me-3"></i>Restoran
          </h1>
          <img src="img/logo.png" alt="Logo" />
        </Link>
        <button type="button">
          <span></span>
        </button>
        <Menu />
      </nav>

      <div>
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
      </div>
    </div>
  );
}
