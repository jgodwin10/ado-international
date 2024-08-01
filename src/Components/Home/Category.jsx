import React from "react";
import Img from "../../Images/arrow.png";
import Img1 from "../../Images/hero3.png";
import Img4 from "../../Images/hero4.png";
import Cart from "../../Images/Cart1.png";
import Img2 from "../../Images/prod4.png";
import Img3 from "../../Images/prod3.png";

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
    <div className="lg:py-20 py-6 md:px-[50px] bg-[#fef9f3] px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="2xl:max-w-[700px] space-y-2  lg:max-w-[40vw] 2xl:space-y-4">
            <h2 className="2xl:text-[45px] text-[21px] lg:text-[1.9vw] font-medium text-black lg:leading-[60px]">
              Browse our Category
            </h2>
            <p className="text-[#0D0D0D] leading-[30px] lg:leading-0 font-medium text-[15px] lg:text-[1.2vw] 2xl:text-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet urna sed imperdiet.
            </p>
          </div>
          <div className="lg:flex hidden justify-center gap-3 items-center">
            <p className="underline text-[1.3vw] 2xl:text-[22px] cursor-pointer text-[#F90F08] font-medium">
              View all categories
            </p>
            <img className="size-[66px] cursor-pointer" src={Img} alt="" />
          </div>
        </div>

        {/* ITEMS */}

        <div className="lg:overflow-visible channel overflow-x-scroll">
          <div className="grid grid-cols-4 w-[700px] lg:w-full relative gap-4 2xl:gap-8 pt-8 pb-6 lg:pt-16">
            {Items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white category lg:hover:scale-[1.07] 2xl:hover:scale-[1.1] overflow-hidden cursor-pointer duration-500 w-[170px]  lg:h-full lg:w-full rounded-[15px]"
                >
                  <div className="lg:py-8 p-4 lg:px-6">
                    <img
                      className="lg:w-[260px] h-[89px] w-[120px] lg:h-[210px] mx-auto"
                      src={item.image}
                      alt=""
                    />
                    <div className="lg:pt-6 pt-5 pb-4 gap-y-[8px]">
                      <p className="2xl:text-[20px] text-[10px] lg:text-[1.2vw] font-semibold text-black">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0D0D0D] lg:hover:scale-[1.06] duration-500 gap-3 flex justify-center items-center rounded-b-[15px] h-[27px] lg:h-[64px]">
                    <img
                      className="lg:w-auto size-[16px] lg:h-auto"
                      src={Cart}
                      alt=""
                    />
                    <p className="text-white text-[8px] lg:text-[1vw] 2xl:text-[18px] font-semibold">
                      Add To Cart
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
