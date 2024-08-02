import React from "react";

const Ready = () => {
  return (
    <div className="bg-[#FFCC00] md:px-[50px] px-6 w-full h-[177px] lg:h-[30vh] 2xl:h-[364px]">
      <div className="max-w-[1600px] h-full flex lg:flex-row flex-col justify-evenly lg:justify-between items-center mx-auto">
        <div className="2xl:space-y-8 lg:text-start text-center space-y-[1vw]">
          <h2 className="2xl:text-[45px] text-[21px] lg:text-[3vw] text-[#1D1D1D] font-semibold">
            Ready to get started?
          </h2>
          <p className="text-[#1D1D1D] text-[13px] lg:text-[1.2vw] 2xl:text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <div className="flex items-center lg:w-[40vw] w-full md:w-[70%] 2xl:w-[743px] h-[48px] lg:h-[6vw] 2xl:h-[96px] border pl-4 lg:pl-6 p-3 bg-[#F7F7F7] rounded-[100px]">
          <input
            className="bg-transparent text-[#7D7D7D] placeholder:text-[#7D7D7D] text-[11px] lg:text-[1.2vw] flex-1 2xl:text-[22px]  pl-3 font-medium pr-3 w-[78%] xl:flex-1 outline-none"
            type="email"
            placeholder="Email address"
          />
          <button className="lg:text-[1.2vw] text-[11px] 2xl:text-[22px] md:w-[20%] bg-[#F90F08] hover:scale-[1.05] duration-500 font-medium text-white  rounded-[99px] h-[32px] lg:h-[4vw] 2xl:h-[64px] w-[30%] lg:w-[167px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
