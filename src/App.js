import React, {useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import AppContext from "./context";

import Drawer from "./components/Drawer";
import Header from "./components/Header";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [show, setShow] = React.useState(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://65622e78dcd355c08324a47c.mockapi.io/cart"),
            axios.get("https://656b0e17dac3630cf7279e0b.mockapi.io/favorites"),
            axios.get("https://65622e78dcd355c08324a47c.mockapi.io/items"),
          ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Error when requesting data :(");
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://65622e78dcd355c08324a47c.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://65622e78dcd355c08324a47c.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Could not to add to cart");
      console.log(error);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      axios.delete(`https://65622e78dcd355c08324a47c.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Error when deleting data from cart");
      console.log(error);
    }
  };

  const onAddtoFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://656b0e17dac3630cf7279e0b.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://656b0e17dac3630cf7279e0b.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);  
      }
    } catch (error) {
      alert("could not add to favorites");
      console.log(error);
    }
  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddtoFavorite,
        setCartOpened,
        setCartItems,
        onAddToCart,
      }}
    >
      <div className="wrapper clear min-vh-100">
        
        {/* Cookies Modal */}
        {/* <div
          className={`modal ${show ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: show ? "block" : "none" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title text-secondary fs-1 fw-bold"
                  id="staticBackdropLabel"
                >
                  <i className="fa-solid fa-cookie-bite text-secondary display-4 mx-3"></i>
                  Cookies Consent
                </h1>
              </div>
              <div className="modal-body p-3">
                <p className="text-dark fs-2">
                  We use cookies because without them, the internet would break.{" "}
                  <a
                    href="#"
                    className="text-decoration-underline text-primary"
                  >
                    Read more
                  </a>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary fs-3"
                  onClick={handleClose}
                >
                  Okaaaay
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {cartOpened && (
          <Drawer
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
            items={cartItems}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearch={onChangeSearch}
                onAddtoFavorite={onAddtoFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
        </Routes>
          
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
