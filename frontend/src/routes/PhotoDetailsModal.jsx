import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoListItem from "components/PhotoListItem";

const PhotoDetailsModal = (props) => {

  const generateSimilarPhotosList = function (similarPhotos) {
    const similarPhotosArray = Object.values(similarPhotos);

    return similarPhotosArray.map((photo) => (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        toggleFav={props.toggleFav}
        favPhotos={props.favPhotos}
        updateModalViewInfo={props.updateModalViewInfo}
        toggleModalView={props.toggleModalView}
        modalViewInfo={props.modalViewInfo}
      />
    ));
  };

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={props.toggleModalView}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          toggleFav={props.toggleFav}
          id={props.modalViewInfo.photo.id}
          favPhotos={props.favPhotos}
        />
        <img
          src={props.modalViewInfo.photo.urls.full}
          className="photo-details-modal__image "
        />
        <div className="photo-details-modal__photographer-details">
          <img
            src={props.modalViewInfo.photo.user.profile}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <p>{props.modalViewInfo.photo.user.name}</p>
            <p className="photo-details-modal__photographer-location">
              {props.modalViewInfo.photo.location.city},{" "}
              {props.modalViewInfo.photo.location.country}
            </p>
          </div>
        </div>
        <p className="photo-details-modal__header">Similar Photos</p>
        <ul className="photo-list">
          {generateSimilarPhotosList(props.modalViewInfo.photo.similar_photos)}
        </ul>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
