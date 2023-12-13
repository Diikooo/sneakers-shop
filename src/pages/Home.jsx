import React from "react";
import Card from "../components/Card";
import MyCarousel from "../components/MyCarousel";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearch,
  onAddtoFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddtoFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="p-2 p-lg-3 pt-40">
      <div className="d-none d-sm-block">
        <MyCarousel />
      </div>

      <div className="mt-4 d-flex flex-column flex-sm-row justify-between align-center mb-30">
        <h1 className="fs-sm-5">
          {searchValue ? `Search by: "${searchValue}"` : "All sneakers "}
        </h1>
        <div className="searchBlock d-flex align-center">
          <img src="/img/search.svg" alt="search" />
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
      <div className=" container-fluid ">
        <div className="row d-flex justify-content-center">{renderItems()}</div>
      </div>
    </div>
  );
}

export default Home;
