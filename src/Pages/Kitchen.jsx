import React from "react";
import Img from "../Images/kitchen.png";

const Kitchen = () => {
  return (
    <div className="md:px-[80px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-3">
          <div></div>
          <div className="col-span-2 space-y-4 py-10">
            <div className="bg-[#E78707B2] h-[179px]"></div>
            <div className="relative">
              <img className="scale-x-[-1]" src={Img} alt="" />
              <div className="absolute top-[20%] h-full  right-4">
                <div className="max-w-[530px] mx-auto">
                  <h2 className="text-[45px] font-semibold">
                    Quality and Affordable Kitchenware
                  </h2>
                  <p>
                    Get affordable kitchen ware of all brands through the range
                    of options in our categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
