import { useState } from "react";
import Info from "./Info";
import React from "react";
import axios from "axios";
import { useCart } from "../hooks/useCart";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Drawer({ onClose, onRemove, items = [] }) {
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, setCartItems, totalPrice} = useCart();

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://656b0e17dac3630cf7279e0b.mockapi.io/orders",
        {
          items: cartItems,
        }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://65622e78dcd355c08324a47c.mockapi.io/cart/" + item.id
        );
        await delay();
      }
    } catch (error) {
      alert("Error when creating an order :(");
    }
    setIsLoading(false);
  };

  // const onClickOrder = async () => {
  //   try {
  //     setIsLoading(true);
  //     const { data } = await axios.post(
  //       "https://656b0e17dac3630cf7279e0b.mockapi.io/orders",
  //       {
  //         items: cartItems,
  //       }
  //     );

  //     setOrderId(data.id);
  //     setIsOrderComplete(true);
  //     setCartItems([]);

  //     for (let i = 0; i < cartItems.length; i++) {
  //       const item = cartItems[i];
  //       await axios.put('https://65622e78dcd355c08324a47c.mockapi.io/cart' + item.id);
  //       await delay();
  //     }

  //   } catch (error) {
  //     alert("Error when creating an order :(");
  //   }
  //   setIsLoading(false);
  // };

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
                <div key={obj.id} className="cartItem d-flex align-center ">
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
                  <b>{totalPrice} ₸</b>
                </li>

                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{totalPrice * 0.05} ₸</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenBtn"
              >
                Check out <img src="/img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Order completed!" : "Cart is empty"}
            description={
              isOrderComplete
                ? `Your order #${orderId}  will be send soon.`
                : "Add at least 1 pair of sneakers to order"
            }
            image={isOrderComplete ? "img/ordered.png" : "img/empty-cart.png"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
