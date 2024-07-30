import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#003333] h-[60vh]">
      <div className="flex border-b-[1px] border-[#666666] items-center h-[80%]">
        <div className="max-w-[1552px] md:px-[50px] px-6 flex-1 text-white mx-auto grid grid-cols-4">
          <div>
            <h2 className="2xl:text-[25px] text-[1.3vw] font-semibold pb-8">
              Quick Links
            </h2>
            <div className="flex flex-col 2xl:gap-5 gap-[1vw] text-[1vw] 2xl:text-[18px] font-medium items-start">
              <Link>Home</Link>
              <Link to={"/about-us"}>About Us</Link>
              <Link>Products</Link>
              <Link to={"/distribution"}>Distribution</Link>
            </div>
          </div>
          <div>
            <h2 className="2xl:text-[25px] text-[1.3vw] font-semibold pb-8">
              Follow Us
            </h2>
            <div className="flex flex-col 2xl:gap-5 gap-[1vw] text-[1vw] 2xl:text-[18px] font-medium items-start">
              <Link>Instagram</Link>
              <Link>Facebook</Link>
              <Link>Twitter</Link>
              <Link>LinkedIn</Link>
            </div>
          </div>
          <div>
            <h2 className="2xl:text-[25px] text-[1.3vw] font-semibold pb-8">
              Legal
            </h2>
            <div className="flex flex-col 2xl:gap-5 gap-[1vw] text-[1vw] 2xl:text-[18px] font-medium items-start">
              <Link>Terms & Conditions</Link>
              <Link>Privacy policy</Link>
              <Link>Cookies policy</Link>
              <Link>Help</Link>
            </div>
          </div>
          <div>
            <h2 className="2xl:text-[25px] text-[1.3vw] font-semibold pb-8">
              Contact Us
            </h2>
            <div className="flex flex-col 2xl:gap-5 gap-[1vw] text-[1vw] 2xl:text-[18px] font-medium items-start">
              <p>+234 123 456 7890, +234 000 111 2223</p>
              <p>info@companydomain.com</p>
              <p>Block 4, Company address, City, State, Country.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[#666666] text-[1vw] 2xl:text-[20px] items-center h-[20%]">
        <p>Copyright &copy; 2024 ADO International | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
