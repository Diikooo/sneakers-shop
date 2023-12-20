import React from "react";

const Footer = () => {
  return (
    <footer className="footer container-fluid bg-gray mt-4 p-3">
      <div className="links-footer d-flex justify-content-center">
        <a href="https://youtube.com"><i className="fa-brands fa-youtube"></i></a>
        <a href="https://telegram.org"><i className="fa-brands fa-telegram"></i></a>
        <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://tiktok.com"><i className="fa-brands fa-tiktok"></i></a>
      </div>
      <hr className="text-light" />
      <div className="row m-4 ">
        <div className="col-sm-4 d-flex flex-column mb-3">
          <a href="#" className="text-white">
            CATALOG
          </a>
          <a href="#" className="text-white">
            STOCK
          </a>
          <a href="#" className="text-white">
            BLOG
          </a>
          <a href="#" className="text-white">
            SERVICES
          </a>
        </div>
        <div className="col-sm-4 d-flex flex-column mb-3">
          <a href="#" className="text-white">
            Company
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contacts
          </a>
          <a href="#" className="text-white">
            Vacancies
          </a>
        </div>
        <div className="col-sm-4 d-flex flex-column">
          <a href="#" className="text-white">
            FAQ
          </a>
          <a href="#" className="text-white">
            Delivery
          </a>
          <a href="#" className="text-white">
            Feedback
          </a>
          <a href="#" className="text-white">
            Custom
          </a>
        </div>
      </div>
      <hr className="text-light" />
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="https://img.freepik.com/premium-vector/sneakers-logo_25327-267.jpg?w=1380"
          alt="Logo"
          width="50"
          height="50"
          className="img-logo rounded-circle me-3"
        />
        <p className="text-light fs-5">2023 © StreetSneakChic</p>
      </div>
    </footer>
  );
};

export default Footer;
