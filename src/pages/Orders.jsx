import React, { useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";

function Orders() {
  const { onAddtoFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://656b0e17dac3630cf7279e0b.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Error when requesting orders')
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-30">
        <h1 className=""> My orders</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
