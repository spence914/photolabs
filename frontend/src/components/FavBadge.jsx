import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const displayAlertBadge = props.displayLikeBadge

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={displayAlertBadge} selected={props.selected}/>
    </div>
  ) 
};

export default FavBadge;