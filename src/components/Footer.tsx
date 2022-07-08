import React from 'react';
import LogoFooter from './../assets/logoWhite.svg';
import '../App';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPlayCircle,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-primary dark:bg-dark-bg  lg:h-[100px] h-[60%]  text-gray-300  px-2">
      <div className="px-2 flex max-375-footrt lg:flex justify-between items-center w-full h-full">
        <div className="flex max-375-footrt-img items-center py-5">
          <img
            className="mb-24 mr-2 lg:mb-0 lg:mr-0"
            src={LogoFooter}
            alt="logo"
          />
          <ul className="lg:flex cursor-pointer">
            <li className="px-3">About us</li>
            <li className="px-3">Contact us</li>
            <li className="px-3">Product</li>
            <li className="px-3">Terms and Conditions</li>
            <li className="px-3">Privacy</li>
          </ul>
        </div>
        <div className=" lg:flex">
          <span className="flex border-none w-32 max-375-footrt-icon sm:justify-end px-4 py-4 justify-around mr-4 cursor-pointer">
            <FaFacebook className="mr-1 w-20" />
            <FaInstagram className="mr-1 w-20" />
            <FaTwitter className="mr-1 w-20" />
            <FaLinkedin className="mr-1 w-20" />
            <FaPlayCircle className="w-20" />
          </span>
          <span className="px-4 py-3 cursor-pointer max-375-footrtPulse">
            ©{new Date().getFullYear()} Pulse Technologies
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
