import React from "react";
import { useState } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {


  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        displayLikeBadge={props.displayLikeBadge}
      />
      <PhotoList
        photos={props.photos}
        toggleFav={props.toggleFav}
        favPhotos={props.favPhotos}
        toggleModalViewInfo={props.toggleModalViewInfo}
        modalViewInfo={props.modalViewInfo}
        setModalViewInfo={props.setModalViewInfo}
      />
    </div>
  );
};
export default HomeRoute;
