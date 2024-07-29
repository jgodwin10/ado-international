import React from "react";
import Img from "../Images/first.gif";
import Img1 from "../Images/second.gif";
import Img2 from "../Images/third.gif";

const Distribution = () => {
  return (
    <>
      <div className="bg-[url('./Images/Contact.png')] bg-cover bg-bottom before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#00000099] relative h-[284px] w-full">
        <div className=" absolute md:px-[50px] px-6 top-0 left-0 w-full h-full">
          <div className="flex items-center h-full max-w-[1600px] mx-auto">
            <p className="text-[70px] font-bold text-white">Distribution</p>
          </div>
        </div>
      </div>

      {/* BODY */}

      <div className="bg-[url('./Images/dist.jpeg')] bg-cover">
        <div className="max-w-[1600px] py-20  mx-auto md:px-[50px] px-6">
          <div className="text-center space-y-4">
            <h2 className="text-black text-[45px] font-medium">
              Discover our Distribution Process
            </h2>
            <p className="text-[#1E1E1E] text-[18px]">
              Distribution of North Africa/ Sub Sahara Africa food & beverage
              products in the UK market
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[40px] pt-20 pb-3">
            <div className="text-center space-y-[27px]">
              <img className="size-[130px] mx-auto" src={Img} alt="" />
              <h2 className="text-[24px] text-black font-medium">
                Preparation and Packaging
              </h2>
              <p className="text-[18px] text-black font-medium">
                Utilize eco-friendly and secure packaging materials to maintain
                the integrity and taste of the meals during transit.
              </p>
            </div>
            <div className="text-center space-y-[27px]">
              <img className="size-[130px] mx-auto" src={Img1} alt="" />
              <h2 className="text-[24px] text-black font-medium">
                Distribution Network Coordination
              </h2>
              <p className="text-[18px] text-black font-medium">
                Plan and optimize delivery routes to ensure timely and efficient
                distribution to various locations.
              </p>
            </div>
            <div className="text-center space-y-[27px]">
              <img className="size-[130px] mx-auto" src={Img2} alt="" />
              <h2 className="text-[24px] text-black font-medium">
                Delivery and Customer Feedback
              </h2>
              <p className="text-[18px] text-black font-medium">
                Gather feedback from customers to continually improve the
                distribution process and overall service quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('./Images/Map.png')] bg-cover bg-bottom before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#000000A6] relative h-[411px] w-full"></div>
    </>
  );
};

export default Distribution;
