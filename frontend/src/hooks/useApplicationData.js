import { useReducer, useEffect } from "react";


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
    
    // Toggles a photos liked badge by checking if the photos ID is included in the favPhotos array, stored 
    // in state. If photo ID is not included it is added, if it is there it is removed. If the photo is included
    // PhotoFavButton passes isFavourite as the 'selected' prop to FavIcon as 'true' and the heart isd rendered
    // filled in.
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
// Toggles modal visiblilty by toggling a boolean value keyed to 'view' inside the modalViewInfo object
// within state. Short circuit rendering on ap.jsx determines whether the modal is visible. 

    case ACTIONS.MODAL_TOGGLE: {
      return {
        ...state,
        modalViewInfo: {
          ...state.modalViewInfo,
          view: !state.modalViewInfo.view,
        },
      };
    }
// Sets a selected photos ID as the modal view photo. Function passed as prop
// from app => homeroute => photolist => photolistitem, used there as part of clickhandler 
// along with modal view toggle.

    case ACTIONS.SET_MODAL_PHOTO: {
      return {
        ...state,
        modalViewInfo: {
          ...state.modalViewInfo,
          photo: action.payload.newPhoto,
        },
      };
    }
// Determines which photos are rendered by photolist on homeroute. photoData initialized as empty array, 
// immediately populated by API call so all photos are displayed on initial pageload.
// If a topic is selected from the navBar the photoData array is set to photos in that topic,
// main page is rerendered with only photos relevant to that topic

    case ACTIONS.SET_PHOTO_DATA: {
      return {
        ...state,
        photoData: action.payload
      }
    }
// Topic data pulled from API call, used to create topic list in navBar.

    case ACTIONS.SET_TOPIC_DATA: {
      return {
        ...state,
        topicData: action.payload
      }
    }
// Sets topicId in state, triggered when a topic is selected from the navbar.

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

// Used with SET_PHOTO_DATA action to make API call that populates photoData array with
// photos from selected topic. Waits for changes to selectedTopicId to rerender.

  useEffect(() => {
    const url = state.selectedTopicId 
    ? `/api/topics/photos/${state.selectedTopicId}` 
    : '/api/photos';

      fetch(url)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    
  }, [state.selectedTopicId])


  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.MODAL_TOGGLE });
  };

  const setPhotoSelected = (newPhoto) => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: { newPhoto } });
  };

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_TOGGLE, payload: { photoId } });
  };

  const updateSelectedTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: { topicId } });
  };

  return {
    state,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    updateToFavPhotoIds,
    displayLikeBadge: state.favPhotos.length > 0,
    updateSelectedTopic
  };
}

export default useApplicationData;