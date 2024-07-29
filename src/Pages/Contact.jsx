import React from "react";
import Img from "../Images/Contact.png";
import Body from "../Components/Contacts/Body";

const Contact = () => {
  return (
    <>
      <div className="bg-[url('./Images/Contact.png')] bg-cover bg-bottom before:contents-[''] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-[#00000099] relative h-[284px] w-full">
        <div className=" absolute md:px-[50px] px-6 top-0 left-0 w-full h-full">
          <div className="flex items-center h-full max-w-[1600px] mx-auto">
            <p className="text-[70px] font-bold text-white">Contact Us</p>
          </div>
        </div>
      </div>

      {/* BODY */}

      <Body />
    </>
  );
};

export default Contact;
