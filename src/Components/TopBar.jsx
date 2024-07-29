import React from "react";
import Search from "../Images/search.png";
import Cart from "../Images/shopping-cart.png";
import User from "../Images/user.png";
import Heart from "../Images/heart.png";

const TopBar = () => {
  return (
    <div className=" shadow fixed md:px-[50px] px-6 top-0 bg-white left-0 w-full z-[99999] flex justify-between items-center ">
      <div className=" max-w-[1600px] py-5 mx-auto w-full flex justify-between items-center">
        <div className="bg-[#F3F3F3] border-[1px] border-[#D3D3D3] flex items-center justify-between px-5 w-[793px] h-[51px]  rounded-[8px]">
          <input
            className="outline-none flex-1 pr-7 bg-transparent placeholder:text-[#646464] text-[22px] text-[#646464]"
            type="text"
            placeholder="What are you looking for?"
          />
          <img className="cursor-pointer" src={Search} alt="" />
        </div>
        <div className="flex items-center gap-[40px] justify-between">
          <div className="flex cursor-pointer items-center gap-x-[11px]">
            <img className="cursor-pointer" src={Heart} alt="" />
            <p className="text-[20px] text-[#161616] font-bold">Liked</p>
          </div>
          <div className="flex cursor-pointer items-center gap-x-[11px]">
            <img className="cursor-pointer" src={Cart} alt="" />
            <p className="text-[20px] text-[#161616] font-bold">Cart</p>
          </div>
          <div className="flex cursor-pointer items-center gap-x-[11px]">
            <img className="cursor-pointer" src={User} alt="" />
            <p className="text-[20px] text-[#161616] font-bold">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
