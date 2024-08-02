import React from "react";
import Img from "../../Images/taste.gif";

const Taste = () => {
  return (
    <div className=" md:px-[50px] lg:h-[40vw] h-[195vw] relative 2xl:h-[620px] bg-[#006633]">
      <div className="max-w-[1600px] lg:grid lg:grid-cols-2 mx-auto">
        <div className="homep bg-black">
          <img
            className="w-full lg:object-contain object-bottom lg:h-[700px]"
            src={Img}
            alt=""
          />
        </div>
        <div className="flex flex-col lg:pt-20 absolute px-6 lg:px-0 space-y-4 left-0 lg:space-y-0 text-center lg:text-start  lg:relative h-full lg:top-0 md:top-[80vw] top-[85vw] lg:gap-y-[1.5vw] 2xl:gap-y-8">
          <h2 className="text-[#E78707] text-[4.5vw] lg:text-[1.3vw] 2xl:text-[22px] font-semibold">
            About Us
          </h2>
          <p className="2xl:text-[40px] lg:w-full w-[50vw] mx-auto text-[5vw] lg:text-[2vw] text-white font-medium">
            A Taste of Home, Everywhere You Go
          </p>
          <p className="text-white text-[3.5vw] leading-[6vw]  2xl:text-[20px] lg:text-[1.2vw] lg:leading-[2vw] 2xl:leading-[40px]">
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
