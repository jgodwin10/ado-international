import React from "react";
import Logo from "../Images/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`md:px-[50px] py-6 px-6`}>
      <div
        className={`max-w-[1600px] flex items-center lg:gap-[10px] xl:gap-[21px] justify-between  mx-auto`}
      >
        <img className="h-[55px] w-[223px]" src={Logo} alt="" />
        <div className="flex justify-evenly xl:text-[16px] text-[13px] gap-2 items-center flex-1 ">
          <NavLink>Kitchen</NavLink>
          <NavLink>Refrigeration</NavLink>
          <NavLink>Table Ware</NavLink>
          <NavLink>F&B</NavLink>
          <NavLink>Furniture</NavLink>
          <NavLink>Hotel</NavLink>
          <NavLink>House Keeping</NavLink>
        </div>
        <button className="border-[2px] text-[15px] xl:text-[22px] font-bold hover:scale-[1.1] duration-500 border-[#E78707] text-[#E78707] xl:w-[197px] w-[145px] h-[45px] xl:h-[68px] rounded-full">
          Flea Market
        </button>
      </div>
    </div>
  );
};

export default Navbar;
