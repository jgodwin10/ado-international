import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <TopBar />
      <div className="mt-24">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
