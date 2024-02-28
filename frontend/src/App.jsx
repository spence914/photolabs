import React, { useState } from "react";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import photos from "mocks/photos";
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalViewInfo, setModalViewInfo] = useState({ view: false });


  const toggleModalView = () => {
    setModalViewInfo(prevState => ({
      ...prevState,
      view: !prevState.view,
    }));
  };

  const updateModalViewInfo = (newPhoto) => {
    setModalViewInfo(prevState => ({
      ...prevState,
      photo: newPhoto || prevState.photo,
    }));
  };


  const [favPhotos, setFavPhotos] = useState([]);
  const displayLikeBadge = favPhotos.length > 0 ? true : false;

  function toggleFav(photoId) {
    setFavPhotos((prev) => {
      if (prev.includes(photoId)) {
        return prev.filter((id) => id !== photoId);
      } else {
        return [...prev, photoId];
      }
    });
  }

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        updateModalViewInfo={updateModalViewInfo}
        modalViewInfo={modalViewInfo}
        toggleModalView={toggleModalView}
        toggleFav={toggleFav}
        favPhotos={favPhotos}
        displayLikeBadge={displayLikeBadge}
      />
      {modalViewInfo.view && (
        <PhotoDetailsModal
        
          modalViewInfo={modalViewInfo}
          toggleFav={toggleFav}
          favPhotos={favPhotos}
          toggleModalView={toggleModalView}
          updateModalViewInfo={updateModalViewInfo}
        />
      )}
    </div>
  );
};

export default App;
