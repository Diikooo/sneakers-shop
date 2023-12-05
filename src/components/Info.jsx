import React from 'react'
import AppContext from '../context';

 const Info = ( { title, image, description} ) => {

    const {setCartOpened} = React.useContext(AppContext);

  return (
    <div className="cart-empty d-flex align-center justify-center flex-column flex">
            <img
              src={image}
              width={120}
              
              className="mb-20"
              alt="Empty"
            />
            <h2>{title}</h2>
            <p className="opacity-6">
             {description}
            </p>
            <button onClick={() => setCartOpened(false)} className="greenBtn">
              <img src="img/arrow.svg" alt="Arrow" className="mr-10 arrow" />
              Return back
            </button>
          </div>
  )
}

export default Info;
