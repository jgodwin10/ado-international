import React, { useState } from "react";
import Img from "../Images/prod3.png";
import Img2 from "../Images/prod2.png";
import Img3 from "../Images/prod4.png";
import { FaStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Products = () => {
  const image = [Img, Img2, Img3, Img];
  const [Image, setImage] = useState(0);

  return (
    <div>
      <div className="bg-[url('./Images/Contact.png')] bg-cover bg-bottom before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#00000099] relative h-[284px] w-full">
        <div className=" absolute md:px-[80px] px-6 top-0 left-0 w-full h-full">
          <div className="flex items-center h-full max-w-[1600px] mx-auto">
            <p className="2xl:text-[65px] text-[3.8vw] font-bold text-white">
              Products
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] py-20 md:px-[80px]">
        <div className=" grid grid-cols-3 gap-x-12 max-w-[1600px] mx-auto">
          <div className="col-span-2 gap-x-9 grid grid-cols-2">
            <div className=" w-full space-y-4  ">
              <div className="w-full bg-white ">
                <img className=" h-[450px]" src={image[Image]} alt="" />
              </div>
              <div className="w-full justify-between flex items-center">
                {image.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setImage(index)}
                      className={`w-[7vw] 2xl:w-[122px]  h-[4.5vw] 2xl:h-[82px] cursor-pointer ${
                        Image == index ? "border-[1px] border-[#FD0505]" : ""
                      } bg-white hover:scale-[1.04] rounded-[7px] duration-500 flex justify-center items-center`}
                    >
                      <img className=" size-[4vw]" src={item} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between h-[460px] flex-col">
              <div>
                <h2 className="text-[28px] pb-3 text-black font-semibold">
                  Chafing Dish 351
                </h2>
                <div className="flex border border-[#E78707] py-[3px] rounded-[9px] text-[#E78707] w-[212px] justify-center items-center gap-x-2">
                  <FaStar className="size-[14px]" />
                  <FaStar className="size-[14px]" />
                  <FaStar className="size-[14px]" />
                  <FaStar className="size-[14px]" />
                  <FaStar className="size-[14px]" />
                  <p className="text-[14px]">1 Review</p>
                </div>
                <p className="text-[#1E1E1E] pt-5 text-[18px] font-medium">
                  Regency Equisite Round Rose Gold Glass Lid Chafing Dish 351
                  For Induction use
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-[#FD0505] text-[28px] font-semibold">
                  ₦18,000
                </p>
                <p className="bg-[#D4FFE7] py-2 px-5 text-center text-[18px] text-[#00AD4D] rounded-[6px]">
                  29 IN STOCK (CAN BE BACKORDERED)
                </p>
                <div className="flex items-center gap-5">
                  <div className="flex items-center w-[40%] justify-between rounded-[7px] border border-[#C9C9C9] px-[24px] py-[14px]">
                    <p className="text-[#C9C9C9] cursor-pointer text-[18px] font-semibold">
                      -
                    </p>
                    <p className="text-[#606060] text-[18px] font-semibold">
                      1
                    </p>
                    <p className="text-[#C9C9C9] cursor-pointer text-[18px] font-semibold">
                      +
                    </p>
                  </div>
                  <button className="w-[60%] bg-[#FD0505] text-[18px] hover:scale-[1.05] text-center duration-500 font-semibold text-white py-[14px] rounded-[7px]">
                    Add to Cart
                  </button>
                </div>
                <button className="w-full bg-[#E78707] text-[18px] hover:scale-[1.05] text-center duration-500 font-semibold text-white py-[14px] rounded-[7px]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* SECOND */}

          <div className="mx-auto flex flex-col items-center">
            <div className="flex items-center">
              <input
                className="text-[#B5B5B5] h-[50px] placeholder:text-[#B5B5B5] px-4 outline-none text-[18px] font-medium"
                type="text"
                placeholder="search products..."
              />
              <div className="bg-[#FD0505] flex items-center justify-center cursor-pointer w-[81px] h-[50px] text-white">
                <CiSearch className="size-[24px] " />
              </div>
            </div>
            <div className="border-[#C9C9C9] border my-8 w-[400px]"></div>
            <div className=" w-full">
              <div className="max-w-[85%] mx-auto">
                <h2 className="text-[22px] pb-8 font-semibold">
                  More like this
                </h2>

                {/* ITEMS */}

                <div className="space-y-6">
                  {image.map((item, index) => {
                    return (
                      <div className="flex  items-start gap-x-4">
                        <div className="w-[84px] flex justify-center items-center border border-[#C9C9C9] h-[75px]">
                          <img className="size-[80%]" src={item} alt="" />
                        </div>
                        <div>
                          <p className="text-[#606060] pb-2 text-[18px]">
                            Chafing Dish with Gold Lid
                          </p>
                          <div className="flex items-center text-[#FFDC00]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
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
