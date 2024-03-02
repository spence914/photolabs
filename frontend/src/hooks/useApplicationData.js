import { useState, useReducer, useEffect } from "react";


export const ACTIONS = {
  FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
  MODAL_TOGGLE: 'MODAL_TOGGLE',
  SET_MODAL_PHOTO: 'SET_MODAL_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA', 
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
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
    case ACTIONS.SET_PHOTO_DATA: {
      return {
        ...state,
        photoData: action.payload
      }
    }
    case ACTIONS.SET_TOPIC_DATA: {
      return {
        ...state,
        topicData: action.payload
      }
    }
    case ACTIONS.SET_SELECTED_TOPIC: {
      return {
        ...state,
        selectedTopicId: action.payload.topicId,
      }
    }
    default:
      return state;
  }
}


export function useApplicationData() {
  const initialState = {
    modalViewInfo: { view: false, photo: null },
    favPhotos: [],
    photoData: [],
    topicData: [],
    selectedTopicId: null,
  };

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, [])

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, [])
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.selectedTopicId) {
      fetch(`/api/topics/photos/${state.selectedTopicId}`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    }
  }, [state.selectedTopicId])


  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.MODAL_TOGGLE });
  };

  const setPhotoSelected = (newPhoto) => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: { newPhoto } });
  };

  const udpateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_TOGGLE, payload: { photoId } });
  };

  const updateSelectedTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: { topicId } });
  };

  return {
    state,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    udpateToFavPhotoIds,
    displayLikeBadge: state.favPhotos.length > 0,
    updateSelectedTopic
  };
}

export default useApplicationData;