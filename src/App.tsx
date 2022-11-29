import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Main from "./components/main/Main";
import Group from "./pages/Group";
import GNB from "./components/gnb/GNB";
import MyGroup from "./components/group/MyGroup";
import MyGroups from "./components/group/MyGroups";
import Alarm from "./components/alarm/Alarm";

import "./App.css";
import "./assets/css/setting.css";

function App() {
  const [isAlarm, setIsAlarm] = useState(0);
  return (
    <div className="App">
      <GNB />
      {isAlarm !== 0 && (
        <div className="alarm-wrapper">
          <Alarm isAlarm={isAlarm} setIsAlarm={setIsAlarm} />
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main setIsAlarm={setIsAlarm} />} />
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
