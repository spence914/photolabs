import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {

  
  function filterPhotosByIds(photoObjects, ids) {
    return photoObjects.filter(photo => ids.includes(photo.id));
  }
  const favPhotoObjects = filterPhotosByIds(props.photos, props.favPhotos)

  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={() => props.updateSelectedTopic(null)}
      >
        PhotoLabs
      </span>
      <TopicList
        topics={props.topics}
        updateSelectedTopic={props.updateSelectedTopic}
      />
      <span onClick={() => {props.updatePhotoData(favPhotoObjects)}}>
        <FavBadge
          displayLikeBadge={props.displayLikeBadge}
          selected={true}
          favPhotos={props.favPhotos}
          updateSelectedTopic={props.updateSelectedTopic}
        />
      </span>
    </div>
  );
};

export default TopNavigation;
