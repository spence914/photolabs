import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const displayAlertBadge = props.favPhotos.length > 0 ? true : false

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={displayAlertBadge} favPhotos={props.favPhotos}/>
    </div>
  ) 
};

export default FavBadge;