import React from "react";
import Img from "../../Images/banner.png";
import Img1 from "../../Images/banner2.png";
import Img2 from "../../Images/banner1.png";
import Img3 from "../../Images/hero1.png";
import Img4 from "../../Images/hero2.png";

const Banner = () => {
  return (
    <div className="min-[1900px]:h-[382px] lg:h-[20vw] sm:h-[13vh] h-[83px] bg-[#E78707] relative w-full banner">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="max-w-[1600px] min-[1900px]:relative mx-auto">
          <div className="flex items-center sm:pl-10 lg:pl-0 h-[83px] sm:h-[13vh] lg:h-[20vw] min-[1900px]:h-[382px] lg:pt-6">
            <img
              className="sm:h-[12vh] h-[78px] lg:w-auto lg:h-[20vw]  min-[1900px]:h-auto w-[83px] sm:w-[12vh]"
              src={Img}
              alt=""
            />

            <img
              className="absolute sm:h-[12vh] h-[78px] min-[1900px]:h-[356px] lg:h-[20vw]  left-[17vw] min-[1900px]:left-[230px] top-2"
              src={Img3}
              alt=""
            />
            <img
              className="absolute sm:h-[8vh] h-[48px] min-[1900px]:h-[194px] lg:h-[10vw] left-[29vw] sm:left-[25vw] lg:left-[30vw]  min-[1900px]:left-[460px] bottom-1 lg:bottom-9"
              src={Img2}
              alt=""
            />
            <img
              className="absolute sm:h-[6vh] h-[38px] min-[1900px]:h-[194px] lg:h-[9vw] left-[27vw] lg:left-[28vw] sm:left-[24vw] min-[1900px]:left-[400px] -bottom-1 lg:-bottom-4"
              src={Img4}
              alt=""
            />
            <img
              className="absolute sm:h-[4vh] h-[25px] min-[1900px]:h-[114px] lg:h-[3vw] left-[28vw] lg:left-[30vw] sm:left-[24vw]  min-[1900px]:left-[430px] -bottom-1 lg:bottom-3 min-[1900px]:-bottom-4"
              src={Img1}
              alt=""
            />
          </div>
          <div className="absolute top-3 sm:top-4 lg:top-10 min-[1900px]:right-[80px] sm:right-[16vw] right-[8vw] lg:right-[12.3vw] z-[999]">
            <h2 className="min-[1900px]:text-[35px] text-[2vw] text-white">
              Get Amazing Offers on Our
            </h2>
            <h2 className="min-[1900px]:text-[60px] text-[3vw] font-extrabold lg:pb-[1vw] text-white">
              FLEA MARKET
            </h2>
            <button className="min-[1900px]:w-[205px] w-[58px] h-[17px] text-[4px] lg:w-[15vw] text-white min-[1900px]:text-[20px] lg:text-[1.3vw] hover:scale-[1.1] lg:h-[6vh] duration-500 font-medium min-[1900px]:h-[60px] bg-[#E78707] rounded-[100px]">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[] absolute right-0 top-0 w-[60%] lg:w-[55%] border-l-[70px] lg:border-l-[195px] border-l-transparent border-b-[83px] sm:border-b-[13vh] min-[1900px]:border-b-[382px] lg:border-b-[20vw] border-b-[#0D0D0D] h-full"></div>
    </div>
  );
};

export default Banner;
