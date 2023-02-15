import React from "react";
import './input.css'

import Login from "./components/Login";
import Profile from "./components/Profile";


function App() {
  return (
    <div className="flex justify-center items-center">
    <Profile/>
    <Login/>
    </div>
  );
}

export default App;
