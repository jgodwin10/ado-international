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
      <div className="max-w-[1552px]  py-16 mx-auto md:px-[50px] px-6">
        <div className="space-y-[10px] text-center">
          <h2 className="text-[#BA0000] text-[1.2vw] 2xl:text-[22px] events font-semibold">
            NEWS & EVENTS
          </h2>
          <p className="2xl:text-[45px] text-[3vw] events font-semibold">
            Stay in the Know with Us
          </p>
        </div>
        <div className="grid gap-8 pt-20 pb-6 grid-cols-2 xl:grid-cols-3">
          {Image.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[555px] eventShadow rounded-[13px] bg-white"
              >
                <img
                  className="h-[294px] cursor-pointer w-full rounded-t-[13px] object-cover"
                  src={item}
                  alt=""
                />
                <div className="px-10 relative py-7">
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-1 items-center">
                      <img src={Calender} alt="" />
                      <p className="text-[12px] event text-[#868686] font-semibold">
                        FEBRUARY 28, 2024
                      </p>
                    </div>
                    <div className="event gap-1 flex items-center">
                      <img src={User} alt="" />
                      <p>
                        BY <span className="text-[#BA0000]">ADMIN</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-black pt-5 font-semibold text-[1.2vw] 2xl:text-[22px] leading-[34px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center gap-4 absolute left-10 w-full -top-4">
                    <p className="bg-[#BA0000] event w-[137px] h-[27px] font-semibold flex justify-center items-center rounded-[6px] text-white text-[13px]">
                      CONSULTANCY
                    </p>
                    <p className="bg-[#BA0000] event w-[137px] h-[27px] font-semibold flex justify-center items-center rounded-[6px] text-white text-[13px]">
                      UNCATEGORIZED
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-10">
                    <p className="text-[#BA0000] cursor-pointer font-medium text-[18px]">
                      Read More
                    </p>
                    <img className="cursor-pointer" src={Img1} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
