import React, {useState} from "react";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import photos from "mocks/photos";
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalViewInfo, setModalViewInfo] = useState({view: false}) 

const toggleModalViewInfo = () => {
  setModalViewInfo(prevState => ({ view: !prevState.view }));
}

  return (
    <div className="App">
      {modalViewInfo.view && <PhotoDetailsModal toggleModalViewInfo={toggleModalViewInfo} />}
      <HomeRoute photos={photos} topics={topics} toggleModalViewInfo={toggleModalViewInfo} />
    </div>
  );
};

export default App;
