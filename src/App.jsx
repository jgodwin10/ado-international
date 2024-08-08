import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <TopBar />
      <div
        className={`lg:mt-[4vw] 2xl:mt-[80px] ${
          pathname.pathname == "/" ? "mt-[75px]" : "mt-[28px]"
        } overflow-hidden`}
      >
        {pathname.pathname == "/" ? "" : <Navbar />}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
