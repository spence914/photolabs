import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false)

  const clickHandler = function(){
    console.log("clicked");
    setIsLiked(prevIsLiked => !prevIsLiked)
  }

  const iconClass = isLiked ? "photo-list__fav-icon--liked" : ""

  return (
    <div className={`photo-list__fav-icon ${iconClass}`} onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;