import React from "react";
import { FaStar } from "react-icons/fa";
import { PiQuotes } from "react-icons/pi";
import Img from "../../Images/person.png";

const Customers = () => {
  return (
    <div className="bg-[url('/src/Images/customer.png')] bg-cover bg-center before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#000000B2] relative h-[361px] lg:h-[38vw] 2xl:h-[36vw] min-[1900px]:h-[745px] w-full">
      <div className="w-full flex items-center gap-y-[1vw] min-[1900px]:gap-y-6 text-white absolute top-7 px-6 lg:top-[3vw]  flex-col ">
        <h2 className="min-[1900px]:text-[45px] text-[20px] lg:text-[3vw] font-medium">
          Why Customers Love Us?
        </h2>
        <p className="max-w-[626px] text-center font-medium text-[13px] md:text-[15px] lg:text-[1.3vw] min-[1900px]:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet urna sed imperdiet.
        </p>
      </div>
      <div className="absolute min-[1900px]:overflow-visible channel overflow-x-scroll bottom-10 lg:bottom-[3vw] md:px-10 min-[1200px]:px-[145px] min-[1020px]:px-[60px] px-6 left-0 w-full">
        <div className="lg:max-w-[1600px] min-w-[1000px] grid grid-cols-3 xl:grid-cols-3 gap-x-6 mx-auto">
          <div className="bg-white min-[1900px]:space-y-[20px] space-y-[13px] relative lg:h-[20vw] min-[1200px]:h-[20vw] 2xl:h-[18vw] min-[1900px]:h-[386px] lg:px-8 p-5 lg:pt-[3vw] w-full lg:w-full">
            <PiQuotes className="rotate-[180deg] size-[17px] lg:size-[1.7vw] text-[#03A84E]" />
            <div className="flex items-center">
              <FaStar className="text-[#03A84E] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#03A84E] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#03A84E] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#03A84E] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#03A84E] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
            </div>
            <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw]  text-[#0D0D0D] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel ex tellus.
            </p>
            <div className="flex items-center gap-x-5  lg:pt-[.6vw] xl:pt-4">
              <img
                className="min-[1900px]:size-[69px] size-[28px] lg:size-[4vw] object-cover rounded-full"
                src={Img}
                alt=""
              />
              <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw] font-semibold">
                Victor Dwaelo
              </p>
            </div>
            <div className="bg-[#03A84E] w-[191px] h-[13px] absolute bottom-0 right-0"></div>
          </div>
          <div className="bg-white min-[1900px]:space-y-[20px] space-y-[13px] 2xl:h-[18vw] relative lg:h-[20vw] min-[1200px]:h-[20vw] min-[1900px]:h-[386px] lg:px-8 p-5 lg:pt-[3vw] w-full">
            <PiQuotes className="rotate-[180deg] size-[17px] lg:size-[1.7vw] text-[#03A84E]" />
            <div className="flex items-center">
              <FaStar className="text-[#F90F08] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#F90F08] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#F90F08] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#F90F08] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#F90F08] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
            </div>
            <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw]  text-[#0D0D0D] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel ex tellus.
            </p>
            <div className="flex items-center gap-x-5 lg:pt-[.6vw] xl:pt-4">
              <img
                className="min-[1900px]:size-[69px] size-[28px] lg:size-[4vw] object-cover rounded-full"
                src={Img}
                alt=""
              />
              <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw] font-semibold">
                Victor Dwaelo
              </p>
            </div>
            <div className="bg-[#F90F08] w-[191px] h-[13px] absolute bottom-0 right-0"></div>
          </div>
          <div className="bg-white min-[1900px]:space-y-[20px] space-y-[13px] 2xl:h-[18vw] relative lg:h-[20vw] min-[1200px]:h-[20vw] min-[1900px]:h-[386px] lg:px-8 p-5 lg:pt-[3vw] w-full">
            <PiQuotes className="rotate-[180deg] size-[17px] lg:size-[1.7vw] text-[#E76D07]" />
            <div className="flex items-center">
              <FaStar className="text-[#E76D07] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#E76D07] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#E76D07] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#E76D07] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
              <FaStar className="text-[#E76D07] size-[16px] lg:size-[1.4vw] min-[1900px]:size-[32px]" />
            </div>
            <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw]  text-[#0D0D0D] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel ex tellus.
            </p>
            <div className="flex items-center gap-x-5 lg:pt-[.6vw] xl:pt-4">
              <img
                className="min-[1900px]:size-[69px] size-[28px] lg:size-[4vw] object-cover rounded-full"
                src={Img}
                alt=""
              />
              <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw] font-semibold">
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
