import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = (props) => {
  console.log(props.modalViewInfo);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={props.toggleModalViewInfo}
      >
        <img src={closeSymbol} alt="close symbol" />
        <img
          src={props.modalViewInfo.photo.urls.regular}
          className="photo-details-modal__image"
        />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
