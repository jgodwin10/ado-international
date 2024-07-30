import React from "react";
import Img from "../../Images/taste.gif";

const Taste = () => {
  return (
    <div className=" md:px-[50px] px-6 bg-[#006633]">
      <div className="max-w-[1600px] grid grid-cols-2 mx-auto">
        <div className="homep bg-white">
          <img className="w-full object-contain h-[700px]" src={Img} alt="" />
        </div>
        <div className="flex flex-col pt-20 gap-y-8">
          <h2 className="text-[#E78707] text-[22px] font-semibold">About Us</h2>
          <p className="text-[40px] text-white font-medium">
            A Taste of Home, Everywhere You Go
          </p>
          <p className="text-white text-[20px] leading-[43px]">
            Ado International is a cherished local restaurant chain with a
            growing national presence and aspirations to become a renowned
            international brand. Known for its dedication to authentic flavors
            and exceptional hospitality, Ado International offers a dining
            experience that brings the warmth and familiarity of home-cooked
            meals to customers wherever they are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Taste;
