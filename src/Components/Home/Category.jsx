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
    <div className="min-[1900px]:py-20 lg:py-[4vw] py-6 md:px-10 lg:px-[145px] bg-[#fef9f3] px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="min-[1900px]:max-w-[700px] lg:max-w-[40vw]">
            <h2 className="min-[1900px]:text-[45px] text-[5.5vw] sm:text-[3.3vw] lg:text-[1.9vw] font-medium leading-[50px] text-black md:leading-[60px]">
              Browse our Category
            </h2>
            <p className="text-[#0D0D0D] sm:text-[2vw] text-[3vw] md:pt-1  lg:text-[1.2vw] min-[1900px]:text-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet urna sed imperdiet.
            </p>
          </div>
          <div className="lg:flex hidden justify-center gap-3 items-center">
            <p className="underline min-[1900px]:text-[20px] h4 cursor-pointer text-[#F90F08] font-medium">
              View all category
            </p>
            <img className="size-[3vw] cursor-pointer" src={Img} alt="" />
          </div>
        </div>

        {/* ITEMS */}

        <div className=" channel  overflow-y-hidden  overflow-x-scroll">
          <div className="flex min-w-[900px] min-[1900px]:w-full scroll lg:min-w-[1400px] gap-4 pt-6 lg:pt-[3vw] min-[1900px]:pt-16">
            {Items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white category  overflow-hidden cursor-pointer duration-500 w-[170px]  h-fit md:w-full rounded-[15px]"
                >
                  <div className="lg:py-8 p-4 lg:px-6">
                    <img
                      className="lg:w-full h-[89px] w-[120px] lg:h-[10vw] min-[1900px]:h-[210px] mx-auto"
                      src={item.image}
                      alt=""
                    />
                    <div className="lg:pt-[2vw] pt-5 pb-[1vw] gap-y-[8px]">
                      <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw] font-semibold text-black">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0D0D0D] lg:hover:scale-[1.06] duration-500 gap-3 flex justify-center items-center rounded-b-[15px] h-[27px] lg:h-[4vw] min-[1900px]:h-[64px]">
                    <img
                      className="min-[1900px]:w-auto size-[16px] lg:size-[2vw] min-[1900px]:h-auto"
                      src={Cart}
                      alt=""
                    />
                    <p className="text-white text-[8px] lg:text-[1vw] min-[1900px]:text-[18px] font-semibold">
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
