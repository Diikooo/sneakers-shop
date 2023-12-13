import React from 'react';


const LocationModal = () => {
  return (
    <>
      <div className="btn me-auto" data-bs-toggle="modal" data-bs-target="#location">
        <a href="#" className="fs-5 text-decoration-none  p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-geo-alt-fill bg-outline-aqua-blue rounded-5" viewBox="0 0 16 16" style={{ padding: "13px" }}>
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          Almaty
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </a>
      </div>

      <div className="modal fade" id="location" tabIndex="-1" aria-labelledby="locationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3 fw-bold" id="locationLabel">
                Change order details
              </h1>
              <button type="button" className="custom-close-btn rounded-5" data-bs-dismiss="modal" aria-label="Close">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <h1 className="fs-4">Where to?</h1>
              <nav className="navbar">
                <div className="container-fluid">
                  <div className="navbar-brand fs-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cursor-fill px-2 bg-grey rounded-circle me-3" viewBox="0 0 16 16">
                      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                    </svg>
                    Almaty
                  </div>

                  <div className="d-flex">
                    <button className="btn btn-light" type="submit">
                      Add address
                    </button>
                  </div>
                </div>
              </nav>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light  w-100 fs-4" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationModal;
