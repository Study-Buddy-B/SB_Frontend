import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/Main.tsx';
import Group from './pages/Group.tsx';
import GNB from "./components/gnb/GNB.tsx";
import MyGroup from "./components/group/MyGroup.tsx";
import MyGroups from "./components/group/MyGroups.tsx";
import Alarm from "./components/alarm/Alarm.tsx";
import Login from "./components/login/Login.tsx";
import SignUp from "./components/signup/SignUp.tsx";
import STCalendar from "./components/stcalendar/STCalendar.tsx"

import './App.css';
import './assets/css/setting.css';


function App() {
  return (
    <div className="App">
      <GNB />
      {/* <div className="alarm-wrapper">
        <Alarm/>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
        </Routes>
        <Routes>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Routes>
          <Route path='/group' element={<Group />}/>
        </Routes>
        <Routes>
          <Route path='/group/my' element={<MyGroups />}/>
        </Routes>
        <Routes>
          <Route path='/group/my/:id' element={<MyGroup />}/>
        </Routes>
        <Routes>
          <Route path='/calendar' element={<STCalendar />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
