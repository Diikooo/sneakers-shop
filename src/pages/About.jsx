import InfoBlock from "../pages/InfoBlock";

const About = () => {
  return (
    <div className="container-fluid p-1 p-lg-4  m-0">
      <div className="row d-flex about m-1 m-lg-4">
        <h4 className="fs-1 text-body-tertiary m-0">About us</h4>
        <h1 className="">
          Online Store{" "}
          <span className="display-5 title-about">StreetSneakChic</span>
        </h1>
        <h1 className="">
          What does this store represent?{" "}
          <span className="display-5 weird-emoji ">🤔 </span>
        </h1>
        <p className="d-block fs-4 w-75 mb-0">
          StreetSneakChic – where style meets comfort! 👟✨ Exclusive sneakers
          for every occasion – from street style to the party scene. 💃🕺 Our
          designs are art for your feet! 🎨👟 Ignite your urban spirit with
          StreetSneakChic. 🏙️🔥{" "}
          <strong className=""> #StreetSneakChic #YourStyle</strong>
        </p>
      </div>
      <button className="ms-4 d-block mb-4  btn btn-dark rounded-4 px-4 fs-5">
        Details
      </button>

      <div className="d-flex flex-wrap justify-content-center">
        <InfoBlock
          title="Title"
          description="Description"
          gifUrl="/img/gif1.gif"
        />
      </div>

      <h3 className="fs-1 text-center mt-4 mb-2">Our stores</h3>

      <div className="row">
        <div className="col-md-4 text-center mb-2">
          <div class="img-wrapper rounded-3">
            <img
              className="img-fluid img-hover rounded-3 shadow-lg"
              width={400}
              height={400}
              src="https://www.highsnobiety.com/static-assets/dato/1680787440-best-sneaker-websites-upd-03.jpg?fp-x=0.5&fp-y=0.5&fit=crop&auto=compress%2Cformat&cs=srgb&ar=1200%3A800&w=1200"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 text-center  mb-2">
          <div class="img-wrapper rounded-3 ">
            <img
              className="img-fluid img-hover rounded-3 shadow-lg"
              width={400}
              height={400}
              src="https://www.highsnobiety.com/static-assets/dato/1680787343-best-sneaker-websites-upd-01.jpg?fp-x=0.5&fp-y=0.5&fit=crop&auto=compress%2Cformat&cs=srgb&ar=1200%3A800&w=1200"
              alt=""
            />
          </div>
        </div>

        <div className="col-md-4 text-center  mb-2">
          <div class="img-wrapper rounded-3 ">
            <img
              className="img-fluid img-hover rounded-3 shadow-lg"
              width={400}
              height={400}
              src="https://www.highsnobiety.com/static-assets/dato/1680787342-best-sneaker-websites-upd-09.jpg?fp-x=0.5&fp-y=0.5&fit=crop&auto=compress%2Cformat&cs=srgb&ar=1200%3A800&w=1200"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="container mt-4">
        <h2>StreetSneakChic Store Branches in Kazakhstan</h2>

        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th scope="col">№</th>
              <th scope="col">City</th>
              <th scope="col">Branch Address</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Almaty</td>
              <td>Timiryazeva, 38/1</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Nur-Sultan</td>
              <td>Panfilov Street, 128</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Aktau</td>
              <td>Abay Avenue, 51</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
