import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="sticky w-full top-0 left-0px bg-[#fcf9f9] z-50">
      <div className=" border-b border-gray-200 hidden sm:block ">
        <div className="container py-4 sticky">
          <div className="flex justify-between items-center">
            <div className="hidden lg:flex gap-1">
              <div className="header_top_icon_wrapper">
                <BsFacebook />
              </div>

              <div className="header_top_icon_wrapper">
                <BsTwitter />
              </div>

              <div className="header_top_icon_wrapper">
                <BsInstagram />
              </div>

              <div className="header_top_icon_wrapper">
                <BsLinkedin />
              </div>
            </div>
            <div className="text-gray-500 text-[12px]">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
            </div>

            <div className="flex gap-4">
              <select
                className="text-gray-500 text-[12px] w-[70px]"
                name="currency"
                id="currency"
              >
                <option value="USD $">USD $</option>
                <option value="EUR $">EUR €</option>
                <option value="INR">INR</option>
              </select>

              <select
                className="text-gray-500 text-[12px] w-[80px]"
                name="language"
                id="language"
              >
                <option value="ENGLISH">ENGLISH</option>
                <option value="FRENCH">FRENCH</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
