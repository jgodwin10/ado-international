import React from "react";
import Img from "../../Images/arrow.png";
import Love from "../../Images/love.png";
import Img1 from "../../Images/hero3.png";
import Img4 from "../../Images/hero4.png";
import Cart from "../../Images/Cart1.png";
import Img2 from "../../Images/prod4.png";
import Img3 from "../../Images/prod3.png";

const More = () => {
  const Items = [
    {
      image: Img1,
      title: " Food and Beverage",
    },
    {
      image: Img2,
      title: "Hotel",
    },
    {
      image: Img3,
      title: "Kitchen Ware",
    },
    {
      image: Img4,
      title: "Furniture",
    },
  ];

  return (
    <div className="lg:py-32 py-4 md:py-16 md:px-[80px]  px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="2xl:max-w-[700px] lg:max-w-[40vw] 2xl:space-y-4">
            <h2 className="2xl:text-[45px] text-[5.5vw] lg:text-[1.9vw] font-medium leading-[50px] text-black md:leading-[60px]">
              See More Products
            </h2>
            <p className="text-[#0D0D0D] text-[3.9vw] md:text-[3vw] md:pt-5  lg:text-[1.2vw] 2xl:text-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet urna sed imperdiet.
            </p>
          </div>
          <div className="lg:flex hidden justify-center gap-3 items-center">
            <p className="underline text-[1.3vw] 2xl:text-[22px] cursor-pointer text-[#F90F08] font-medium">
              View all Products
            </p>
            <img className="size-[66px] cursor-pointer" src={Img} alt="" />
          </div>
        </div>

        {/* ITEMS */}

        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 relative gap-[10px] lg:gap- 2xl:gap-8 pt-8 pb-10 lg:pt-16">
          {Items.map((item, index) => {
            return (
              <div
                key={index}
                className=" relative h-fit md:h-[300px] lg:h-auto hover:scale-[1.07] 2xl:hover:scale-[1.1] lg:overflow-hidden cursor-pointer duration-500 w-full rounded-[15px]"
              >
                <div className="py-8 bg-[#EEEEEE] rounded-t-[15px] px-6">
                  <img
                    className="lg:w-[260px] size-[110px] md:size-[150px] lg:h-[210px] mx-auto"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="bg-[#0D0D0D] hover:scale-[1.06] duration-500 gap-3 overflow-hidden flex justify-center items-center rounded-b-[15px] h-[33px] lg:h-[64px]">
                  <img
                    className="lg:w-auto size-[16px] lg:h-auto"
                    src={Cart}
                    alt=""
                  />
                  <p className="text-white text-[9px] lg:text-[1vw] 2xl:text-[18px] font-semibold">
                    Add To Cart
                  </p>
                </div>
                <div className="flex justify-between pt-1 lg:pt-5 items-center">
                  <div className="lg:space-y-[8px] space-y-[5px]">
                    <p className="font-semibold text-black lg:text-base text-[10px] 2xl:text-[20px]">
                      Lorem Ipsum
                    </p>
                    <p className="text-[#E78707] lg:text-base text-[10px] font-medium 2xl:text-[20px] ">
                      ₦3,000
                    </p>
                  </div>
                  <div className="border-[1px] grid grid-cols-3 rounded-md h-[23px] lg:h-[49px] border-[#AEAEAE] w-[70px] md:w-[141px]">
                    <p className="flex justify-center items-center text-[12px] lg:text-[22px]">
                      -
                    </p>
                    <p className="flex justify-center text-[10px] lg:text-base bg-[#E2E2E2] items-center">
                      1
                    </p>
                    <p className="flex justify-center items-center text-[12px] lg:text-[22px]">
                      +
                    </p>
                  </div>
                </div>
                <img
                  className="absolute lg:w-auto lg:h-auto size-[18px] top-4 right-4"
                  src={Love}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default More;
