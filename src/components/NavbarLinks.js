// NavbarLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLinks = ({ onClickCart, totalPrice }) => {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <li className="nav-item mx-2 cu-p" >
            <button className="btn border-none me-3 fs-5" onClick={onClickCart}>
              <p className="d-flex align-center">
                <img
                  className="me-0"
                  src="img/cart.svg"
                  width={25}
                  height={25}
                  alt="Cart"
                />
                <span className="me-0 ms-2">
                  {totalPrice > 0 ? `${totalPrice} ₸` : ""}
                </span>
              </p>
            </button>
          </li>
          <li className=" nav-item me-2 cu-p">
            <Link to="/favorites">
              <img
                src="img/ffsdavorite.svg"
                className="me-3 ms-2"
                width={25}
                height={25}
                alt="Favorite"
              />
            </Link>
          </li>
          <li className="nav-item mr-10 cu-p">
            <Link to="/orders">
              {" "}
              <img src="img/orders.svg" width={25} height={25} alt="Orders" />
            </Link>
          </li>
          <li className="nav-item mr-10 cu-p">
            <Link to="/user">
              {" "}
              <img src="img/user.svg" width={25} height={25} alt="User" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarLinks;
