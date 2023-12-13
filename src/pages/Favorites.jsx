import React from "react";
import Card from "../components/Card";
import AppContext from "../context";
import Info from "../components/Info";

function Favorites() {
  const { favorites, onAddtoFavorite } = React.useContext(AppContext);

  return favorites.length > 0 ? (
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
  ) : (
    <Info
      title={"There are no bookmarks :("}
      description={"You haven't added anything to your bookmarks"}
      image={"img/sad_emoji.png"}
    />
  );
}

export default Favorites;
