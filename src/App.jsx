import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
