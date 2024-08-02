import React from "react";
import Img from "../../Images/arrow.png";
import Img1 from "../../Images/hero3.png";
import Img2 from "../../Images/star.png";
import Img3 from "../../Images/prod1.png";
import Img4 from "../../Images/prod2.png";
import Img5 from "../../Images/prod3.png";
import Img6 from "../../Images/prod4.png";
import Right from "../../Images/right.png";
import Left from "../../Images/left.png";

const Product = () => {
  return (
    <div className="lg:py-20 py-6 md:px-[50px] px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="2xl:max-w-[428px] text-center lg:text-start max-w-[210px] mx-auto lg:mx-0 lg:max-w-[26vw]">
            <h2 className="2xl:text-[43px] text-[22px] lg:text-[2.9vw] font-medium text-black lg:leading-[60px]">
              Browse our Popular
              <span className="text-[#E78707] pl-2 ">Products</span>
            </h2>
          </div>
          <div className="lg:flex hidden justify-center gap-3 items-center">
            <p className="underline 2xl:text-[20px] text-[1.3vw] cursor-pointer text-[#F90F08] font-medium">
              View all popular goods
            </p>
            <img className="size-[66px] cursor-pointer" src={Img} alt="" />
          </div>
        </div>

        {/* ITEMS */}

        <div className="lg:overflow-visible channel overflow-x-scroll">
          <div className="grid grid-cols-5 lg:grid-cols-4 min-w-[800px] lg:w-full 2xl:grid-cols-5 lg:relative gap-6 pt-6 lg:pt-16">
            <div className="bg-[#FAEAEA] p-3 lg:px-6  lg:py-8 hove lg:hover:scale-[1.1] h-[172px] lg:h-full cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
              <img
                className="lg:w-[260px] w-[126px] h-[92px] lg:h-[210px] mx-auto"
                src={Img1}
                alt=""
              />
              <div className="lg:pt-6 pt-3 gap-y-[6px] lg:gap-y-[8px]">
                <p className="2xl:text-[20px] text-[10px] lg:text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[8px] lg:text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="lg:w-[100px] w-[48px]" src={Img2} alt="" />
                  <p className="font-[poppins] lg:text-[16px] text-[9px]">
                    (88)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#EEEEF8] p-3 lg:px-6  lg:py-8 hove lg:hover:scale-[1.1] h-[172px] lg:h-full cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
              <img
                className="lg:w-[260px] w-[126px] h-[92px] lg:h-[210px] mx-auto"
                src={Img3}
                alt=""
              />
              <div className="lg:pt-6 pt-3 gap-y-[6px] lg:gap-y-[8px]">
                <p className="2xl:text-[20px] text-[10px] lg:text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[8px] lg:text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="lg:w-[100px] w-[48px]" src={Img2} alt="" />
                  <p className="font-[poppins] lg:text-[16px] text-[9px]">
                    (88)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F6D7] p-3 lg:px-6  lg:py-8 hove lg:hover:scale-[1.1] h-[172px] lg:h-full cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
              <img
                className="lg:w-[260px] w-[126px] h-[92px] lg:h-[210px] mx-auto"
                src={Img4}
                alt=""
              />
              <div className="lg:pt-6 pt-3 gap-y-[6px] lg:gap-y-[8px]">
                <p className="2xl:text-[20px] text-[10px] lg:text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[8px] lg:text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="lg:w-[100px] w-[48px]" src={Img2} alt="" />
                  <p className="font-[poppins] lg:text-[16px] text-[9px]">
                    (88)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#E6F2E0] p-3 lg:px-6  lg:py-8 hove lg:hover:scale-[1.1] h-[172px] lg:h-full cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
              <img
                className="lg:w-[260px] w-[126px] h-[92px] lg:h-[210px] mx-auto"
                src={Img5}
                alt=""
              />
              <div className="lg:pt-6 pt-3 gap-y-[6px] lg:gap-y-[8px]">
                <p className="2xl:text-[20px] text-[10px] lg:text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[8px] lg:text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="lg:w-[100px] w-[48px]" src={Img2} alt="" />
                  <p className="font-[poppins] lg:text-[16px] text-[9px]">
                    (88)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#FFE3E3] p-3 lg:px-6  lg:py-8 hove lg:hover:scale-[1.1] h-[172px] lg:h-full cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
              <img
                className="lg:w-[260px] w-[126px] h-[92px] lg:h-[210px] mx-auto"
                src={Img6}
                alt=""
              />
              <div className="lg:pt-6 pt-3 gap-y-[6px] lg:gap-y-[8px]">
                <p className="2xl:text-[20px] text-[10px] lg:text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[8px] lg:text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="lg:w-[100px] w-[48px]" src={Img2} alt="" />
                  <p className="font-[poppins] lg:text-[16px] text-[9px]">
                    (88)
                  </p>
                </div>
              </div>
            </div>

            <img
              className="absolute hidden lg:block cursor-pointer top-[50%] -left-9"
              src={Left}
              alt=""
            />
            <img
              className="absolute hidden lg:block cursor-pointer top-[50%] -right-[34px]"
              src={Right}
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col pt-9 pb-4 lg:pt-20">
          <p className="text-[#0D0D0D] lg:block hidden pb-10 2xl:max-w-[899px] max-w-[40vw] text-center text-[1.4vw] 2xl:text-[21px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            aliquet urna sed imperdiet.
          </p>
          <button className="2xl:w-[255px] w-[127px] lg:w-[15vw] h-[38px] text-white 2xl:text-[20px] text-[10px] lg:text-[1.3vw] hover:scale-[1.05] lg:hover:scale-[1.1] lg:h-[6vh] duration-500 font-medium 2xl:h-[78px] bg-[#E78707] rounded-[100px]">
            Place an Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
