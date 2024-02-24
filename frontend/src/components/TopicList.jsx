import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";




const TopicList = (props) => {
  const generateTopicListItems = function(arr) {
    return arr.map((item) => (
      <TopicListItem key={item.id} item={item} />
    ))
  }

  return (
    <div className="top-nav-bar__topic-list">
      {generateTopicListItems(props.topics)}
    </div>
  );
};

export default TopicList;
