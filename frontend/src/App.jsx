import React, {useState} from "react";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import photos from "mocks/photos";
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalViewInfo, setModalViewInfo] = useState({view: false}) 

  const toggleModalViewInfo = (newPhoto) => {
    setModalViewInfo(prevState => ({
      ...prevState,
      view: !prevState.view,
      photo: newPhoto || prevState.photo,
    }));
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModalViewInfo={toggleModalViewInfo} modalViewInfo={modalViewInfo} setModalViewInfo={setModalViewInfo}/>
      {modalViewInfo.view && <PhotoDetailsModal toggleModalViewInfo={toggleModalViewInfo} modalViewInfo={modalViewInfo} />}
    </div>
  );
};

export default App;
