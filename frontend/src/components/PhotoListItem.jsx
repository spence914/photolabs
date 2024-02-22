import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.photo.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.profile} />
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
