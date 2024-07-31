import React from "react";
import Logo from "../Images/Logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const pathname = useLocation().pathname;
  return (
    <div
      className={`md:px-[50px] ${
        pathname == "/" ? "z-[99999999999] bg-white" : "bg-white"
      } py-6 px-6 z-[9999999999999]`}
    >
      <div
        className={`max-w-[1600px] z-[999999999] flex items-center lg:gap-[10px] xl:gap-[21px] justify-between  mx-auto`}
      >
        <img className="h-[50px] 2xl:w-[223px]" src={Logo} alt="" />
        <div className="flex justify-evenly 2xl:text-[16px] text-[1vw] gap-2 items-center flex-1 ">
          <NavLink>Kitchen</NavLink>
          <NavLink>Refrigeration</NavLink>
          <NavLink>Table Ware</NavLink>
          <NavLink>F&B</NavLink>
          <NavLink>Furniture</NavLink>
          <NavLink>Hotel</NavLink>
          <NavLink className={`${pathname == "/" && "text-white"}`}>
            House Keeping
          </NavLink>
        </div>
        <button className="border-[2px] text-[1vw] 2xl:text-[20px] font-bold hover:scale-[1.1] duration-500 border-[#E78707] text-[#E78707] 2xl:w-[190px] w-[10vw] h-[45px] 2xl:h-[60px] rounded-full">
          Flea Market
        </button>
      </div>
    </div>
  );
};

export default Navbar;
