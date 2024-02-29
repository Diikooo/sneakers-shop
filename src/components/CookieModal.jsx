import { useState } from "react";

function CookieModal() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title text-secondary fs-1 fw-bold"
              id="staticBackdropLabel"
            >
              <i className="fa-solid fa-cookie-bite display-4 mx-3"></i>
              Cookies Consent
            </h1>
          </div>
          <div className="modal-body p-3">
            <p className="text-dark fs-2">
              We use cookies because without them, the internet would break.{" "}
              <a
                href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
                className="text-decoration-underline text-light fw-bold btn btn-secondary"
              >
                Read more
              </a>
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary fs-3"
              onClick={handleClose}
            >
              Okaaaay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieModal;
