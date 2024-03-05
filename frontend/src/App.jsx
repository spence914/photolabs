import React from "react";

import useApplicationData from "hooks/useApplicationData";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";



const App = () => {


const {
  state: { modalViewInfo, favPhotos, photoData, topicData },
  onClosePhotoDetailsModal,
  setPhotoSelected,
  updateToFavPhotoIds,
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
        toggleFav={updateToFavPhotoIds}
        favPhotos={favPhotos}
        displayLikeBadge={displayLikeBadge}
        updateSelectedTopic={updateSelectedTopic}
      />
      {modalViewInfo.view && (
        <PhotoDetailsModal
        
          modalViewInfo={modalViewInfo}
          toggleFav={updateToFavPhotoIds}
          favPhotos={favPhotos}
          toggleModalView={onClosePhotoDetailsModal}
          updateModalViewInfo={setPhotoSelected}
          photos={photoData}

        />
      )}
    </div>
  );
};

export default App;
