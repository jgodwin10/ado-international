import React from "react";
import Img from "../../Images/first.png";
import Img1 from "../../Images/second.png";
import Img2 from "../../Images/third.png";
import Img3 from "../../Images/four.png";

const Body = () => {
  return (
    <div className="lg:py-20 py-[5vw]">
      <div className="max-w-[1700px] pb-[7vw] pt-[2vw] md:text-start text-center lg:pb-20 space-y-[1vw] 2xl:space-y-[25px] mx-auto md:px-10 min-[1200px]:px-[145px] min-[1020px]:px-[60px] px-6">
        <p className="text-[#E78707] text-[2vw] md:text-[1vw] 2xl:text-[18px] font-medium">
          A Taste of Home, Everywhere You Go
        </p>
        <h2 className="text-[#101010] font-semibold text-[5vw] md:text-[2vw] 2xl:text-[45px]">
          Ado International
        </h2>
        <p className="text-[#1E1E1E] text-[2.2vw] md:text-[1vw] 2xl:text-[18px] font-medium">
          Ado International is a cherished local restaurant chain with a growing
          national presence and aspirations to become a renowned international
          brand. Known for its dedication to authentic flavors and exceptional
          hospitality, Ado International offers a dining experience that brings
          the warmth and familiarity of home-cooked meals to customers wherever
          they are.
        </p>
      </div>
      <div className="bg-[url('./Images/about.png')] h-[130vw] bg-cover bg-center before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#E7870799] relative 2xl:max-h-[430px] 2xl:min-h-[428px] md:h-[22vw] lg:h-[40vh] w-full">
        <div className="flex z-[99999] flex-col md:gap-y-[1vw] 2xl:gap-y-5 items-center text-white pt-[4vw] 2xl:pt-28 absolute top-0 left-0 w-full h-full">
          <h2 className="2xl:text-[45px] text-[21px] md:text-[2vw] font-semibold">
            Company Goals & Ethics
          </h2>
          <p className="2xl:text-[18px] text-[2.2vw] md:text-[1vw] font-medium">
            Strategic objectives guiding our journey towards success and growth.
          </p>
        </div>
        <div className="absolute top-[20vw] md:top-auto md:-bottom-[6.9vw] 2xl:-bottom-[35%] left-0 w-full">
          <div className="max-w-[1700px] mx-auto grid md:grid-cols-2 gap-4 md:gap-8 md:px-10 min-[1200px]:px-[145px] min-[1020px]:px-[60px] px-6">
            <div className="w-full space-y-[1vw] md:text-start text-center 2xl:py-16 2xl:px-20 md:py-[3vw] p-[8vw] md:px-[4vw] about bg-white">
              <h2 className="2xl:text-[22px] text-[4vw] md:text-[1.2vw] font-semibold text-black">
                Our Mission
              </h2>
              <p className="md:text-[.9vw] text-[3vw] 2xl:text-[18px] font-medium">
                To provide a welcoming dining experience that celebrates the
                rich culinary traditions of our region, delivering authentic,
                high-quality meals that make every customer feel at home.
              </p>
            </div>
            <div className="w-full space-y-[1vw] md:text-start text-center 2xl:py-16 2xl:px-20 md:py-[3vw] p-[8vw] md:px-[4vw] about bg-white">
              <h2 className="2xl:text-[22px] text-[4vw] md:text-[1.2vw] font-semibold text-black">
                Our Vision
              </h2>
              <p className="md:text-[.9vw] text-[3vw] 2xl:text-[18px] font-medium">
                To become a leading national and international brand recognized
                for its authentic cuisine, exceptional service, and commitment
                to community and sustainability, while continuously innovating
                to meet the evolving tastes and preferences of our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:pt-[250px] pt-[13vw] space-y-[15vw] md:space-y-0 pb-[15vw] lg:pt-[20vh] max-w-[1700px] flex items-center flex-col  md:grid grid-cols-4 md:gap-x-[30px] md:pb-3 md:px-[59px] px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-[13px]">
          <img
            className="2xl:size-[68px] size-[16vw] md:size-[4vw] lg:size-[5vw]"
            src={Img}
            alt=""
          />
          <div className="space-y-[1vw] md:text-start text-center">
            <h2 className="2xl:text-[22px] text-[5vw] md:text-[1.2vw] font-semibold text-black">
              Fast Shipping
            </h2>
            <p className="2xl:text-[16px] text-[4vw] md:text-[.8vw] font-medium">
              Fast and reliable shipping to you
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-[13px]">
          <img
            className="2xl:size-[68px] size-[16vw] md:size-[4vw] lg:size-[5vw]"
            src={Img1}
            alt=""
          />
          <div className="space-y-[1vw] md:text-start text-center">
            <h2 className="2xl:text-[22px] text-[5vw] md:text-[1.2vw] font-semibold text-black">
              Online Support
            </h2>
            <p className="2xl:text-[16px] text-[4vw] md:text-[.8vw] font-medium">
              24 hours a day, 7 days a week
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-[13px]">
          <img
            className="2xl:size-[68px] size-[16vw] md:size-[4vw] lg:size-[5vw]"
            src={Img2}
            alt=""
          />
          <div className="space-y-[1vw] md:text-start text-center">
            <h2 className="2xl:text-[22px] text-[5vw] md:text-[1.2vw] font-semibold text-black">
              Flexible Payment
            </h2>
            <p className="2xl:text-[16px] text-[4vw] md:text-[.8vw] font-medium">
              Pay with Multiple Credit Cards
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-[13px]">
          <img
            className="2xl:size-[68px] size-[16vw] md:size-[4vw] lg:size-[5vw]"
            src={Img3}
            alt=""
          />
          <div className="space-y-[1vw] md:text-start text-center">
            <h2 className="2xl:text-[22px] text-[5vw] md:text-[1.2vw] font-semibold text-black">
              Money Guarantee
            </h2>
            <p className="2xl:text-[16px] text-[4vw] md:text-[.8vw] font-medium">
              Within 7 days for an exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
