import React from "react";
import Logo from "../Images/Logo.png";
import Nav from "../Images/align-center.png";
import Cart from "../Images/shopping-cart.png";
import User from "../Images/user.png";
import Heart from "../Images/heart.png";
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
        className={`max-w-[1600px] hidden  z-[999999999] lg:flex items-center lg:gap-[10px] xl:gap-[21px] justify-between  mx-auto`}
      >
        <img className="h-[50px] 2xl:w-[223px]" src={Logo} alt="" />
        <div className="flex justify-evenly 2xl:text-[22px] duration-500 font-medium text-[1.2vw] 2xl:gap-1 gap-2 items-center flex-1 ">
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
      <div className="bg-white items-center flex lg:hidden fixed z-[999999] left-0 w-full -top-1 justify-between py-6 px-6">
        <div className="flex items-center gap-x-4">
          <img className="cursor-pointer" src={Nav} alt="" />
          <img className="w-[110px]" src={Logo} alt="" />
        </div>
        <div className="flex gap-x-[15px] items-center">
          <img
            className="size-[7.5vw] md:size-auto cursor-pointer"
            src={Heart}
            alt=""
          />
          <img
            className="size-[7.5vw] md:size-auto cursor-pointer"
            src={Cart}
            alt=""
          />
          <img
            className="size-[7.5vw] md:size-auto cursor-pointer"
            src={User}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
