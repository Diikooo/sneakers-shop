import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Drawer from "./Drawer";

function Header(props) {
  return (
    <header className="p-3">
      <nav className="navbar">
        <div className="container-fluid d-flex">
          <Link to="/">
          <div className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/img/logo.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
            <div className="logo-title">
              <h4 className="fw-bold m-0">Sneakers Shop</h4>
              <p className="opacity-5 fs-5 fw-light">
                The store of the ebset sneakers
              </p>
            </div>
          </div>
          </Link>
          <ul className="d-flex align-center">
              <li className="mx-2 cu-p" onClick={props.onClickCart}>
                <p className="d-flex align-center">
                  <img src="img/cart.svg" width={25} height={25} alt="Cart" />
                  250 ₸
                </p>
              </li>
            <li className="mr-10 cu-p">
              <Link to="/favorites">
              <img
                src="img/favorite.svg"
                className="mx-3"
                width={25}
                height={25}
                alt="Favorite"
              />
              </Link>
            </li>
            <li className="mr-10 cu-p">
              {" "}
              <img src="img/user.svg" width={25} height={25} alt="User" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
     
  );
}

export default Header;
