import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() =>props.updateSelectedTopic(null)}>PhotoLabs</span>
      <TopicList topics={props.topics} updateSelectedTopic={props.updateSelectedTopic} />
      <FavBadge displayLikeBadge={props.displayLikeBadge} selected={true}/>
    </div>
  )
}

export default TopNavigation;