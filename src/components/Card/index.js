import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

const Card = ({
  id,
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
  loading = false
}) => {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={180}
          height={250}
          viewBox="0 0 180 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="180" height="150" />
          <rect x="0" y="166" rx="5" ry="5" width="180" height="15" />
          <rect x="0" y="184" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="215" rx="5" ry="5" width="80" height="25" />
          <rect x="144" y="205" rx="10" ry="10" width="35" height="35" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
              alt="Favorite"
              width={30}
              height={30}
            />
          </div>
          <img width='90%' height={135} src={imageUrl} alt="" />
          <h5>{title}</h5>

          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price} tenge</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isAdded ? "/img/button-success.svg" : "/img/button-plus.svg"}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
