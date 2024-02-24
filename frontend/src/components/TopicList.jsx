import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

import topics from "mocks/topics";



const TopicList = () => {
  const generateTopicListItems = function(arr) {
    return arr.map((item) => (
      <TopicListItem key={item.id} item={item} />
    ))
  }

  return (
    <div className="top-nav-bar__topic-list">
      {generateTopicListItems(topics)}
    </div>
  );
};

export default TopicList;
