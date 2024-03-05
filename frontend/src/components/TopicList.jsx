import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";




const TopicList = (props) => {
  // Takes array of topics from state and populates them as TopicListItems
  const generateTopicList = function(arr) {
    return arr.map((topic) => (
      <TopicListItem key={topic.id} topic={topic} updateSelectedTopic={props.updateSelectedTopic} />
    ))
  }

  return (
    <div className="top-nav-bar__topic-list">
      {generateTopicList(props.topics)}
    </div>
  );
};

export default TopicList;
