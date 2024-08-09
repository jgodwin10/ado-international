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
    <div className="bg-[#FEF9F3] md:px-10 min-[1200px]:px-[145px] min-[1020px]:px-[60px] pl-6">
      <div className="max-w-[1552px] py-8 min-[1900px]:py-16 mx-auto  ">
        <div className="space-y-[10px] text-center">
          <h2 className="text-[#BA0000] text-[11px] lg:text-[1.2vw] min-[1900px]:text-[22px] events font-semibold">
            NEWS & EVENTS
          </h2>
          <p className="min-[1900px]:text-[45px] text-[21px] lg:text-[2vw] events font-semibold">
            Stay in the Know with Us
          </p>
        </div>
        <div className="xl:overflow-visible channel overflow-x-scroll">
          <div className="grid gap-4 min-[1900px]:gap-5 min-w-[900px] xl:w-full md:pt-10 pt-5 min-[1900px]:pt-20 pb-6 grid-cols-3">
            {Image.map((item, index) => {
              return (
                <div
                  key={index}
                  className="min-[1900px]:h-[555px] lg:h-fit h-[340px] eventShadow rounded-[13px] bg-white"
                >
                  <img
                    className="min-[1900px]:h-[294px] lg:h-[14vw] h-[180px] cursor-pointer w-full rounded-t-[13px] object-cover"
                    src={item}
                    alt=""
                  />
                  <div className="min-[1900px]:px-10 px-4 py-5 relative min-[1900px]:py-7">
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-1 items-center">
                        <img
                          className="min-[1900px]:size-auto lg:size-[.7vw] size-[11px]"
                          src={Calender}
                          alt=""
                        />
                        <p className="min-[1900px]:text-[12px] lg:text-[.6vw] text-[7px] event text-[#868686] font-semibold">
                          FEBRUARY 28, 2024
                        </p>
                      </div>
                      <div className="event min-[1900px]:text-base lg:text-[.6vw] text-[7px] gap-1 flex items-center">
                        <img
                          className="min-[1900px]:size-auto lg:size-[.7vw] size-[11px]"
                          src={User}
                          alt=""
                        />
                        <p>
                          BY <span className="text-[#BA0000]">ADMIN</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-black pt-3 min-[1900px]:pt-5 font-semibold text-[13px] lg:text-[1vw] min-[1900px]:text-[22px] min-[1900px]:leading-[34px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="flex items-center gap-4 absolute left-4 min-[1900px]:left-10 w-full -top-2 min-[1900px]:-top-4">
                      <p className="bg-[#BA0000] event w-[83px] min-[1900px]:w-[137px] h-[16px] min-[1900px]:h-[27px] font-semibold flex justify-center items-center rounded-[3px] min-[1900px]:rounded-[6px] text-white text-[7px] min-[1900px]:text-[13px]">
                        CONSULTANCY
                      </p>
                      <p className="bg-[#BA0000] event w-[83px] min-[1900px]:w-[137px] h-[16px] min-[1900px]:h-[27px] font-semibold flex justify-center items-center rounded-[3px] min-[1900px]:rounded-[6px] text-white text-[7px] min-[1900px]:text-[13px]">
                        UNCATEGORIZED
                      </p>
                    </div>
                    <div className="flex items-center gap-2 min-[1900px]:gap-3 pt-10">
                      <p className="text-[#BA0000] cursor-pointer font-medium lg:text-[.9vw] text-[11px] min-[1900px]:text-[18px]">
                        Read More
                      </p>
                      <img
                        className="min-[1900px]:size-auto lg:size-[1vw] cursor-pointer size-[10px]"
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
