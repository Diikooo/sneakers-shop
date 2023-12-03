import React from 'react';
import Card from '../components/Card'
import AppContext from '../context';


function Favorites({onAddtoFavorite}) {
  const { favorites} = React.useContext(AppContext);


  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-30">
        <h1 className=""> My Favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
      {favorites.map((item, index) => (
            <Card
              key={index} 
              favorited={true}
              onFavorite={onAddtoFavorite}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
