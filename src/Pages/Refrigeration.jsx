import React from "react";
import Img from "../Images/kitchen.png";
import Kit from "../Images/kit.png";
import Kit1 from "../Images/kit1.png";
import Kit2 from "../Images/kit2.png";
import Kit3 from "../Images/kit3.png";
import Kit4 from "../Images/kit4.png";
import Cart from "../Images/Cart1.png";
import Love from "../Images/love.png";
import { IoMenuSharp } from "react-icons/io5";

//  ITEM
import Img1 from "../Images/hero3.png";
import Img4 from "../Images/hero4.png";
import Img2 from "../Images/prod4.png";
import Img3 from "../Images/prod3.png";

const Refrigeration = () => {
  const Items = [
    {
      img: Kit,
      title: "Instant delivery",
    },
    {
      img: Kit1,
      title: "COst effective",
    },
    {
      img: Kit2,
      title: "REUSABLE VALUE",
    },
    {
      img: Kit3,
      title: "Quality products",
    },
    {
      img: Kit4,
      title: "24/7 CUSTOMER CARE",
    },
  ];

  const Item = [
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
    <div className="min-[1200px]:px-[145px] min-[1020px]:px-[60px] pb-14 lg:pb-20">
      <div className="max-w-[1600px] mx-auto">
        {/* TOP */}

        <div className="lg:grid grid-cols-3 gap-x-[3vw]">
          {/* FIRST */}

          <div className="pt-[6vw] hidden lg:block space-y-[1vw]">
            <IoMenuSharp className="size-[33px]" />
            <div className="flex gap-1 before:absolute before:w-[10%] before:left-0 before:-bottom-[.8vw] before:contents-[''] before:h-[4px] relative before:bg-[#E78707] font-semibold text-[1.2vw] 2xl:text-[22px] items-center">
              <p>All</p>
              <p>Category</p>
              <p>Products</p>
            </div>

            <div className="pt-7">
              <div className="border-[0.5px] border-[#7D7D7D]">
                <p className="border-b-[#7D7D7D] px-3 py-[.9vw] text-[1vw] 2xl:text-[18px] border-b-[0.5px]">
                  Cookware
                </p>
                <p className="border-b-[#7D7D7D] px-3 py-[.9vw] text-[1vw] 2xl:text-[18px] border-b-[0.5px]">
                  Storage and Transportation
                </p>
                <p className="border-b-[#7D7D7D] px-3 py-[.9vw] text-[1vw] 2xl:text-[18px] border-b-[0.5px]">
                  Kitchen Utensils
                </p>
                <p className="border-b-[#7D7D7D] px-3 py-[.9vw] text-[1vw] 2xl:text-[18px] border-b-[0.5px]">
                  Baking and Supplies
                </p>
                <p className="border-b-[#7D7D7D] px-3 py-[.9vw] text-[1vw] 2xl:text-[18px] border-b-[0.5px]">
                  Food Storage Containers
                </p>
                <p className="border-b-[#7D7D7D] px-3 py-[.9vw] text-[1vw] 2xl:text-[18px] border-b-[0.5px]">
                  Kitchen Appliances
                </p>
                <p className="border-b-[#7D7D7D] px-3 py-[.9vw] text-[1vw] 2xl:text-[18px] border-b-[0.5px]">
                  Cooling and Freezing
                </p>
                <p className="border-b-[#7D7D7D] px-3 py-[.9vw] text-[1vw] 2xl:text-[18px] border-b-[0.5px]">
                  Hygiene and Cleaning
                </p>
                <p className="px-3 py-[.9vw] text-[1vw] 2xl:text-[18px]">
                  Packaging and Disposables
                </p>
              </div>
            </div>
          </div>

          {/* END */}

          <div className="lg:col-span-2 w-full space-y-4 lg:py-10">
            <div className="bg-[#E78707B2] hidden lg:block h-[10vw]"></div>
            <div className="relative ">
              <img
                className="lg:scale-x-[-1] scale-x-[-1.2] md:h-[40vw] w-full h-[210px] lg:h-[30vw] min-[1900px]:h-[545px] object-cover"
                src={Img}
                alt=""
              />
              <div className="absolute top-[20%] h-full right-0">
                <div className="min-[1900px]:max-w-[520px] max-w-[45vw] lg:max-w-[26vw] pr-3 mx-auto">
                  <h2 className="min-[1900px]:text-[42px] text-[4.5vw] leading-[5.3vw] lg:leading-normal lg:text-[2vw] font-semibold">
                    Quality and Affordable Kitchenware
                  </h2>
                  <p className="min-[1900px]:text-[22px] text-[2vw] pt-2  lg:leading-normal leading-[3vw] lg:text-[1vw] font-medium">
                    Get affordable kitchen ware of all brands through the range
                    of options in our categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="lg:overflow-visible overflow-x-scroll">
          <div className="lg:border-[0.5px] flex mt-[3vw]  justify-around py-5 lg:border-[#7D7D7D] w-[630px] md:w-full ">
            {Items.map((item, index) => {
              return (
                <div className="flex flex-col cursor-pointer gap-y-2 items-center uppercase">
                  <img
                    className="min-[1900px]:size-[76px] size-[34px] lg:size-[4vw]"
                    src={item.img}
                    alt=""
                  />
                  <p className="min-[1900px]:text-[18px] text-[8px] md:text-[1vw]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM */}

        {/* KITCHEN */}

        <div className="pt-[5vw] lg:px-0 px-6">
          <h2 className="min-[1900px]:text-[28px] text-[21px] lg:text-[1.7vw] font-medium pb-2 lg:pb-9">
            Kitchen Utensils
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-[2.2vw] min-[1900px]:gap-[45px]">
            {Item.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" relative h-fit md:h-[300px] lg:h-fit lg:overflow-hidden cursor-pointer duration-500 w-full md:rounded-[8px] rounded-[3px] lg:rounded-[15px]"
                >
                  <div className="py-8 bg-[#EEEEEE] md:rounded-t-[8px] rounded-t-[3px] lg:rounded-t-[15px]  px-6">
                    <img
                      className="min-[1900px]:w-[260px] lg:w-full w-[126px] h-[92px] md:size-[150px] lg:h-[11vw] min-[1900px]:h-[210px] mx-auto"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#0D0D0D] duration-500 gap-3 overflow-hidden flex justify-center items-center md:rounded-b-[8px] rounded-b-[3px] lg:rounded-b-[15px] lg:h-[3vw] h-[33px] min-[1900px]:h-[64px]">
                    <img
                      className="min-[1900px]:w-auto size-[16px] lg:size-[2vw] min-[1900px]:h-auto"
                      src={Cart}
                      alt=""
                    />
                    <p className="text-white text-[9px] lg:text-[1vw] min-[1900px]:text-[18px] font-semibold">
                      Add To Cart
                    </p>
                  </div>
                  <div className="flex justify-between pt-1 lg:pt-5 items-center">
                    <div className="lg:space-y-[8px] space-y-[5px]">
                      <p className="font-semibold text-black lg:text-[1vw] text-[10px] min-[1900px]:text-[20px]">
                        Lorem Ipsum
                      </p>
                      <p className="text-[#E78707] lg:text-base text-[10px] font-medium min-[1900px]:text-[20px] ">
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

        {/* COOLING FREEZING */}

        <div className="lg:pt-[5vw] pt-[13vw] lg:px-0 px-6">
          <h2 className="min-[1900px]:text-[28px] text-[21px] lg:text-[1.7vw] font-medium pb-2 lg:pb-9">
            Cooling and Freezing
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-[2.2vw] min-[1900px]:gap-[45px]">
            {Item.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" relative h-fit md:h-[300px] lg:h-fit lg:overflow-hidden cursor-pointer duration-500 w-full md:rounded-[8px] rounded-[3px] lg:rounded-[15px]"
                >
                  <div className="py-8 bg-[#EEEEEE] md:rounded-t-[8px] rounded-t-[3px] lg:rounded-t-[15px]  px-6">
                    <img
                      className="min-[1900px]:w-[260px] lg:w-full w-[126px] h-[92px] md:size-[150px] lg:h-[11vw] min-[1900px]:h-[210px] mx-auto"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#0D0D0D] duration-500 gap-3 overflow-hidden flex justify-center items-center md:rounded-b-[8px] rounded-b-[3px] lg:rounded-b-[15px] lg:h-[3vw] h-[33px] min-[1900px]:h-[64px]">
                    <img
                      className="min-[1900px]:w-auto size-[16px] lg:size-[2vw] min-[1900px]:h-auto"
                      src={Cart}
                      alt=""
                    />
                    <p className="text-white text-[9px] lg:text-[1vw] min-[1900px]:text-[18px] font-semibold">
                      Add To Cart
                    </p>
                  </div>
                  <div className="flex justify-between pt-1 lg:pt-5 items-center">
                    <div className="lg:space-y-[8px] space-y-[5px]">
                      <p className="font-semibold text-black lg:text-[1vw] text-[10px] min-[1900px]:text-[20px]">
                        Lorem Ipsum
                      </p>
                      <p className="text-[#E78707] lg:text-base text-[10px] font-medium min-[1900px]:text-[20px] ">
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

        {/* HYGIENE */}

        <div className="lg:pt-[5vw] pt-[13vw] lg:px-0 px-6">
          <h2 className="min-[1900px]:text-[28px] text-[21px] lg:text-[1.7vw] font-medium pb-2 lg:pb-9">
            Hygiene and Cleaning
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-[2.2vw] min-[1900px]:gap-[45px]">
            {Item.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" relative h-fit md:h-[300px] lg:h-fit lg:overflow-hidden cursor-pointer duration-500 w-full md:rounded-[8px] rounded-[3px] lg:rounded-[15px]"
                >
                  <div className="py-8 bg-[#EEEEEE] md:rounded-t-[8px] rounded-t-[3px] lg:rounded-t-[15px]  px-6">
                    <img
                      className="min-[1900px]:w-[260px] lg:w-full w-[126px] h-[92px] md:size-[150px] lg:h-[11vw] min-[1900px]:h-[210px] mx-auto"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="bg-[#0D0D0D] duration-500 gap-3 overflow-hidden flex justify-center items-center md:rounded-b-[8px] rounded-b-[3px] lg:rounded-b-[15px] lg:h-[3vw] h-[33px] min-[1900px]:h-[64px]">
                    <img
                      className="min-[1900px]:w-auto size-[16px] lg:size-[2vw] min-[1900px]:h-auto"
                      src={Cart}
                      alt=""
                    />
                    <p className="text-white text-[9px] lg:text-[1vw] min-[1900px]:text-[18px] font-semibold">
                      Add To Cart
                    </p>
                  </div>
                  <div className="flex justify-between pt-1 lg:pt-5 items-center">
                    <div className="lg:space-y-[8px] space-y-[5px]">
                      <p className="font-semibold text-black lg:text-[1vw] text-[10px] min-[1900px]:text-[20px]">
                        Lorem Ipsum
                      </p>
                      <p className="text-[#E78707] lg:text-base text-[10px] font-medium min-[1900px]:text-[20px] ">
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
    </div>
  );
};

export default Refrigeration;
