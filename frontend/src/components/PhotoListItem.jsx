import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.photo.imageSource} />
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
        <img className="photo-list__user-profile" src={props.photo.profile} />
        <p>{props.photo.username}</p>
        <p className="photo-list__user-location">
          {props.photo.location.city}, {props.photo.location.country}
        </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
