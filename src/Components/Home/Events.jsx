import React from "react";
import Img from "../../Images/events.png";
import Img2 from "../../Images/events1.jpeg";
import Img3 from "../../Images/events2.png";
import Img1 from "../../Images/arrow-user.png";
import User from "../../Images/user-event.png";
import Calender from "../../Images/calendar.png";

const Events = () => {
  const Image = [Img, Img2, Img3];

  return (
    <div className="bg-[#FEF9F3]">
      <div className="max-w-[1552px] py-8 lg:py-16 mx-auto md:px-[80px] pl-6 ">
        <div className="space-y-[10px] text-center">
          <h2 className="text-[#BA0000] text-[11px] lg:text-[1.2vw] 2xl:text-[22px] events font-semibold">
            NEWS & EVENTS
          </h2>
          <p className="2xl:text-[45px] text-[21px] lg:text-[3vw] events font-semibold">
            Stay in the Know with Us
          </p>
        </div>
        <div className="xl:overflow-visible channel overflow-x-scroll">
          <div className="grid gap-4 lg:gap-5 min-w-[900px] xl:w-full md:pt-10 pt-5 lg:pt-20 pb-6 grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {Image.map((item, index) => {
              return (
                <div
                  key={index}
                  className="lg:h-[555px] h-[340px] eventShadow rounded-[13px] bg-white"
                >
                  <img
                    className="lg:h-[294px] h-[180px] cursor-pointer w-full rounded-t-[13px] object-cover"
                    src={item}
                    alt=""
                  />
                  <div className="lg:px-10 px-4 py-5 relative lg:py-7">
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-1 items-center">
                        <img
                          className="lg:size-auto size-[11px]"
                          src={Calender}
                          alt=""
                        />
                        <p className="lg:text-[12px] text-[7px] event text-[#868686] font-semibold">
                          FEBRUARY 28, 2024
                        </p>
                      </div>
                      <div className="event lg:text-base text-[7px] gap-1 flex items-center">
                        <img
                          className="lg:size-auto size-[11px]"
                          src={User}
                          alt=""
                        />
                        <p>
                          BY <span className="text-[#BA0000]">ADMIN</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-black pt-3 lg:pt-5 font-semibold text-[13px] lg:text-[1.2vw] 2xl:text-[22px] lg:leading-[34px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="flex items-center gap-4 absolute left-4 lg:left-10 w-full -top-2 lg:-top-4">
                      <p className="bg-[#BA0000] event w-[83px] lg:w-[137px] h-[16px] lg:h-[27px] font-semibold flex justify-center items-center rounded-[3px] lg:rounded-[6px] text-white text-[7px] lg:text-[13px]">
                        CONSULTANCY
                      </p>
                      <p className="bg-[#BA0000] event w-[83px] lg:w-[137px] h-[16px] lg:h-[27px] font-semibold flex justify-center items-center rounded-[3px] lg:rounded-[6px] text-white text-[7px] lg:text-[13px]">
                        UNCATEGORIZED
                      </p>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 pt-10">
                      <p className="text-[#BA0000] cursor-pointer font-medium text-[11px] lg:text-[18px]">
                        Read More
                      </p>
                      <img
                        className="lg:size-auto cursor-pointer size-[10px]"
                        src={Img1}
                        alt=""
                      />
                    </div>
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

export default Events;
