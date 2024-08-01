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
          <div className="2xl:max-w-[428px] text-center lg:text-start w-[210px] mx-auto lg:mx-0 lg:max-w-[26vw]">
            <h2 className="2xl:text-[43px] text-[22px] lg:text-[2.9vw] font-medium text-black lg:leading-[60px]">
              Browse our Popular
              <span className="text-[#E78707] pl-2 lg:pl-0">Products</span>
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

        <div className=" overflow-x-scroll">
          <div className="grid grid-cols-4 w-[1000px] 2xl:grid-cols-5 lg:relative gap-6 pt-16">
            <div className="bg-[#FAEAEA] px-6 py-8 hover lg:hover:scale-[1.1] cursor-pointer duration-500 w-full rounded-[15px]">
              <img className="w-[260px] h-[210px] mx-auto" src={Img1} alt="" />
              <div className="pt-6 gap-y-[8px]">
                <p className="2xl:text-[20px] text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="w-[100px]" src={Img2} alt="" />
                  <p className="font-[poppins]">(88)</p>
                </div>
              </div>
            </div>
            <div className="bg-[#EEEEF8] px-6 py-8 hover lg:hover:scale-[1.1] cursor-pointer duration-500 w-full rounded-[15px]">
              <img className="w-[212px] mx-auto" src={Img3} alt="" />
              <div className="pt-6 gap-y-[8px]">
                <p className="2xl:text-[20px] text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="w-[100px]" src={Img2} alt="" />
                  <p className="font-[poppins]">(88)</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F7F6D7] px-6 py-8 hover lg:hover:scale-[1.1] cursor-pointer duration-500 w-full rounded-[15px]">
              <img className="w-[212px] mx-auto" src={Img4} alt="" />
              <div className="pt-6 gap-y-[8px]">
                <p className="2xl:text-[20px] text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="w-[100px]" src={Img2} alt="" />
                  <p className="font-[poppins]">(88)</p>
                </div>
              </div>
            </div>
            <div className="bg-[#E6F2E0] px-6 py-8 hover lg:hover:scale-[1.1] cursor-pointer duration-500 w-full rounded-[15px]">
              <img className="w-[212px] mx-auto" src={Img5} alt="" />
              <div className="pt-6 gap-y-[8px]">
                <p className="2xl:text-[20px] text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="w-[100px]" src={Img2} alt="" />
                  <p className="font-[poppins]">(88)</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FFE3E3] hidden 2xl:block px-6 py-8 hover lg:hover:scale-[1.1] cursor-pointer duration-500 w-full rounded-[15px]">
              <img className="w-[212px] mx-auto" src={Img6} alt="" />
              <div className="pt-6 gap-y-[8px]">
                <p className="2xl:text-[20px] text-[1vw] font-medium">
                  Everplus Continental
                </p>
                <p className="2xl:text-base text-[14px]">
                  <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                    ₦120
                  </span>
                  <del className="font-[poppins] text-black">$160</del>
                </p>
                <div className="flex items-center gap-2">
                  <img className="w-[100px]" src={Img2} alt="" />
                  <p className="font-[poppins]">(88)</p>
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
        <div className="w-full flex justify-center items-center flex-col pt-20">
          <p className="text-[#0D0D0D] pb-10 2xl:max-w-[899px] max-w-[40vw] text-center text-[1.4vw] 2xl:text-[21px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            aliquet urna sed imperdiet.
          </p>
          <button className="2xl:w-[255px] w-[15vw] text-white 2xl:text-[20px] text-[1.3vw] hover lg:hover:scale-[1.1] h-[6vh] duration-500 font-medium 2xl:h-[78px] bg-[#E78707] rounded-[100px]">
            Place an Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
