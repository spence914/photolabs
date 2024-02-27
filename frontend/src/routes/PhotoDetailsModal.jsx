import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoListItem from "components/PhotoListItem";

const PhotoDetailsModal = (props) => {
  console.log(props.modalViewInfo);

  const generateSimilarPhotosList = function (similarPhotos) {
    const similarPhotosArray = Object.values(similarPhotos);

    return similarPhotosArray.map((photo) => (
      <PhotoListItem
        className="photo-details-modal__images"
        key={photo.id}
        photo={photo}
        toggleFav={props.toggleFav}
        favPhotos={props.favPhotos}
        toggleModalViewInfo={props.toggleModalViewInfo}
        modalViewInfo={props.modalViewInfo}
        setModalViewInfo={props.setModalViewInfo}
      />
    ));
  };

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={props.toggleModalViewInfo}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem
        photo={props.modalViewInfo.photo}
        toggleFav={props.toggleFav}
        favPhotos={props.favPhotos}
        toggleModalViewInfo={props.toggleModalViewInfo}
        modalViewInfo={props.modalViewInfo}
        setModalViewInfo={props.setModalViewInfo}
      />
      <ul>
        {generateSimilarPhotosList(props.modalViewInfo.photo.similar_photos)}
      </ul>
    </div>
  );
};

export default PhotoDetailsModal;
