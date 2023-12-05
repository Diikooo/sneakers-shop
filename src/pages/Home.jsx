import React from "react";
import Card from "../components/Card";



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
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-30">
          <h1 className="">
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
        <div className="d-flex flex-wrap">{renderItems()}</div>
      </div>
    );
  }
  
  export default Home;
  


// function Home({
//   items,
//   cartItems,
//   searchValue,
//   setSearchValue,
//   onChangeSearch,
//   onAddtoFavorite,
//   onAddToCart,
//   isLoading,
// }) {
//   const renderItems = () => {
//     const filteredItems = items.filter((item) =>
//       item.title.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
//       <Card
//         key={index}
//         onFavorite={(obj) => onAddtoFavorite(obj)}
//         onPlus={(obj) => onAddToCart(obj)}
//         added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
//         loading={isLoading}
//         {...item}
//       />
//     ));
//   };

//   return (
//     <div className="content p-40">
//       <div className="d-flex justify-between align-center mb-30">
//         <h1 className="">
//           {searchValue ? `Search by: "${searchValue}"` : "All sneakers "}
//         </h1>
//         <div className="searchBlock d-flex align-center">
//           <img src="/img/search.svg" alt="search" />
//           {searchValue && (
//             <img
//               onClick={() => {
//                 setSearchValue("");
//               }}
//               className="cu-p clear"
//               src="/img/button-close.svg"
//               alt="Clear"
//               width={25}
//               height={25}
//             />
//           )}
//           <input
//             onChange={onChangeSearch}
//             value={searchValue}
//             placeholder="Search..."
//           />
//         </div>
//       </div>
//       <div className="d-flex flex-wrap">{renderItems()}</div>
//     </div>
//   );
// }

// export default Home;
