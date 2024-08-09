import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#003333] md:px-10 min-[1200px]:px-[145px] min-[1020px]:px-[60px] px-6 lg:h-[60vh]">
      <div className="flex border-b-[1px] border-[#666666] py-20 items-center h-[70%] md:h-[80%]">
        <div className="max-w-[1552px]  flex-1 text-white mx-auto gap-[45px] lg:gap-0 md:grid md:grid-cols-2 flex items-center justify-center flex-col lg:grid-cols-4">
          <div>
            <h2 className="min-[1900px]:text-[25px] text-[21px] lg:text-[1.3vw] font-semibold pb-4 md:pb-6 lg:pb-8">
              Quick Links
            </h2>
            <div className="flex flex-col min-[1900px]:gap-5 gap-[16px] lg:gap-[1vw] text-[15px] lg:text-[1vw] min-[1900px]:text-[18px] font-medium items-center md:items-start">
              <Link>Home</Link>
              <Link to={"/about-us"}>About Us</Link>
              <Link>Products</Link>
              <Link to={"/distribution"}>Distribution</Link>
            </div>
          </div>
          <div>
            <h2 className="min-[1900px]:text-[25px] text-[21px] lg:text-[1.3vw]  font-semibold pb-4 md:pb-6 lg:pb-8">
              Follow Us
            </h2>
            <div className="flex flex-col min-[1900px]:gap-5 gap-[16px] lg:gap-[1vw] text-[15px] lg:text-[1vw] min-[1900px]:text-[18px] font-medium items-center  md:items-start">
              <Link>Instagram</Link>
              <Link>Facebook</Link>
              <Link>Twitter</Link>
              <Link>LinkedIn</Link>
            </div>
          </div>
          <div>
            <h2 className="min-[1900px]:text-[25px] text-[21px] lg:text-[1.3vw] text-center md:text-start font-semibold pb-4 md:pb-6 lg:pb-8">
              Legal
            </h2>
            <div className="flex flex-col min-[1900px]:gap-5 gap-[16px] lg:gap-[1vw] text-[15px] lg:text-[1vw] min-[1900px]:text-[18px] font-medium items-center md:items-start">
              <Link>Terms & Conditions</Link>
              <Link>Privacy policy</Link>
              <Link>Cookies policy</Link>
              <Link>Help</Link>
            </div>
          </div>
          <div>
            <h2 className="min-[1900px]:text-[25px] text-[21px] text-center  md:text-start lg:text-[1.3vw] font-semibold pb-4 md:pb-6 lg:pb-8">
              Contact Us
            </h2>
            <div className="flex flex-col min-[1900px]:gap-5 gap-[16px] lg:gap-[1vw] text-[15px] lg:text-[1vw] min-[1900px]:text-[18px] font-medium items-center md:items-start">
              <p className="md:text-start text-center">
                +234 123 456 7890, +234 000 111 2223
              </p>
              <p className="md:text-start text-center">
                info@companydomain.com
              </p>
              <p className="md:text-start text-center">
                Block 4, Company address, City, State, Country.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[#666666] text-[13px] md:text-[15px] lg:text-[1vw] py-8 min-[1900px]:text-[20px] h-[30%] md:h-[20%]">
        <p className="md:text-start text-center">
          Copyright &copy; 2024 ADO International | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
