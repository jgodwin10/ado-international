import React from "react";
import Img from "../../Images/arrow.png";
import Img1 from "../../Images/hero3.png";
import Img4 from "../../Images/hero4.png";
import Cart from "../../Images/Cart1.png";
import Img2 from "../../Images/prod4.png";
import Img3 from "../../Images/prod3.png";
import Right from "../../Images/right.png";
import Left from "../../Images/left.png";

const Category = () => {
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
    <div className="py-20 md:px-[50px] bg-[#fef9f3] px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="2xl:max-w-[700px] max-w-[40vw] 2xl:space-y-4">
            <h2 className="2xl:text-[45px] text-[1.9vw] font-medium text-black leading-[60px]">
              Browse our Category
            </h2>
            <p className="text-[#0D0D0D] text-[1.2vw] 2xl:text-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet urna sed imperdiet.
            </p>
          </div>
          <div className="flex justify-center gap-3 items-center">
            <p className="underline text-[1.3vw] 2xl:text-[22px] cursor-pointer text-[#F90F08] font-medium">
              View all categories
            </p>
            <img className="size-[66px] cursor-pointer" src={Img} alt="" />
          </div>
        </div>

        {/* ITEMS */}

        <div className="grid grid-cols-4 relative gap-4 2xl:gap-8 pt-16">
          {Items.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white category hover:scale-[1.07] 2xl:hover:scale-[1.1] overflow-hidden cursor-pointer duration-500 w-full rounded-[15px]"
              >
                <div className="py-8 px-6">
                  <img
                    className="w-[260px] h-[210px] mx-auto"
                    src={item.image}
                    alt=""
                  />
                  <div className="pt-6 gap-y-[8px]">
                    <p className="2xl:text-[20px] text-[1.2vw] font-semibold text-black">
                      {item.title}
                    </p>
                  </div>
                </div>
                <div className="bg-[#0D0D0D] hover:scale-[1.06] duration-500 gap-3 flex justify-center items-center rounded-b-[15px] h-[64px]">
                  <img src={Cart} alt="" />
                  <p className="text-white text-[1vw] 2xl:text-[18px] font-semibold">
                    Add To Cart
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
