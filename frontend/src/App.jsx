import React, { useState } from "react";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import photos from "mocks/photos";
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalViewInfo, setModalViewInfo] = useState({ view: false });

  const toggleModalViewInfo = (newPhoto) => {
    setModalViewInfo((prevState) => ({
      ...prevState,
      view: !prevState.view,
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
        toggleModalViewInfo={toggleModalViewInfo}
        modalViewInfo={modalViewInfo}
        setModalViewInfo={setModalViewInfo}
        toggleFav={toggleFav}
        favPhotos={favPhotos}
        displayLikeBadge={displayLikeBadge}
      />
      {modalViewInfo.view && (
        <PhotoDetailsModal
          toggleModalViewInfo={toggleModalViewInfo}
          modalViewInfo={modalViewInfo}
          toggleFav={toggleFav}
          favPhotos={favPhotos}
        />
      )}
    </div>
  );
};

export default App;
