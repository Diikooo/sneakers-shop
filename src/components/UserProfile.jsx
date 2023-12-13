import React from "react";


const UserProfile = () => {
  return (
    <div className="container d-flex justify-content-center p-4">
      <div className="row flex-column  p-4 rounded-4 shadow-lg ">
        <h2 className="mb-4 fs-1 fw-semibold">Create a profile</h2>
        <form action="">
          <label className="fs-4" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="someone@gmail.com"
            className="form-control mb-3"
            required
          />
          <label className="fs-4" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="form-control"
            required
          />
          <button className="btn mt-4 w-100 btn-secondary" type="submit">
            Create a profile
          </button>
        </form>
        <p className="fs-5 mt-1">
          {" "}
          <span>Already registered? </span>{" "}
          <a
            href=""
            className="text-primary text-decoration-underline"
            data-bs-toggle="modal"
            data-bs-target="#login"
          >
            {" "}
            Log in
          </a>
        </p>
      </div>
      <div className="modal fade" id="login" tabindex="-1" aria-labelledby="locationModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className=""></div>
                        <button type="button" className="custom-close-btn rounded-5" data-bs-dismiss="modal"
                            aria-label="Close">
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <h1 className="fs-2 fw-bold">Welcome!</h1>
                        <p className="fs-4">We're glad to have you in our website. Log in below with: </p>
                        <nav className="navbar">
                            <div className="container-fluid">
                                <div className="btn google-form w-100 rounded-2">
                                    <a className="navbar-brand " href="#">
                                        <img src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227"
                                            alt="Logo" width="30" height="27" className="d-inline-block align-text-top me-2"/>
                                        Continue with Google
                                    </a>
                                </div>

                                <div className="btn btn-primary meta-form w-100 rounded-2">
                                    <a className="navbar-brand text-light " href="#">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                                            alt="Logo" width="30" height="27" className="d-inline-block align-text-top me-2"/>
                                        Continue with Facebook
                                    </a>
                                </div>

                                <div className="apple-form  w-100 rounded-2">
                                    <a className="navbar-brand text-light " href="#">
                                        <img src="https://1000logos.net/wp-content/uploads/2016/10/apple-emblem.jpg"
                                            alt="Logo" width="30" height="27" className="d-inline-block align-text-top me-2"/>
                                        Continue with Apple
                                    </a>
                                </div>


                            </div>
                        </nav>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary w-100 fs-4 py-3"
                                data-bs-dismiss="modal">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default UserProfile;
