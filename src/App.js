import React, { useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  useEffect(() => {
    axios
      .get("https://65622e78dcd355c08324a47c.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://65622e78dcd355c08324a47c.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });

      const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(favoritesFromStorage);
    
  }, []);

  const onAddToCart = (obj) => {
    // sdelta proverku esli est uje v baskete to nado udalyat ili ne dobavlyat
      axios.post("https://65622e78dcd355c08324a47c.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
  };


  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://65622e78dcd355c08324a47c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  // const onAddToFavoritee = (obj) => {
  //   // sdelta proverku esli est uje v baskete to nado udalyat ili ne dobavlyat
  //   axios.post("https://65622e78dcd355c08324a47c.mockapi.io/favorites", obj);
  //   setFavorites((prev) => [...prev, obj]);
  // };

  const onAddtoFavorite = (obj) => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
  
    const isAlreadyInFavorites = favoritesFromStorage.some(item => item.id === obj.id);
  
    if (!isAlreadyInFavorites) {
      const newFavorites = [...favoritesFromStorage, obj];
  
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
  
      setFavorites(newFavorites);
    }
  };


  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          items={cartItems}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-30">
          <h1 className="">
            {searchValue ? `Search by: "${searchValue}"` : "All sneakers "}
          </h1>
          <div className="searchBlock d-flex align-center">
            <img src="/img/search.svg" alt="search"/>
            {searchValue && (
              <img
                onClick={() => {
                  setSearchValue("");
                }}
                className="cu-p clear"
                src="/img/button-close.svg"
                alt="Clear"
                width={25}
                height={25}
              />
            )}
            <input
              onChange={onChangeSearch}
              value={searchValue}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddtoFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
