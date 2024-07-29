import React from "react";
import Logo from "../Images/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`md:px-[50px] py-6 px-6`}>
      <div
        className={`max-w-[1600px] flex items-center justify-between  mx-auto`}
      >
        <img className="h-[55px] w-[223px]" src={Logo} alt="" />
        <div className="flex justify-center items-center gap-[51px] ">
          <NavLink>Kitchen</NavLink>
          <NavLink>Refrigeration</NavLink>
          <NavLink>Table Ware</NavLink>
          <NavLink>F&B</NavLink>
          <NavLink>Furniture</NavLink>
          <NavLink>Hotel</NavLink>
          <NavLink>House Keeping</NavLink>
        </div>
        <button className="border-[2px] hover:scale-[1.1] duration-500 border-[#E78707] text-[#E78707] w-[197px] h-[68px] rounded-full">
          Flea Market
        </button>
      </div>
    </div>
  );
};

export default Navbar;
