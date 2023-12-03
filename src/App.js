import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";


function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://65622e78dcd355c08324a47c.mockapi.io/cart"
      );
      const favoritesResponse = await axios.get(
        "https://656b0e17dac3630cf7279e0b.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://65622e78dcd355c08324a47c.mockapi.io/items"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://65622e78dcd355c08324a47c.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        // axios.post("https://65622e78dcd355c08324a47c.mockapi.io/cart", obj);
        // setCartItems((prev) => [...prev, obj]);
        axios.post("https://65622e78dcd355c08324a47c.mockapi.io/cart", obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
      }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65622e78dcd355c08324a47c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddtoFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://656b0e17dac3630cf7279e0b.mockapi.io/favorites/${obj.id}`
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
    }
  };

  // const onAddtoFavorite = (obj) => {
  //   const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
  //   const isAlreadyInFavorites = favoritesFromStorage.some(item => item.id === obj.id);
  //   if (!isAlreadyInFavorites) {
  //     const newFavorites = [...favoritesFromStorage, obj];
  //     localStorage.setItem('favorites', JSON.stringify(newFavorites));
  //     setFavorites(newFavorites);
  //   }
  // };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider value={ { items, cartItems, favorites } }>
      <div className="wrapper clear">
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
        <Route
          path="/favorites"
          element={
            <Favorites  onAddtoFavorite={onAddtoFavorite} />
          }
        />
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
