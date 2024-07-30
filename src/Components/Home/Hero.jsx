import React, { useState } from "react";
import Img from "../../Images/hero.png";
import Img1 from "../../Images/hero1.png";
import Img2 from "../../Images/hero2.png";
import Img3 from "../../Images/hero3.png";
import Img4 from "../../Images/hero4.png";
import Img5 from "../../Images/hero5.png";
import Img6 from "../../Images/hero6.png";

const Hero = () => {
  const image = [Img, Img1, Img2, Img3, Img4, Img5, Img6];
  const [Image, setImage] = useState(0);

  return (
    <div className="md:px-[50px] home h-[50vw]  2xl:h-[90vh] w-full relative px-6">
      <div className="max-w-[1600px] pt-[5vh] 2xl:pt-10 mx-auto">
        <div className="2xl:max-w-[741px] max-w-[50vw] space-y-[50px]">
          <div className="space-y-[16px]">
            <h2 className="text-[#E78707] text-[4.3vw] font-bold leading-[6vw] 2xl:leading-[120px] 2xl:text-[90px]">
              Premium Kitchenwares
            </h2>
            <p className="text-[#0D0D0D] leading-[45px] text-[1.5vw] 2xl:text-[22px]">
              Top-quality kitchenware for every culinary need. Elevate your
              cooking experience with our premium products.
            </p>
          </div>
          <button className="bg-[#E78707] hover:scale-[1.1] duration-500 text-white uppercase 2xl:w-[271px] h-[4.5vw] w-[13vw] 2xl:h-[74px] rounded-[20px] text-[1.3vw] 2xl:text-[22px] font-medium">
            order now!
          </button>
        </div>
        <div className="grid grid-cols-7 w-[50vw] 2xl:w-[825px] 2xl:gap-6 gap-[1vw] pt-20">
          {image.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setImage(index)}
                className={`2xl:size-[105px] size-[6vw] rounded-[24px] cursor-pointer ${
                  Image == index && "hero border-[2px] border-[#E78707]"
                } bg-white hover:scale-[1.1] duration-500 flex justify-center items-center`}
              >
                <img className="2xl:size-[80px] size-[4vw]" src={item} alt="" />
              </div>
            );
          })}
        </div>
        <div className="absolute top-6 right-[11vw]">
          <img className="2xl:w-[715px] w-[35vw]" src={image[Image]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
