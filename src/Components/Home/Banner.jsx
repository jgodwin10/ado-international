import React from "react";
import Img from "../../Images/banner.png";
import Img1 from "../../Images/banner2.png";
import Img2 from "../../Images/banner1.png";
import Img3 from "../../Images/hero1.png";
import Img4 from "../../Images/hero2.png";

const Banner = () => {
  return (
    <div className="lg:h-[382px] md:h-[13vh] h-[83px] bg-[#E78707] relative w-full banner">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="max-w-[1600px] 2xl:relative mx-auto">
          <div className="flex items-center md:pl-10 h-[83px] md:h-[13vh] lg:h-[382px] lg:pt-6">
            <img
              className="md:h-[12vh] h-[78px] lg:w-auto  lg:h-auto w-[83px] md:w-[12vh]"
              src={Img}
              alt=""
            />

            <img
              className="absolute md:h-[12vh] h-[78px] lg:h-[356px]  left-[17vw] 2xl:left-[230px] top-2"
              src={Img3}
              alt=""
            />
            <img
              className="absolute md:h-[8vh] h-[48px] lg:h-[194px] left-[30vw] md:left-[25vw] lg:left-[33vw]  2xl:left-[460px] bottom-2 lg:bottom-9"
              src={Img2}
              alt=""
            />
            <img
              className="absolute md:h-[6vh] h-[38px] lg:h-[194px] left-[27vw] lg:left-[28vw] md:left-[24vw] 2xl:left-[400px] bottom-0 lg:-bottom-4"
              src={Img4}
              alt=""
            />
            <img
              className="absolute md:h-[4vh] h-[25px] lg:h-[114px] left-[28vw] lg:left-[30vw] md:left-[24vw]  2xl:left-[430px] -bottom-1 lg:-bottom-4"
              src={Img1}
              alt=""
            />
          </div>
          <div className="absolute top-3 md:top-4 lg:top-10 2xl:right-[80px] right-[8vw] lg:right-[4.3vw] z-[999]">
            <h2 className="2xl:text-[45px] text-[2.4vw] text-white">
              Get Amazing Offers on Our
            </h2>
            <h2 className="2xl:text-[80px] text-[4vw] font-extrabold lg:pb-6 text-white">
              FLEA MARKET
            </h2>
            <button className="2xl:w-[255px] w-[58px] h-[17px] text-[4px] lg:w-[15vw] text-white 2xl:text-[20px] lg:text-[1.3vw] hover:scale-[1.1] lg:h-[6vh] duration-500 font-medium 2xl:h-[78px] bg-[#E78707] rounded-[100px]">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[] absolute right-0 top-0 w-[60%] lg:w-[55%] border-l-[70px] lg:border-l-[195px] border-l-transparent border-b-[83px] md:border-b-[13vh] lg:border-b-[382px] border-b-[#0D0D0D] h-full"></div>
    </div>
  );
};

export default Banner;
