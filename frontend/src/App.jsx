import React, { useState } from "react";

import useApplicationData from "hooks/useApplicationData";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";



// Note: Rendering a single component to build components in isolation
const App = () => {


const {
  state: { modalViewInfo, favPhotos, photoData, topicData },
  onClosePhotoDetailsModal,
  setPhotoSelected,
  udpateToFavPhotoIds,
  displayLikeBadge,
  updateSelectedTopic,
} = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        updateModalViewInfo={setPhotoSelected}
        modalViewInfo={modalViewInfo}
        toggleModalView={onClosePhotoDetailsModal}
        toggleFav={udpateToFavPhotoIds}
        favPhotos={favPhotos}
        displayLikeBadge={displayLikeBadge}
        updateSelectedTopic={updateSelectedTopic}
      />
      {modalViewInfo.view && (
        <PhotoDetailsModal
        
          modalViewInfo={modalViewInfo}
          toggleFav={udpateToFavPhotoIds}
          favPhotos={favPhotos}
          toggleModalView={onClosePhotoDetailsModal}
          updateModalViewInfo={setPhotoSelected}
        />
      )}
    </div>
  );
};

export default App;
