import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/main/Main";
import Group from "./pages/Group";
import GNB from "./components/gnb/GNB";
import MyGroup from "./components/group/MyGroup";
import MyGroups from "./components/group/MyGroups";
import Alarm from "./components/alarm/Alarm";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import STCalendar from "./components/stcalendar/STCalendar"

import "./App.css";
import "./assets/css/setting.css";

function App() {
  return (
    <div className="App">
      <GNB />
      <Alarm />
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/group" element={<Group />} />
    
        </Routes>
        <Routes>
          <Route path='/' element={<Login />}/>
        </Routes>
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Routes>
          <Route path="/group/my" element={<MyGroups />} />
        </Routes>
        <Routes>
          <Route path="/group/my/:id" element={<MyGroup />} />
        </Routes>
        <Routes>
          <Route path='/calendar' element={<STCalendar />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
