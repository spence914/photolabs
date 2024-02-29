import { useState, useReducer } from "react";


export const ACTIONS = {
  FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
  MODAL_TOGGLE: 'MODAL_TOGGLE',
  SET_MODAL_PHOTO: 'SET_MODAL_PHOTO',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_TOGGLE: {
      const isFav = state.favPhotos.includes(action.payload.photoId);
      const newFavPhotos = isFav
        ? state.favPhotos.filter((id) => id !== action.payload.photoId)
        : [...state.favPhotos, action.payload.photoId];

      return {
        ...state,
        favPhotos: newFavPhotos,
      };
    }
    case ACTIONS.MODAL_TOGGLE: {
      return {
        ...state,
        modalViewInfo: {
          ...state.modalViewInfo,
          view: !state.modalViewInfo.view,
        },
      };
    }
    case ACTIONS.SET_MODAL_PHOTO: {
      return {
        ...state,
        modalViewInfo: {
          ...state.modalViewInfo,
          photo: action.payload.newPhoto || state.modalViewInfo.photo,
        },
      };
    }
    default:
      return state;
  }
}


export function useApplicationData() {
  const initialState = {
    modalViewInfo: { view: false, photo: null },
    favPhotos: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.MODAL_TOGGLE });
  };

  const setPhotoSelected = (newPhoto) => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: { newPhoto } });
  };

  const udpateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_TOGGLE, payload: { photoId } });
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