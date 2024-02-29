import { useState, useEffect } from "react";

import axios from "axios";

import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          "https://656b0e17dac3630cf7279e0b.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Error when requesting orders');
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-30">
        <h1 className=""> My orders</h1>
      </div>
      <div className="row d-flex justify-content-center">
        {(isLoading ? [...Array(8)] : currentOrders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
      {orders.length > itemsPerPage && (
        <nav className="pagination justify-content-center">
          {[...Array(Math.ceil(orders.length / itemsPerPage))].map((_, index) => (
            <button
              key={index}
              className={`btn px-3 py-2 mx-2 ${currentPage === index + 1 ? "btn-secondary" : ""}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

export default Orders;
