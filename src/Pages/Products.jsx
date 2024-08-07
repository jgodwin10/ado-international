import React, { useState } from "react";
import Img from "../Images/prod3.png";
import Img2 from "../Images/prod2.png";
import Img3 from "../Images/prod4.png";
import { FaStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Products = () => {
  const image = [Img, Img2, Img3, Img];
  const [Image, setImage] = useState(0);

  const [num, setNum] = useState(1);

  return (
    <div>
      <div className="bg-[url('./Images/Contact.png')] bg-cover bg-bottom before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#00000099] relative h-[15vh] md:h-[20vh] lg:h-[28vh] w-full">
        <div className=" absolute md:px-[40px] lg:px-[80px] px-6 top-0 left-0 w-full h-full">
          <div className="flex items-center h-full max-w-[1600px] mx-auto">
            <p className="2xl:text-[65px] text-[6vw] md:text-[3.8vw] font-bold text-white">
              Products
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] md:py-10 pb-10 lg:py-20 md:px-[40px] lg:px-[80px]">
        <div className=" md:grid space-y-5 md:space-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[3.5vw] max-w-[1600px] mx-auto">
          <div className="lg:col-span-2 space-y-8 md:space-y-0 gap-x-9 gap-y-8 md:grid lg:grid-cols-2">
            <div className=" w-full space-y-[3vw] md:space-y-[1.3vw] ">
              <div className="w-full bg-white">
                <img className=" max-h-[450px]" src={image[Image]} alt="" />
              </div>
              <div className="w-full px-4 md:px-0 justify-between gap-x-2 lg:gap-x-1 flex items-center">
                {image.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setImage(index)}
                      className={`w-full 2xl:w-[122px] h-[17vw] md:h-[6vw] lg:h-[4.5vw] 2xl:h-[82px] cursor-pointer ${
                        Image == index
                          ? "border-[1px] rounded-[7px] border-[#FD0505]"
                          : ""
                      } bg-white hover:scale-[1.04] duration-500 flex justify-center items-center`}
                    >
                      <img className=" w-[70%] " src={item} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex px-4 md:px-0 space-y-6 lg:space-y-0 justify-between lg:h-[26vw] flex-col">
              <div>
                <h2 className="md:text-[1.7vw] text-[5vw] pb-3 text-black font-semibold">
                  Chafing Dish 351
                </h2>
                <div className="flex border border-[#E78707] py-[3px] rounded-[9px] text-[#E78707] w-[50%] md:w-[212px] justify-center items-center gap-x-2">
                  <FaStar className="md:size-[1vw] size-[3vw]" />
                  <FaStar className="md:size-[1vw] size-[3vw]" />
                  <FaStar className="md:size-[1vw] size-[3vw]" />
                  <FaStar className="md:size-[1vw] size-[3vw]" />
                  <FaStar className="md:size-[1vw] size-[3vw]" />
                  <p className="lg:text-[14px] text-[3vw]">1 Review</p>
                </div>
                <p className="text-[#1E1E1E] pt-5 text-[4vw] md:text-[1.2vw] font-medium">
                  Regency Equisite Round Rose Gold Glass Lid Chafing Dish 351
                  For Induction use
                </p>
              </div>
              <div className=" space-y-4 md:space-y-[1.2vw] lg:space-y-[.7vw]">
                <p className="text-[#FD0505] text-[6vw] md:text-[1.7vw] font-semibold">
                  ₦18,000
                </p>
                <p className="bg-[#D4FFE7] py-2 px-5 text-center text-[3.6vw] md:text-[1vw] text-[#00AD4D] rounded-[6px]">
                  29 IN STOCK (CAN BE BACKORDERED)
                </p>
                <div className="flex flex-col md:flex-row items-center gap-5">
                  <div className="flex items-center w-full md:w-[40%] justify-between rounded-[7px] border border-[#C9C9C9] px-[24px] py-[3.5vw] md:py-[.8vw]">
                    <p
                      onClick={() => setNum(num - 1)}
                      className="text-[#C9C9C9] select-none cursor-pointer text-[18px] md:text-[1.2vw] font-semibold"
                    >
                      -
                    </p>
                    <p className="text-[#606060] select-none text-[18px] md:text-[1.2vw] font-semibold">
                      {num}
                    </p>
                    <p
                      onClick={() => setNum(num + 1)}
                      className="text-[#C9C9C9] select-none cursor-pointer text-[18px] md:text-[1.2vw] font-semibold"
                    >
                      +
                    </p>
                  </div>
                  <button className="md:w-[60%] w-full bg-[#FD0505] text-[4.8vw] md:text-[1.2vw] hover:scale-[1.05] text-center duration-500 font-semibold text-white py-[3.5vw] md:py-[.8vw] rounded-[7px]">
                    Add to Cart
                  </button>
                </div>
                <button className="w-full bg-[#E78707] text-[4.8vw] md:text-[1.2vw] hover:scale-[1.05] text-center duration-500 font-semibold text-white py-[3.5vw] md:py-[.8vw] rounded-[7px]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* SECOND */}

          <div className="lg:mx-auto px-4 md:px-0 flex flex-col pt-10 md:pt-0 items-center">
            <div className="flex w-full items-center ">
              <input
                className="text-[#B5B5B5] h-[15vw] md:h-[5vw] lg:h-[2.7vw] placeholder:text-[#B5B5B5] flex-1 px-4 outline-none md:text-[1.7vw] lg:text-[1vw] font-medium"
                type="text"
                placeholder="search products..."
              />
              <div className="bg-[#FD0505] flex items-center justify-center cursor-pointer md:w-[81px] w-[74px] h-[15vw] md:h-[5vw]  lg:h-[2.7vw] text-white">
                <CiSearch className="size-[24px] " />
              </div>
            </div>
            <div className="border-[#C9C9C9] hidden md:block border my-8 w-full lg:w-[23vw]"></div>
            <div className=" w-full">
              <div className="lg:max-w-[85%] pt-5 mx-auto">
                <h2 className="lg:text-[1.5vw] text-[4.5vw] md:text-[2vw] pb-8 font-semibold">
                  More like this
                </h2>

                {/* ITEMS */}

                <div className="space-y-6">
                  {image.map((item, index) => {
                    return (
                      <div className="flex cursor-pointer  items-start gap-x-4">
                        <div className="lg:w-[5.6vw] flex justify-center items-center border border-[#C9C9C9] md:w-[10vw] md:h-auto h-[78px] w-[76px] lg:h-[5vw]">
                          <img className="size-[80%]" src={item} alt="" />
                        </div>
                        <div>
                          <p className="text-[#606060] text-[4vw] pb-2 md:text-[1.6vw] lg:text-[1vw]">
                            Chafing Dish with Gold Lid
                          </p>
                          <div className="flex items-center text-[#FFDC00]">
                            <FaStar className="md:size-[1vw] size-[3vw]" />
                            <FaStar className="md:size-[1vw] size-[3vw]" />
                            <FaStar className="md:size-[1vw] size-[3vw]" />
                            <FaStar className="md:size-[1vw] size-[3vw]" />
                            <FaStar className="md:size-[1vw] size-[3vw]" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* END */}
        </div>
      </div>
    </div>
  );
};

export default Products;
