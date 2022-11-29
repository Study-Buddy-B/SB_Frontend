import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Group from "./pages/Group";
import GNB from "./components/gnb/GNB";
import MyGroup from "./components/group/MyGroup";
import MyGroups from "./components/group/MyGroups";
import Alarm from "./components/alarm/Alarm";

import "./App.css";
import "./assets/css/setting.css";

function App() {
  return (
    <div className="App">
      <GNB />
      {/* <div className="alarm-wrapper">
        <Alarm/>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/group" element={<Group />} />
        </Routes>
        <Routes>
          <Route path="/group/my" element={<MyGroups />} />
        </Routes>
        <Routes>
          <Route path="/group/my/:id" element={<MyGroup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
