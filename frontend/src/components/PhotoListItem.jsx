import React from "react";
import PhotoFavButton from "components/PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  // Takes ID of photo passed to it and returns full object from original photos data
  // used in the modal when a similar photo is clicked
const findPhotobyId = function(allPhotos, targetPhoto) {
  const foundPhoto = allPhotos.find(item => item.id === targetPhoto.id)
  return foundPhoto
}

  const clickHandler = () => {
    props.updateModalViewInfo(findPhotobyId(props.photos, props.photo));
    if (!props.modalViewInfo.view) {
      props.toggleModalView();
      window.scrollTo({
        top: 150,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        toggleFav={props.toggleFav}
        id={props.photo.id}
        favPhotos={props.favPhotos}
      />
      <img
        className="photo-list__image"
        src={props.photo.urls.regular}
        onClick={clickHandler}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.user.profile}
        />
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
