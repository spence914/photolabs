import { useState } from "react";

function useApplicationData() {
  const [state, setState] = useState({
    modalViewInfo: { view: false },
    favPhotos: [],
    displayLikeBadge: false, 
  });

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      modalViewInfo: {
        ...prevState.modalViewInfo,
        view: !prevState.modalViewInfo.view,
      },
    }));
  };

  const setPhotoSelected = (newPhoto) => {
    setState((prevState) => ({
      ...prevState,
      modalViewInfo: {
        ...prevState.modalViewInfo,
        photo: newPhoto || prevState.modalViewInfo.photo,
      },
    }));
  };

  const udpateToFavPhotoIds = (photoId) => {
    setState((prevState) => {
      const isFav = prevState.favPhotos.includes(photoId);
      const newFavPhotos = isFav
        ? prevState.favPhotos.filter((id) => id !== photoId)
        : [...prevState.favPhotos, photoId];

      return {
        ...prevState,
        favPhotos: newFavPhotos,
      };
    });
  };


  return {
    state,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    udpateToFavPhotoIds,
    displayLikeBadge: state.favPhotos.length > 0,
  };
}

export default useApplicationData;
