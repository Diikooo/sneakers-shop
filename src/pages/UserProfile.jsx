import React from "react";

const UserProfile = () => {

  const [email, setEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted with email`);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };


  return (
    <div className="container d-flex justify-content-center p-4">
      <div className="row flex-column p-1 p-md-2 p-lg-4 rounded-4 shadow-lg form-container ">
        <h2 className="text-center mb-4 fs-3 fw-semibold">Enter your email</h2>
        <form action="" onSubmit={handleSubmit}>
          <label className="fs-4" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="someone@gmail.com"
            className="form-control p-3"
            value={email}
            onChange={handleChange}
            required
          />
          <button className=" btn mt-3 p-3 w-100 btn-primary" type="submit">
            Sign up or sign in
          </button>
        </form>
        <div class="text-center my-3 d-flex justify-content-between">
          <hr class="d-inline-block" style={{"width": "50%"}} />
          <span class="mx-2" style={{"font-size":"18px", "color": "#555"}}>
            or
          </span>
          <hr class="d-inline-block" style={{"width": "50%" }}/>
        </div>
        <p className="fs-5 mt-1 text-center">
          {" "}
          <span>Continue with:</span>{" "}
          <a
            href=""
            className="text-primary text-decoration-underline"
            data-bs-toggle="modal"
            data-bs-target="#login"
          >
            {" "}
            Social Accounts
          </a>
        </p>
        <p className="text-center text-muted mb-1 fs-8">By proceeding, you agree to the <a href="#" className="text-decoration-underline">Terms of Service</a> and <a href="#" className="text-decoration-underline">Privacy Notice.</a></p>
      </div>
      <div
        className="modal fade"
        id="login"
        tabIndex="-1"
        aria-labelledby="locationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className=""></div>
              <button
                type="button"
                className="custom-close-btn rounded-5"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <h1 className="fs-2 fw-bold">Welcome!</h1>
              <p className="fs-4">
                We're glad to have you in our website. Log in below with:{" "}
              </p>
              <nav className="navbar">
                <div className="container-fluid">
                  <div className="btn google-form w-100 rounded-2">
                    <a className="navbar-brand " href="#">
                      <img
                        src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227"
                        alt="Logo"
                        width="30"
                        height="27"
                        className="d-inline-block align-text-top me-2"
                      />
                      Continue with Google
                    </a>
                  </div>

                  <div className="btn btn-primary meta-form w-100 rounded-2">
                    <a className="navbar-brand text-light " href="#">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                        alt="Logo"
                        width="30"
                        height="27"
                        className="d-inline-block align-text-top me-2"
                      />
                      Continue with Facebook
                    </a>
                  </div>

                  <div className="apple-form  w-100 rounded-2">
                    <a className="navbar-brand text-light " href="#">
                      <img
                        src="https://1000logos.net/wp-content/uploads/2016/10/apple-emblem.jpg"
                        alt="Logo"
                        width="30"
                        height="27"
                        className="d-inline-block align-text-top me-2"
                      />
                      Continue with Apple
                    </a>
                  </div>
                </div>
              </nav>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary w-100 fs-4 py-3"
                  data-bs-dismiss="modal"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
