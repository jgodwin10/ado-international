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
    <div className="lg:py-[3vw] py-6 md:px-10 min-[1200px]:px-[145px] min-[1020px]:px-[60px] px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="min-[1900px]:max-w-[408px] text-center lg:text-start max-w-[210px] mx-auto lg:mx-0 lg:max-w-[20vw]">
            <h2 className=" h3 font-medium text-black">
              Browse our Popular
              <span className="text-[#E78707] pl-2 ">Products</span>
            </h2>
          </div>
          <div className="lg:flex hidden justify-center gap-3 items-center">
            <p className="underline min-[1900px]:text-[20px] h4 cursor-pointer text-[#F90F08] font-medium">
              View all popular goods
            </p>
            <img className="size-[3vw] cursor-pointer" src={Img} alt="" />
          </div>
        </div>

        {/* ITEMS */}

        <div className="relative">
          <div className=" channel overflow-y-hidden  overflow-x-scroll">
            <div className="flex w-[800px] min-[1900px]:w-full min-[1400px]:w-full  lg:min-w-[1300px] scroll  gap-4 pt-6 lg:pt-[3vw] min-[1900px]:pt-16">
              <div className="bg-[#FAEAEA] p-3 lg:px-6  lg:py-8  h-[172px] min-[1900px]:h-full lg:h-fit cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
                <img
                  className="lg:w-full w-[126px] h-[92px] min-[1900px]:h-[210px] lg:h-[11vw] mx-auto"
                  src={Img1}
                  alt=""
                />
                <div className="lg:pt-6 pt-3 gap-y-[6px]">
                  <p className="lg:text-[1vw] min-[1900px]:text-[20px] text-[10px] font-medium">
                    Everplus Continental
                  </p>
                  <p className="lg:text-[.8vw] text-[8px]">
                    <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                      ₦120
                    </span>
                    <del className="font-[poppins] text-black">$160</del>
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      className="lg:w-[5vw] min-[1900px]:w-[100px] w-[48px]"
                      src={Img2}
                      alt=""
                    />
                    <p className="font-[poppins] min-[1900px]:text-base lg:text-[12px] text-[9px]">
                      (88)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#EEEEF8] p-3 lg:px-6  lg:py-8 hove  h-[172px] lg:h-fit min-[1900px]:h-full cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
                <img
                  className="lg:w-full w-[126px] h-[92px] min-[1900px]:h-[210px] lg:h-[11vw] mx-auto"
                  src={Img3}
                  alt=""
                />
                <div className="lg:pt-6 pt-3 gap-y-[6px] lg:gap-y-[8px]">
                  <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw] font-medium">
                    Everplus Continental
                  </p>
                  <p className="min-[1900px]:text-base text-[8px] lg:text-[.8vw]">
                    <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                      ₦120
                    </span>
                    <del className="font-[poppins] text-black">$160</del>
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      className="lg:w-[5vw] min-[1900px]:w-[100px] w-[48px]"
                      src={Img2}
                      alt=""
                    />
                    <p className="font-[poppins] min-[1900px]:text-base lg:text-[12px] text-[9px]">
                      (88)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F7F6D7] p-3 lg:px-6  lg:py-8 hove  h-[172px] lg:h-fit min-[1900px]:h-full cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
                <img
                  className="lg:w-full w-[126px] h-[92px] min-[1900px]:h-[210px] lg:h-[11vw] mx-auto"
                  src={Img4}
                  alt=""
                />
                <div className="lg:pt-6 pt-3 gap-y-[6px] lg:gap-y-[8px]">
                  <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw] font-medium">
                    Everplus Continental
                  </p>
                  <p className="min-[1900px]:text-base text-[8px] lg:text-[.8vw]">
                    <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                      ₦120
                    </span>
                    <del className="font-[poppins] text-black">$160</del>
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      className="lg:w-[5vw] min-[1900px]:w-[100px] w-[48px]"
                      src={Img2}
                      alt=""
                    />
                    <p className="font-[poppins] min-[1900px]:text-base lg:text-[12px] text-[9px]">
                      (88)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#E6F2E0] p-3 lg:px-6  lg:py-8 hove  h-[172px] lg:h-fit min-[1900px]:h-full cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
                <img
                  className="lg:w-full w-[126px] h-[92px] min-[1900px]:h-[210px] lg:h-[11vw] mx-auto"
                  src={Img5}
                  alt=""
                />
                <div className="lg:pt-6 pt-3 gap-y-[6px] lg:gap-y-[8px]">
                  <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw] font-medium">
                    Everplus Continental
                  </p>
                  <p className="min-[1900px]:text-base text-[8px] lg:text-[.8vw]">
                    <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                      ₦120
                    </span>
                    <del className="font-[poppins] text-black">$160</del>
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      className="lg:w-[5vw] min-[1900px]:w-[100px] w-[48px]"
                      src={Img2}
                      alt=""
                    />
                    <p className="font-[poppins] min-[1900px]:text-base lg:text-[12px] text-[9px]">
                      (88)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFE3E3] lg:hidden xl:block p-3 lg:px-6  lg:py-8 hove  h-[172px] lg:h-fit min-[1900px]:h-full cursor-pointer duration-500 w-[153px] lg:w-full rounded-[15px]">
                <img
                  className="lg:w-full w-[126px] h-[92px] min-[1900px]:h-[210px] lg:h-[11vw] mx-auto"
                  src={Img6}
                  alt=""
                />
                <div className="lg:pt-6 pt-3 gap-y-[6px] lg:gap-y-[8px]">
                  <p className="min-[1900px]:text-[20px] text-[10px] lg:text-[1vw] font-medium">
                    Everplus Continental
                  </p>
                  <p className="min-[1900px]:text-base text-[8px] lg:text-[.8vw]">
                    <span className="font-medium pr-[8px] text-[#DB4444] font-[poppins]">
                      ₦120
                    </span>
                    <del className="font-[poppins] text-black">$160</del>
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      className="lg:w-[5vw] min-[1900px]:w-[100px] w-[48px]"
                      src={Img2}
                      alt=""
                    />
                    <p className="font-[poppins] min-[1900px]:text-base lg:text-[12px] text-[9px]">
                      (88)
                    </p>
                  </div>
                </div>
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
        <div className="w-full flex justify-center items-center flex-col pt-9 pb-4 lg:pt-20">
          <p className="text-[#0D0D0D] lg:block hidden pb-10 min-[1900px]:max-w-[899px] max-w-[40vw] text-center text-[1.3vw] min-[1900px]:text-[21px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            aliquet urna sed imperdiet.
          </p>
          <button className="min-[1900px]:w-[255px] w-[127px] lg:w-[12vw] h-[38px] text-white min-[1900px]:text-[20px] text-[10px] lg:text-[1vw] hover:scale-[1.05]  lg:h-[6vh] duration-500 font-medium min-[1900px]:h-[78px] bg-[#E78707] rounded-[100px]">
            Place an Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
