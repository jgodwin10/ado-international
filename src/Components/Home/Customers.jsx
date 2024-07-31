import React from "react";
import { FaStar } from "react-icons/fa";
import { PiQuotes } from "react-icons/pi";
import Img from "../../Images/person.png";

const Customers = () => {
  return (
    <div className="bg-[url('/src/Images/customer.png')] bg-cover bg-center before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#000000B2] relative h-[700px] 2xl:h-[795px] w-full">
      <div className="w-full flex items-center gap-y-[1vw] 2xl:gap-y-6 text-white absolute top-16  flex-col ">
        <h2 className="2xl:text-[45px] text-[3vw] font-medium">
          Why Customers Love Us?
        </h2>
        <p className="max-w-[626px] text-center font-medium text-[1.2vw] 2xl:text-[22px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet urna sed imperdiet.
        </p>
      </div>
      <div className="absolute bottom-24 md:px-[50px] px-6 left-0 w-full">
        <div className="max-w-[1600px] grid grid-cols-2 xl:grid-cols-3 gap-x-8 mx-auto">
          <div className="bg-white 2xl:space-y-[20px] space-y-[13px] relative h-[26vw] 2xl:h-[386px] px-8 pt-12 w-full">
            <PiQuotes className="rotate-[180deg] size-[34px] text-[#03A84E]" />
            <div className="flex items-center">
              <FaStar className="text-[#03A84E] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#03A84E] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#03A84E] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#03A84E] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#03A84E] size-[1.4vw] 2xl:size-[32px]" />
            </div>
            <p className="2xl:text-[22px] text-[1.2vw leading-[29px] text-[#0D0D0D] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel ex tellus.
            </p>
            <div className="flex items-center gap-x-5  lg:pt-[.7vw] xl:pt-6">
              <img
                className="2xl:size-[69px] size-[4vw] object-cover rounded-full"
                src={Img}
                alt=""
              />
              <p className="2xl:text-[22px] text-[1.2vw font-semibold">
                Victor Dwaelo
              </p>
            </div>
            <div className="bg-[#03A84E] w-[191px] h-[13px] absolute bottom-0 right-0"></div>
          </div>
          <div className="bg-white 2xl:space-y-[20px] space-y-[13px] relative h-[26vw] 2xl:h-[386px] px-8 pt-12 w-full">
            <PiQuotes className="rotate-[180deg] size-[34px] text-[#03A84E]" />
            <div className="flex items-center">
              <FaStar className="text-[#F90F08] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#F90F08] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#F90F08] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#F90F08] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#F90F08] size-[1.4vw] 2xl:size-[32px]" />
            </div>
            <p className="2xl:text-[22px] text-[1.2vw leading-[29px] text-[#0D0D0D] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel ex tellus.
            </p>
            <div className="flex items-center gap-x-5 lg:pt-[.7vw] xl:pt-6">
              <img
                className="2xl:size-[69px] size-[4vw] object-cover rounded-full"
                src={Img}
                alt=""
              />
              <p className="2xl:text-[22px] text-[1.2vw font-semibold">
                Victor Dwaelo
              </p>
            </div>
            <div className="bg-[#F90F08] w-[191px] h-[13px] absolute bottom-0 right-0"></div>
          </div>
          <div className="bg-white hidden xl:block 2xl:space-y-[20px] space-y-[13px] relative h-[26vw] 2xl:h-[386px] px-8 pt-12 w-full">
            <PiQuotes className="rotate-[180deg] size-[34px] text-[#E76D07]" />
            <div className="flex items-center">
              <FaStar className="text-[#E76D07] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#E76D07] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#E76D07] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#E76D07] size-[1.4vw] 2xl:size-[32px]" />
              <FaStar className="text-[#E76D07] size-[1.4vw] 2xl:size-[32px]" />
            </div>
            <p className="2xl:text-[22px] text-[1.2vw leading-[29px] text-[#0D0D0D] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel ex tellus.
            </p>
            <div className="flex items-center gap-x-5 lg:pt-[.7vw] xl:pt-6">
              <img
                className="2xl:size-[69px] size-[4vw] object-cover rounded-full"
                src={Img}
                alt=""
              />
              <p className="2xl:text-[22px] text-[1.2vw font-semibold">
                Victor Dwaelo
              </p>
            </div>
            <div className="bg-[#E76D07] w-[191px] h-[13px] absolute bottom-0 right-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
