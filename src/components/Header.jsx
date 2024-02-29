import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import LocationModal from "./LocationModal";
import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
  const { cartItems, totalPrice } = useCart();

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <header className="header">
  



       <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container-fluid">
      <Link className="navbar-brand me-0" to="/">
            <div className="navbar-brand d-flex align-items-center">
              <img
                src="https://img.freepik.com/premium-vector/sneakers-logo_25327-267.jpg?w=1380"
                alt="Logo"
                width="50"
                height="50"
                className="img-logo rounded-circle"
              />
              <div className="logo-title">
                <h4 className="fw-bold m-0 fs-5 fs-md-3 fs-lg-1 ">StreetSneakChic</h4>
                <p className="opacity-5 fs-5 d-none d-sm-block fw-light">
                  Step up your sole game!
                </p>
              </div>
            </div>
          </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 align-items-center">
              <li className="nav-item">
                <LocationModal />
              </li>
              <li className="nav-item">
                <button
                  className="btn px-0 border-none me-2"
                  onClick={props.onClickCart}
                >
                  <p className=" m-0 ms-1 d-flex align-center">
                    <i className="fa-solid fa-cart-plus fs-3 position-relative" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Selected sneakers">
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark fs-small">
                        {cartItems.length > 0 ? cartItems.length : ''}
                      </span>
                    </i>
                    <span className="me-0 ms-2">
                      {totalPrice > 0 ? `${totalPrice} ₸` : ""}
                    </span>
                  </p>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn py-2 me-2">
                  <Link to="/favorites">
                    <i className="fa-solid fa-heart fs-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Favorites"></i>
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn py-2 me-2">
                  <Link to="/orders">
                    {" "}
                    <i className="fa-solid fa-clipboard-check fs-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Orders"></i>
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn py-2 me-2">
                  <Link to="/user">
                    <i className="fa-solid fa-user fs-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Profile"></i>
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn py-2 me-2">
                  <Link to="/about">
                    <i className="fa-solid fa-circle-info fs-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="About us"></i>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    </header>
  );
}

export default Header;
