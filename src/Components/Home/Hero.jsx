import React, { useEffect, useState } from "react";
import Img from "../../Images/hero.png";
import Img1 from "../../Images/hero1.png";
import Img2 from "../../Images/hero2.png";
import Img3 from "../../Images/hero3.png";
import Img4 from "../../Images/hero4.png";
import Img5 from "../../Images/hero5.png";
import Logo from "../../Images/Logo.png";
import Img6 from "../../Images/hero6.png";
import Nav from "../../Images/align-center.png";
import Cart from "../../Images/shopping-cart.png";
import User from "../../Images/user.png";
import Heart from "../../Images/heart.png";
import { NavLink } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import Chevron from "../../Images/chevron-right.png";
import HeartNav from "../../Images/heart-rounded.png";
import CartNav from "../../Images/shopping.png";
import Bell from "../../Images/bell.png";
import Settings from "../../Images/settings.png";
import Help from "../../Images/help-circle.png";
import UserNav from "../../Images/user-circle.png";

const Hero = () => {
  const image = [Img, Img1, Img2, Img3, Img4, Img5, Img6];
  const [Image, setImage] = useState(0);

  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Image == 6) {
        setImage(0);
      } else {
        setImage(Image + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [image]);

  return (
    <div className="md:px-[80px] overflow-hidden bg-[#fef9f3] md:h-[175vw] h-[195vw] lg:h-[90vh]  2xl:h-[90vh] w-full relative px-6">
      <div
        className={` absolute top-0 md:px-[80px] lg:py-6 left-0 w-full z-[999]`}
      >
        <div
          className={`max-w-[1600px]  hidden  z-[9999] lg:flex items-center lg:gap-[10px] xl:gap-[21px] justify-between  mx-auto`}
        >
          <img
            className="2xl:h-[50px] 2xl:w-[223px] w-[10vw]"
            src={Logo}
            alt=""
          />
          <div className="flex justify-evenly  duration-500 font-medium p 2xl:gap-1  items-center flex-1 ">
            <NavLink className={`${Image == 0 && "text-[#E78707] font-bold"}`}>
              Kitchen
            </NavLink>
            <NavLink className={`${Image == 1 && "text-[#BA0000] font-bold"}`}>
              Refrigeration
            </NavLink>
            <NavLink className={`${Image == 2 && "text-[#03A84E] font-bold"}`}>
              Table Ware
            </NavLink>
            <NavLink className={`${Image == 3 && "text-[#0D0D0D] font-bold"}`}>
              F&B
            </NavLink>
            <NavLink className={`${Image == 4 && "text-[#E78707] font-bold"}`}>
              Furniture
            </NavLink>
            <NavLink className={`${Image == 5 && "text-[#BA0000] font-bold"}`}>
              Hotel
            </NavLink>
            <NavLink className={`${Image == 6 && "font-bold"} text-white`}>
              House Keeping
            </NavLink>
          </div>
          <button className="border-[2px] p font-bold hover:scale-[1.1] duration-500 border-white text-white 2xl:w-[190px] w-[10vw] 2xl:h-[60px] h-[3vw]  rounded-full">
            Flea Market
          </button>
        </div>
      </div>
      <div className="bg-white items-center flex lg:hidden fixed z-[999999] left-0 w-full -top-1 justify-between py-6 px-6">
        <div className="flex items-center gap-x-4">
          <img
            onClick={() => setNavOpen(true)}
            className="cursor-pointer"
            src={Nav}
            alt=""
          />
          <img className="w-[110px]" src={Logo} alt="" />
        </div>
        <div className="flex gap-x-[13px] items-center">
          <img
            className="size-[6vw] sm:size-auto cursor-pointer"
            src={Heart}
            alt=""
          />
          <img
            className="size-[6vw] sm:size-auto cursor-pointer"
            src={Cart}
            alt=""
          />
          <img
            className="size-[6vw] sm:size-auto cursor-pointer"
            src={User}
            alt=""
          />
        </div>
      </div>

      {/* NAVBAR VIEW */}
      <div
        className={`fixed top-0 ${
          navOpen ? "translate-x-0" : "-translate-x-[120vw]"
        } duration-500 left-0 w-[90%] h-full bg-white z-[9999999]`}
      >
        <div className="flex px-6 items-center gap-x-7 py-4">
          <LiaTimesSolid
            onClick={() => setNavOpen(false)}
            className="size-[8vw]"
          />
          <img className="w-[110px]" src={Logo} alt="" />
        </div>
        <div className="border border-[#E9E9E9]"></div>
        <div className="overflow-y-scroll channel h-full">
          <div className="px-6 text-[15px] space-y-[35px] font-medium py-3">
            <div className="flex  justify-between items-center">
              <p>Kitchen</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>Refrigeration</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>Table Ware</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>F&B</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>Furniture</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>Hotel</p>
              <img src={Chevron} alt="" />
            </div>
            <div className="flex  justify-between items-center">
              <p>House Keeping</p>
              <img src={Chevron} alt="" />
            </div>
          </div>
          <div className="border mt-3 border-[#E9E9E9]"></div>

          <div className="px-6 text-[15px] space-y-[35px] font-medium py-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={HeartNav} alt="" />
                <p>Liked Items</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={CartNav} alt="" />
                <p>Cart</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={Bell} alt="" />
                <p>Notifications</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
          </div>
          <div className="border mt-3 border-[#E9E9E9]"></div>

          <div className="px-6 text-[15px] space-y-[35px] font-medium py-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={Settings} alt="" />
                <p>Settings</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={Help} alt="" />
                <p>Help & Support</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <img src={UserNav} alt="" />
                <p>Login/Signup</p>
              </div>
              <img className="rotate-[270deg]" src={Chevron} alt="" />
            </div>
          </div>

          <div className="px-6 pt-6 mb-32">
            <button className="bg-[#E78707] hover:scale-[1.05] w-full duration-500 text-[15px] font-medium text-white h-[46px] rounded-[6px]">
              Flea Market
            </button>
          </div>
        </div>
      </div>

      {/* END */}

      <div className="max-w-[1600px] pt-[8.6vw]  mx-auto">
        <div className=" hidden lg:block lg:max-w-[25vw] space-y-[2vw]">
          <div className="space-y-[16px]">
            {Image == 0 && (
              <>
                <h2 className="text-[#E78707] h2 font-bold">
                  Premium Kitchenwares
                </h2>
                <p className="text-[#0D0D0D] leading-[1.5vw] p">
                  Top-quality kitchenware for every culinary need. Elevate your
                  cooking experience with our premium products.
                </p>
              </>
            )}
            {Image == 1 && (
              <>
                <h2 className="text-[#BA0000] h2 font-bold">
                  Reliable Refridgerators
                </h2>
                <p className="text-[#0D0D0D] leading-[1.5vw] p">
                  Keep your food fresh with our reliable refrigeration
                  solutions. Energy-efficient, durable, and designed for
                  convenience.
                </p>
              </>
            )}
            {Image == 2 && (
              <>
                <h2 className="text-[#03A84E] h2 font-bold">
                  Elegant Tableware
                </h2>
                <p className="text-[#0D0D0D] leading-[1.5vw] p">
                  Stylish tableware for any dining occasion. Impress your guests
                  and enhance every meal with our elegant collections.
                </p>
              </>
            )}
            {Image == 3 && (
              <>
                <h2 className="text-[#0D0D0D] h2 font-bold">
                  Standard F&B Supplies
                </h2>
                <p className="text-[#0D0D0D] leading-[1.5vw] p">
                  Comprehensive F&B products for all your needs. High-quality
                  solutions designed for every event and occasion.
                </p>
              </>
            )}
            {Image == 4 && (
              <>
                <h2 className="text-[#E78707] h2 font-bold">
                  Durable Furnitures
                </h2>
                <p className="text-[#0D0D0D] leading-[1.5vw] p">
                  Durable and stylish furniture for any space. Comfort,
                  elegance, and functionality combined for your satisfaction.
                </p>
              </>
            )}
            {Image == 5 && (
              <>
                <h2 className="text-[#BA0000] h2 font-bold">
                  Hotel Comfort Supplies
                </h2>
                <p className="text-[#0D0D0D] leading-[1.5vw] p">
                  Premium supplies for unmatched hotel comfort. Enhance your
                  guests' stay with our top-quality products.
                </p>
              </>
            )}
            {Image == 6 && (
              <>
                <h2 className="text-[#03A84E] h2 font-bold">
                  Housekeeping Essentials
                </h2>
                <p className="text-[#0D0D0D] leading-[1.5vw] p">
                  Keep your space spotless and organized. Reliable tools
                  designed for every cleaning task, ensuring pristine results.
                </p>
              </>
            )}
          </div>
          <button
            className={` ${Image == 0 && "bg-[#E78707]"}  ${
              Image == 1 && "bg-[#BA0000]"
            }  ${Image == 2 && "bg-[#03A84E]"}  ${
              Image == 3 && "bg-[#161616]"
            }  ${Image == 4 && "bg-[#E78707]"}  ${
              Image == 5 && "bg-[#BA0000]"
            }  ${
              Image == 6 && "bg-[#03A84E]"
            } hover:scale-[1.1] duration-500 text-white uppercase  h-[3.5vw] w-[11vw]  rounded-[1vw] p font-medium`}
          >
            order now!
          </button>
        </div>

        {/* MOBILE */}

        <div className="absolute bottom-0 lg:hidden left-0 w-full h-[50%]">
          <div className="px-6 py-[7vw]">
            <div className="2xl:max-w-[741px] lg:hidden lg:max-w-[50vw] space-y-[6vw]">
              <div className="space-y-[3.5vw]">
                {Image == 0 && (
                  <>
                    <h2 className="text-[#E78707] text-[10vw] md:max-w-[60vw] md:text-[7vw] md:leading-[110px] font-bold">
                      Premium Kitchenwares
                    </h2>
                    <p className="text-[#0D0D0D] text-[2.3vw] 2xl:text-[20px]">
                      Top-quality kitchenware for every culinary need. Elevate
                      your cooking experience with our premium products.
                    </p>
                  </>
                )}
                {Image == 1 && (
                  <>
                    <h2 className="text-[#BA0000] text-[10vw] md:max-w-[60vw] md:text-[7vw] md:leading-[110px] font-bold">
                      Reliable Refridgerators
                    </h2>
                    <p className="text-[#0D0D0D] text-[2.3vw] 2xl:text-[20px]">
                      Keep your food fresh with our reliable refrigeration
                      solutions. Energy-efficient, durable, and designed for
                      convenience.
                    </p>
                  </>
                )}
                {Image == 2 && (
                  <>
                    <h2 className="text-[#03A84E] text-[10vw] md:max-w-[60vw] md:text-[7vw] md:leading-[110px] font-bold">
                      Elegant Tableware
                    </h2>
                    <p className="text-[#0D0D0D] text-[2.3vw] 2xl:text-[20px]">
                      Stylish tableware for any dining occasion. Impress your
                      guests and enhance every meal with our elegant
                      collections.
                    </p>
                  </>
                )}
                {Image == 3 && (
                  <>
                    <h2 className="text-[#0D0D0D] text-[10vw] md:max-w-[60vw] md:text-[7vw] md:leading-[110px] font-bold">
                      Standard F&B Supplies
                    </h2>
                    <p className="text-[#0D0D0D] text-[2.3vw] 2xl:text-[20px]">
                      Comprehensive F&B products for all your needs.
                      High-quality solutions designed for every event and
                      occasion.
                    </p>
                  </>
                )}
                {Image == 4 && (
                  <>
                    <h2 className="text-[#E78707] text-[10vw] md:max-w-[60vw] md:text-[7vw] md:leading-[110px] font-bold">
                      Durable Furnitures
                    </h2>
                    <p className="text-[#0D0D0D] text-[2.3vw] 2xl:text-[20px]">
                      Durable and stylish furniture for any space. Comfort,
                      elegance, and functionality combined for your
                      satisfaction.
                    </p>
                  </>
                )}
                {Image == 5 && (
                  <>
                    <h2 className="text-[#BA0000] text-[10vw] md:max-w-[60vw] md:text-[7vw] md:leading-[110px] font-bold">
                      Hotel Comfort Supplies
                    </h2>
                    <p className="text-[#0D0D0D] text-[2.3vw] 2xl:text-[20px]">
                      Premium supplies for unmatched hotel comfort. Enhance your
                      guests' stay with our top-quality products.
                    </p>
                  </>
                )}
                {Image == 6 && (
                  <>
                    <h2 className="text-[#03A84E] text-[10vw] md:max-w-[60vw] md:text-[7vw] md:leading-[110px] font-bold">
                      Housekeeping Essentials
                    </h2>
                    <p className="text-[#0D0D0D] text-[2.3vw] 2xl:text-[20px]">
                      Keep your space spotless and organized. Reliable tools
                      designed for every cleaning task, ensuring pristine
                      results.
                    </p>
                  </>
                )}
              </div>
              <button
                className={` ${Image == 0 && "bg-[#E78707]"}  ${
                  Image == 1 && "bg-[#BA0000]"
                }  ${Image == 2 && "bg-[#03A84E]"}  ${
                  Image == 3 && "bg-[#161616]"
                }  ${Image == 4 && "bg-[#E78707]"}  ${
                  Image == 5 && "bg-[#BA0000]"
                }  ${
                  Image == 6 && "bg-[#03A84E]"
                } hover:scale-[1.1] duration-500 text-white uppercase w-[23vw] h-[7vw] rounded-[2vw] text-[2.3vw] font-medium`}
              >
                order now!
              </button>
            </div>

            <div className="grid grid-cols-7 w-full 2xl:gap-6 gap-[1vw] pt-10">
              {image.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setImage(index)}
                    className={`size-[12vw] rounded-[2.5vw] cursor-pointer ${
                      Image == index && index == 0
                        ? "hero border-[2px] border-[#E78707]"
                        : ""
                    } ${
                      Image == index && index == 1
                        ? "hero border-[2px] border-[#BA0000]"
                        : ""
                    } ${
                      Image == index && index == 2
                        ? "hero border-[2px] border-[#03A84E]"
                        : ""
                    }
                ${
                  Image == index && index == 3
                    ? "hero border-[2px] border-[#161616]"
                    : ""
                }
                ${
                  Image == index && index == 4
                    ? "hero border-[2px] border-[#E78707]"
                    : ""
                } 
                ${
                  Image == index && index == 5
                    ? "hero border-[2px] border-[#BA0000]"
                    : ""
                }
                ${
                  Image == index && index == 6
                    ? "hero border-[2px] border-[#03A84E]"
                    : ""
                } bg-white hover:scale-[1.1] duration-500 flex justify-center items-center`}
                  >
                    <img className=" size-[7vw]" src={item} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-7 w-[50vw] hidden 2xl:w-[825px] 2xl:gap-6 gap-[1vw] pt-20">
          {image.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setImage(index)}
                className={`2xl:size-[105px] lg:size-[5vw] size-[48px] rounded-[1.2vw] cursor-pointer ${
                  Image == index && index == 0
                    ? "hero border-[2px] border-[#E78707]"
                    : ""
                } ${
                  Image == index && index == 1
                    ? "hero border-[2px] border-[#BA0000]"
                    : ""
                } ${
                  Image == index && index == 2
                    ? "hero border-[2px] border-[#03A84E]"
                    : ""
                }
                ${
                  Image == index && index == 3
                    ? "hero border-[2px] border-[#161616]"
                    : ""
                }
                ${
                  Image == index && index == 4
                    ? "hero border-[2px] border-[#E78707]"
                    : ""
                } 
                ${
                  Image == index && index == 5
                    ? "hero border-[2px] border-[#BA0000]"
                    : ""
                }
                ${
                  Image == index && index == 6
                    ? "hero border-[2px] border-[#03A84E]"
                    : ""
                } bg-white hover:scale-[1.1] duration-500 flex justify-center items-center`}
              >
                <img
                  className=" size-[38px] lg:size-[80%]"
                  src={item}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="absolute z-[999] top-10 lg:top-[8vw] right-[10vw] md:right-[15vw] lg:right-[11vw]">
          <img
            className=" w-[80vw] md:w-[70vw] lg:w-[33vw]"
            src={image[Image]}
            alt=""
          />
        </div>
        <div
          className={`absolute ${
            Image == 0
              ? "lg:translate-x-0 translate-y-0"
              : "lg:translate-x-[120vw] -translate-y-[120vh]"
          } duration-500 top-0 z-[99] right-0 w-full lg:w-[32vw] bg-[#E78707] h-[50%] lg:h-full`}
        ></div>
        <div
          className={`absolute ${
            Image == 1
              ? "lg:translate-x-0 translate-y-0"
              : "lg:translate-x-[120vw] -translate-y-[120vh]"
          } duration-500 top-0 z-[99] right-0 w-full lg:w-[32vw] bg-[#BA0000] h-[50%] lg:h-full`}
        ></div>
        <div
          className={`absolute ${
            Image == 2
              ? "lg:translate-x-0 translate-y-0"
              : "lg:translate-x-[120vw] -translate-y-[120vh]"
          } duration-500 top-0 z-[99] right-0 w-full lg:w-[32vw] bg-[#03A84E] h-[50%] lg:h-full`}
        ></div>
        <div
          className={`absolute ${
            Image == 3
              ? "lg:translate-x-0 translate-y-0"
              : "lg:translate-x-[120vw] -translate-y-[120vh]"
          } duration-500 top-0 z-[99] right-0 w-full lg:w-[32vw] bg-[#161616] h-[50%] lg:h-full`}
        ></div>
        <div
          className={`absolute ${
            Image == 4
              ? "lg:translate-x-0 translate-y-0"
              : "lg:translate-x-[120vw] -translate-y-[120vh]"
          } duration-500 top-0 z-[99] right-0 w-full lg:w-[32vw] bg-[#E78707] h-[50%] lg:h-full`}
        ></div>
        <div
          className={`absolute ${
            Image == 5
              ? "lg:translate-x-0 translate-y-0"
              : "lg:translate-x-[120vw] -translate-y-[120vh]"
          } duration-500 top-0 z-[99] right-0 w-full lg:w-[32vw] bg-[#BA0000] h-[50%] lg:h-full`}
        ></div>
        <div
          className={`absolute ${
            Image == 6
              ? "lg:translate-x-0 translate-y-0"
              : "lg:translate-x-[120vw] -translate-y-[120vh]"
          } duration-500 top-0 z-[99] right-0 w-full lg:w-[32vw] bg-[#03A84E] h-[50%] lg:h-full`}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
