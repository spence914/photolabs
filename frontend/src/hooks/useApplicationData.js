import { useState } from "react";

function useApplicationData() {
  const [state, setState] = useState({
    modalViewInfo: { view: false },
    favPhotos: [],
    displayLikeBadge: false, // This will be derived from favPhotos, so it doesn't need to be in state
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
        displayLikeBadge: newFavPhotos.length > 0,
      };
    });
  };

  // Since `displayLikeBadge` is derived from `favPhotos`, we do not set it directly
  // in the state. Instead, we compute it each time the state is updated.
  return {
    state,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    udpateToFavPhotoIds,
    displayLikeBadge: state.favPhotos.length > 0,
  };
}

export default useApplicationData;
