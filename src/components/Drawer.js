
function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div
        className="drawer"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2 className="mb-30">
          Cart
          <img
            className="removeBtn cu-p"
            src="/img/button-close.svg"
            alt="close"
            width={40}
            height={40}
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <div className=" cart-cards d-flex flex-column justify-between">
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center ">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} tenge.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/button-close.svg"
                    alt="Close button"
                    width={30}
                    height={30}
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock mt-20">
              <ul>
                <li>
                  <span>Total: </span>
                  <div></div>
                  <b>24 500 tg</b>
                </li>

                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>1072 tenge</b>
                </li>
              </ul>
              <button className="greenBtn">
                Check out <img src="/img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-empty d-flex align-center justify-center flex-column flex">
            <img
              src="img/empty-cart.png"
              width={120}
              height={120}
              className="mb-20"
              alt="Empty"
            />
            <h2>Cart is empty</h2>
            <p className="opacity-6">
              Add at least 1 pair of sneakers to order
            </p>
            <button onClick={onClose} className="greenBtn">
              <img src="img/arrow.svg" alt="Arrow" className="mr-10 arrow" />
              Return back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
