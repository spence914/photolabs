import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

import photos from "mocks/photos";



const PhotoList = () => {
  const generatePhotoListItems = function(arr) {
  return arr.map((photo) => (
    <PhotoListItem key={photo.id} photo={photo} />
  ))
  };
  
  return (
    <ul className="photo-list">
      {generatePhotoListItems(photos)}
    </ul>
  );
};

export default PhotoList;
