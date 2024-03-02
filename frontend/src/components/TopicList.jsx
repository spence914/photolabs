import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";




const TopicList = (props) => {
  const generateTopicListItems = function(arr) {
    return arr.map((topic) => (
      <TopicListItem key={topic.id} topic={topic} updateSelectedTopic={props.updateSelectedTopic} />
    ))
  }

  return (
    <div className="top-nav-bar__topic-list">
      {generateTopicListItems(props.topics)}
    </div>
  );
};

export default TopicList;
