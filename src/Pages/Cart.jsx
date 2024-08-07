import React from "react";
import Img from "../Images/prod3.png";
import Img1 from "../Images/trash.png";
import Img2 from "../Images/plus.png";
import Img3 from "../Images/minus.png";
import Love from "../Images/love.png";
import Img4 from "../Images/hero3.png";
import Img5 from "../Images/hero4.png";
import Carts from "../Images/Cart1.png";
import Img6 from "../Images/prod4.png";
import Img8 from "../Images/arrow.png";
import Img7 from "../Images/prod3.png";

const Cart = () => {
  const Items = [
    {
      image: Img4,
      title: " Food and Beverage",
    },
    {
      image: Img5,
      title: "Hotel",
    },
    {
      image: Img6,
      title: "Kitchen Ware",
    },
    {
      image: Img7,
      title: "Furniture",
    },
  ];

  return (
    <div className="">
      <div className="bg-[#fef9f3] md:px-[80px] w-full ">
        <div className="max-w-[1600px] hidden  py-10 gap-8 md:flex md:flex-col lg:flex-row items-center justify-between mx-auto ">
          <div className="flex-1 h-[266px] py-5 pb-6 bg-white cart ">
            <h2 className="text-[#787878] px-7 pb-3 text-[1.5vw] font-semibold">
              Cart (1)
            </h2>
            <div className="border-[#E8E8E8] border-b"></div>
            <div className="flex justify-between items-center px-6">
              <div className="flex items-center gap-x-8">
                <img
                  className="h-[120px] w-[120px] bg-cover"
                  src={Img}
                  alt=""
                />
                <div>
                  <p className="lg:text-[1.2vw] text-[#787878] pr-9 font-semibold">
                    Gold Glass Lid Chafing Dish 351 For Induction use
                  </p>
                  <p className="text-[#03A84E] relative before:contents-[''] before:w-[9px] before:h-[9px] before:bg-[#03A84E] before:rounded-full before:absolute before:left-0 before:top-[25%] pl-4 font-medium">
                    In Stock
                  </p>
                </div>
              </div>
              <p className=" lg:text-[1.3vw] md:text-[1.5vw] font-semibold">
                ₦18,000
              </p>
            </div>
            <div className="flex justify-between items-center px-6 ">
              <div className="flex items-center gap-3 text-[#E78707] font-semibold">
                <img className="size-[2vw] 2xl:size-auto" src={Img1} alt="" />
                <p className="text-[1.2vw] 2xl:text-[20px] cursor-pointer uppercase">
                  Remove
                </p>
              </div>
              <div className="flex  items-center h-[53x] ">
                <img
                  className="h-[5vw] 2xl:size-[53px] mb-1 cursor-pointer hover:scale-[1.05] duration-500"
                  src={Img3}
                  alt=""
                />
                <p className="px-5 text-[1.5vw]">6</p>
                <img
                  className="md:h-[5vw] 2xl:size-[53px] cursor-pointer hover:scale-[1.05] duration-500"
                  src={Img2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="h-fit w-[457px] py-5 cart bg-white">
            <h2 className="text-[#787878] px-6 pb-3 text-[1.2vw] font-semibold">
              CART SUMMARY
            </h2>
            <div className="border-[#E8E8E8] border-b"></div>
            <div className="flex items-center px-6 py-3 justify-between text-[#0D0D0D] font-semibold">
              <p className="text-[1.2vw]">Subtotal</p>
              <p className="text-[1.3vw]">₦18,000</p>
            </div>
            <div className="border-[#E8E8E8] border-b"></div>
            <div className="px-6 pt-8">
              <button className="bg-[#E78707] uppercase hover:scale-[1.05] duration-500 h-[5vw] w-full text-[1.3vw] font-medium text-white rounded-[10px]">
                checkout (₦18,000)
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE */}

        <div className=" md:hidden">
          <h2 className="text-[#656565] px-6 py-4 font-semibold text-[11px] uppercase">
            Cart Summary
          </h2>
          <div className="bg-white py-4 flex justify-between items-center px-6">
            <p className="text-black text-[11px] font-semibold ">Subtotal</p>
            <p className="text-black text-[15px] font-semibold">₦18,000</p>
          </div>
          <h2 className="text-[#656565] px-6 py-4 font-semibold text-[11px] uppercase">
            Cart ({Items.length})
          </h2>

          <div className="px-4 space-y-3 pb-6">
            {Items.map((item, index) => {
              return (
                <div key={index} className="bg-white px-[9px] py-5">
                  <div className="flex items-cente gap-x-8">
                    <div className="h-[70px] -mt-3 w-[120px]">
                      <img src={Img} alt="" />
                    </div>
                    <div className="space-y-[6px]">
                      <p className="text-[10px] text-[#787878] pr-9 font-semibold">
                        Gold Glass Lid Chafing Dish 351 For Induction use
                      </p>
                      <p className="text-black text-[15px] font-medium">
                        ₦18,000
                      </p>

                      <p className="text-[#03A84E] text-[10px] relative before:contents-[''] before:w-[5px] before:h-[5px] before:bg-[#03A84E] before:rounded-full before:absolute before:left-0 before:top-[25%] pl-2 font-medium">
                        In Stock
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-5 items-center px-4 ">
                    <div className="flex items-center gap-3 text-[#E78707] font-semibold">
                      <img className="size-[14px]" src={Img1} alt="" />
                      <p className="text-[9px] cursor-pointer uppercase">
                        Remove
                      </p>
                    </div>
                    <div className="flex  items-center h-[53x] ">
                      <img
                        className="size-[27px] mb-1 cursor-pointer hover:scale-[1.05] duration-500"
                        src={Img3}
                        alt=""
                      />
                      <p className="px-6 ">6</p>
                      <img
                        className="size-[27px] cursor-pointer hover:scale-[1.05] duration-500"
                        src={Img2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pb-6 px-4">
            <div className="px-4  bg-white py-3">
              <button className="bg-[#E78707] uppercase hover:scale-[1.05] duration-500 h-[40px] w-full text-[15px] font-medium text-white">
                checkout (₦18,000)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[3vw] md:px-[50px] pb-16  px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="2xl:max-w-[700px] max-w-[40vw] 2xl:space-y-4">
              <h2 className="2xl:text-[42px] lg:text-[1.9vw] md:text-[3vw] font-medium text-black leading-[60px]">
                More Like This
              </h2>
            </div>
            <div className="flex justify-center gap-3 items-center">
              <p className="underline lg:text-[1.3vw] 2xl:text-[20px] text-[2vw] cursor-pointer text-[#F90F08] font-medium">
                View all popular goods
              </p>
              <img
                className="md:size-[6vw] lg:size-[3.5vw] cursor-pointer"
                src={Img8}
                alt=""
              />
            </div>
          </div>

          {/* ITEMS */}

          <div className="lg:overflow-visible overflow-x-scroll channel">
            <div className="grid grid-cols-4 min-w-[1200px] relative gap-4 2xl:gap-8 pt-[4vw]">
              {Items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" relative  2xl:hover:scale-[1.1] overflow-hidden cursor-pointer duration-500 w-full rounded-[15px]"
                  >
                    <div className="py-8 bg-[#EEEEEE] px-6">
                      <img
                        className="w-[260px] h-[210px] mx-auto"
                        src={item.image}
                        alt=""
                      />
                      {/* <div className="pt-6 gap-y-[8px]">
                    <p className="2xl:text-[20px] text-[1.2vw] font-semibold text-black">
                      {item.title}
                    </p>
                  </div> */}
                    </div>
                    <div className="bg-[#0D0D0D] hover:scale-[1.06] duration-500 gap-3 overflow-hidden flex justify-center items-center rounded-b-[15px] h-[64px]">
                      <img src={Carts} alt="" />
                      <p className="text-white text-[1vw] 2xl:text-[18px] font-semibold">
                        Add To Cart
                      </p>
                    </div>
                    <div className="flex justify-between pt-5 items-center">
                      <div className="space-y-[8px]">
                        <p className="font-semibold text-black 2xl:text-[20px]">
                          Lorem Ipsum
                        </p>
                        <p className="text-[#E78707] font-medium 2xl:text-[20px] ">
                          ₦3,000
                        </p>
                      </div>
                      <div className="border-[1px] grid grid-cols-3 rounded-md h-[49px] border-[#AEAEAE] w-[141px]">
                        <p className="flex justify-center items-center text-[22px]">
                          -
                        </p>
                        <p className="flex justify-center bg-[#E2E2E2] items-center">
                          1
                        </p>
                        <p className="flex justify-center items-center text-[22px]">
                          +
                        </p>
                      </div>
                    </div>
                    <img className="absolute top-4 right-4" src={Love} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
