import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import LocationModal from "./LocationModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Header(props) {
  const { cartItems, totalPrice } = useCart();

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg px-md-2 py-md-2 px-lg-3 border-bottom">
        <div className="container-fluid align-items-center justify-content-sm-between">
          <Link className="navbar-brand me-0" to="/">
            <div className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://img.freepik.com/premium-vector/sneakers-logo_25327-267.jpg?w=1380"
                alt="Logo"
                width="100"
                height="100"
                className="img-logo"
              />
              <div className="logo-title">
                <h4 className="fw-bold m-0 ">StreetSneakChic</h4>
                <p className="opacity-5 fs-5 fw-light">
                  Step up your sole game!
                </p>
              </div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <LocationModal />
              </li>
              <li className="nav-item">
                <button
                  className="btn px-0 border-none me-2"
                  onClick={props.onClickCart}
                >
                  <p className=" m-0 d-flex align-center">
                    <i className="fa-solid fa-cart-plus fs-3 position-relative" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Selected sneakers">
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary fs-small">
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
