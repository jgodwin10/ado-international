import React from "react";

const Body = () => {
  return (
    <div className="py-20">
      <div className="max-w-[1700px] pb-20 space-y-[25px] mx-auto md:px-[50px] px-6">
        <p className="text-[#E78707] text-[18px] font-medium">
          A Taste of Home, Everywhere You Go
        </p>
        <h2 className="text-[#101010] font-semibold text-[45px]">
          Ado International
        </h2>
        <p className="text-[#1E1E1E] text-[18px] font-medium">
          Ado International is a cherished local restaurant chain with a growing
          national presence and aspirations to become a renowned international
          brand. Known for its dedication to authentic flavors and exceptional
          hospitality, Ado International offers a dining experience that brings
          the warmth and familiarity of home-cooked meals to customers wherever
          they are.
        </p>
      </div>
      <div className="bg-[url('./Images/about.png')] bg-cover bg-center before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#E7870799] relative h-[428px] w-full">
        <div className="flex z-[99999] flex-col gap-y-5 items-center text-white pt-28 absolute top-0 left-0 w-full h-full">
          <h2 className="text-[45px] font-semibold">Company Goals & Ethics</h2>
          <p className="text-[18px] font-medium">
            Strategic objectives guiding our journey towards success and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
