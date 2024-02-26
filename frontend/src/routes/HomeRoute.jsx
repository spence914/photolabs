import React from 'react';
import { useState } from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [favPhotos, setFavPhotos] = useState([])
  const displayLikeBadge = favPhotos.length > 0 ? true : false

  function toggleFav(photoId) {
    setFavPhotos(prev => {
      if (prev.includes(photoId)) {
        return prev.filter(id => id !== photoId);
      } else {
        return [...prev, photoId]
      }
    })
  }

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} displayLikeBadge={displayLikeBadge} />
      <PhotoList photos={props.photos} toggleFav={toggleFav} favPhotos={favPhotos} toggleModalViewInfo={props.toggleModalViewInfo}/>
    </div>
  );
};
export default HomeRoute;
