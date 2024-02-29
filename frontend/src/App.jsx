import React, { useState } from "react";

import useApplicationData from "hooks/useApplicationData";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import photos from "mocks/photos";
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {


const {
  state: { modalViewInfo, favPhotos },
  onClosePhotoDetailsModal,
  setPhotoSelected,
  udpateToFavPhotoIds,
  displayLikeBadge,
} = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        updateModalViewInfo={setPhotoSelected}
        modalViewInfo={modalViewInfo}
        toggleModalView={onClosePhotoDetailsModal}
        toggleFav={udpateToFavPhotoIds}
        favPhotos={favPhotos}
        displayLikeBadge={displayLikeBadge}
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
