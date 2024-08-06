import React, { useState } from "react";
import Logo from "../Images/Logo.png";
import Nav from "../Images/align-center.png";
import Cart from "../Images/shopping-cart.png";
import User from "../Images/user.png";
import Heart from "../Images/heart.png";
import { NavLink, useLocation } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import Chevron from "../Images/chevron-right.png";
import HeartNav from "../Images/heart-rounded.png";
import CartNav from "../Images/shopping.png";
import Bell from "../Images/bell.png";
import Settings from "../Images/settings.png";
import Help from "../Images/help-circle.png";
import UserNav from "../Images/user-circle.png";

const Navbar = () => {
  const pathname = useLocation().pathname;

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div
      className={`md:px-[80px] ${
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
          <img
            onClick={() => setNavOpen(true)}
            className="cursor-pointer"
            src={Nav}
            alt=""
          />
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

      {/* NAVBAR */}
      <div
        className={`fixed top-0 ${
          navOpen ? "translate-x-0" : "-translate-x-[120vw]"
        } duration-500 left-0 w-[90%] h-full bg-white z-[9999999]`}
      >
        <div className="flex px-6 items-center gap-x-7 py-4">
          <LiaTimesSolid
            onClick={() => setNavOpen(false)}
            className="size-[8vw]"
          />
          <img className="w-[110px]" src={Logo} alt="" />
        </div>
        <div className="border border-[#E9E9E9]"></div>
        <div className="overflow-y-scroll channel h-full">
          <div className="px-6 text-[15px] space-y-[35px] font-medium py-3">
            <div className="flex  justify-between items-center">
              <p>Kitchen</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>Refrigeration</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>Table Ware</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>F&B</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>Furniture</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>Hotel</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>House Keeping</p>
              <img src={Chevron} alt="" />
            </div>
          </div>
          <div className="border mt-3 border-[#E9E9E9]"></div>

          <div className="px-6 text-[15px] space-y-[35px] font-medium py-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={HeartNav} alt="" />
                <p>Liked Items</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={CartNav} alt="" />
                <p>Cart</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={Bell} alt="" />
                <p>Notifications</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
          </div>
          <div className="border mt-3 border-[#E9E9E9]"></div>

          <div className="px-6 text-[15px] space-y-[35px] font-medium py-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={Settings} alt="" />
                <p>Settings</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={Help} alt="" />
                <p>Help & Support</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={UserNav} alt="" />
                <p>Login/Signup</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
          </div>

          <div className="px-6 pt-6 mb-32">
            <button className="bg-[#E78707] hover:scale-[1.05] w-full duration-500 text-[15px] font-medium text-white h-[46px] rounded-[6px]">
              Flea Market
            </button>
          </div>
        </div>
      </div>
      {/* END */}
    </div>
  );
};

export default Navbar;
