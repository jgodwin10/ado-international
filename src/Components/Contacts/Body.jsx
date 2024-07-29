import React from "react";
import Img from "../../Images/Contact.png";

const Body = () => {
  return (
    <div className="md:px-[50px] px-6">
      <div className="py-20 max-w-[1600px] mx-auto  grid grid-cols-2">
        {/* FIRST GRID */}

        <div className="w-full before:contents-[''] h-[1125px] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#000000D9] relative ">
          <img className="w-full h-full object-cover" src={Img} alt="" />
          <div className="absolute top-0  py-16 text-white left-0 w-full h-full">
            <div className="max-w-[651px] space-y-[76px] pr-5 mx-auto">
              <div className="space-y-[30.41px]">
                <h2 className="text-[47.19px] font-semibold">
                  Reach Out to Us
                </h2>
                <p className="text-[18.87px]">
                  Fill in the contact form with the appropriate information to
                  send us a message and we will get back to you in 24 hours
                </p>
              </div>
              <div className="space-y-[26.21px] text-[18.87px]">
                <h3 className="text-[29.36px] font-semibold">
                  Contact Details
                </h3>
                <p>No 01 Company Address, State, Country.</p>
                <p>
                  <span className="font-bold">Telephone:</span> 0701 234 5678,
                  0800 987 6543
                </p>
                <p>info@companydomain.com</p>
              </div>
              <div className="space-y-[26.21px] text-[18.87px]">
                <h3 className="text-[29.36px] font-semibold">Help Line</h3>
                <p>0901 234 5678, 0704 321 6789</p>
              </div>
              <div className="space-y-[26.21px] text-[18.87px]">
                <h3 className="text-[29.36px] font-semibold">Branches</h3>
                <p>
                  <span className="font-bold">Lagos:</span> 21, OjoIgbede Road,
                  Ojo, Alaba, Lagos.
                </p>
                <p>
                  <span className="font-bold">Onitcha:</span> Royal Plaza,
                  Bodija.
                </p>
                <p>
                  <span className="font-bold">Abuja:</span> Block 22, Shop
                  R175,Gudu Market, Abuja.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* END */}

        {/* SECOND GRID */}

        <div className="w-full py-16 contact h-[1125px] bg-white">
          <div className="max-w-[668.17px] space-y-[39.85px] mx-auto">
            {/* FULL NAME */}
            <label
              className="flex flex-col gap-y-[15.73px]"
              htmlFor="firstname"
            >
              <span className="text-[23.07px] font-semibold text-black">
                Full Name
              </span>
              <input
                className="bg-[#F4F4F4] w-full font-medium placeholder:text-[#787878] text-[#787878] py-4 px-6 outline-none"
                type="text"
                required
                placeholder="Your full name"
              />
            </label>

            {/* EMAIL */}
            <label className="flex flex-col gap-y-[15.73px]" htmlFor="email">
              <span className="text-[23.07px] font-semibold text-black">
                Email Address
              </span>
              <input
                className="bg-[#F4F4F4] w-full font-medium placeholder:text-[#787878] text-[#787878] py-4 px-6 outline-none"
                type="email"
                required
                placeholder="Your email address"
              />
            </label>

            {/* PHONE NUMBER */}
            <label
              className="flex flex-col gap-y-[15.73px]"
              htmlFor="phone_number"
            >
              <span className="text-[23.07px] font-semibold text-black">
                Phone Number
              </span>
              <input
                className="bg-[#F4F4F4] w-full font-medium placeholder:text-[#787878] text-[#787878] py-4 px-6 outline-none"
                type="text"
                required
                placeholder="Your phone number"
              />
            </label>

            {/* MESSAGE */}

            <label
              className="flex flex-col gap-y-[15.73px]"
              htmlFor="firstname"
            >
              <span className="text-[23.07px] font-semibold text-black">
                Message
              </span>
              <textarea
                className="bg-[#F4F4F4] w-full font-medium placeholder:text-[#787878] text-[#787878] py-4 px-6 outline-none"
                rows={10}
                placeholder="Write your message here"
              />
            </label>
            <div className="flex items-center justify-between">
              <div></div>
              <button className="bg-[#FD0505] w-[180px] font-semibold text-white h-[54.87px]">
                Send Message
              </button>
            </div>
          </div>
        </div>
        {/* END */}
      </div>
    </div>
  );
};

export default Body;
