import React from "react";
import PhotoFavButton from "components/PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


const clickHandler = () => {
  props.toggleModalViewInfo();

  props.modalViewInfo.photo = props.photo;

  console.log(props.modalViewInfo.photo)
}
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFav={props.toggleFav} id={props.photo.id} favPhotos={props.favPhotos} />
      <img className="photo-list__image" src={props.photo.urls.regular} onClick={clickHandler} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} />
        <div className="photo-list__user-info">
          <h2>{props.photo.username}</h2>
          <p className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
