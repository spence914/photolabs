import React from "react";
import PhotoFavButton from "components/PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


  const clickHandler = () => {
    props.updateModalViewInfo(props.photo);
    props.toggleModalView();
      window.scrollTo({
    top: 150,
    left: 0,
    behavior: 'smooth',
  });
  }
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFav={props.toggleFav} id={props.photo.id} favPhotos={props.favPhotos} />
      <img className="photo-list__image" src={props.photo.urls.regular} onClick={clickHandler} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} />
        <div className="photo-list__user-info">
          <p>{props.photo.user.name}</p>
          <div className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
