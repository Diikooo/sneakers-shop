import React from "react";
import AppContext from "../context";
import { useNavigate } from "react-router-dom";


const Info = ({ title, image, description }) => {

  const { setCartOpened } = React.useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="cart-empty d-flex align-center justify-center flex-column p-md-2 p-lg-4 m-md-2 m-lg-4">
      <img src={image} width={120} className="mb-20 img-fluid" alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => { 
        setCartOpened(false);
        navigate('/');
       } 
        } className="greenBtn">
        <img src="img/arrow.svg" alt="Arrow" className="mr-10 arrow" />
        Return back
      </button>
    </div>
  );
};

export default Info;
