import React from "react";
import Img from "../../Images/Contact.png";

const Body = () => {
  return (
    <div className="md:px-[50px] px-6">
      <div className="py-20 max-w-[1600px] mx-auto h-[1125px] grid grid-cols-2">
        <div className="w-full before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#000000D9] relative h-full">
          <img className="w-full h-full object-cover" src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
