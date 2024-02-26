import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";




const PhotoList = (props) => {
  const generatePhotoListItems = function(arr) {
  return arr.map((photo) => (
    <PhotoListItem key={photo.id} photo={photo} toggleFav={props.toggleFav} favPhotos={props.favPhotos} toggleModalViewInfo={props.toggleModalViewInfo} modalViewInfo={props.toggleModalViewInfo}/>
  ))
  };
  
  return (
    <ul className="photo-list">
      {generatePhotoListItems(props.photos)}
    </ul>
  );
};

export default PhotoList;
