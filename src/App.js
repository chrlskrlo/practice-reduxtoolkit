import React from "react";
import './input.css'

import Login from "./components/Login";
import Profile from "./components/Profile";
import ChangeColor from "./components/ChangeColor";


function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Login />
      <div>
        <Profile />
        <ChangeColor />
      </div>
    </div>
  );
}

export default App;
