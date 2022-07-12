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
    <div className="w-full bg-primary dark:bg-dark-bg py-5 text-gray-300  mt-auto">
      <div className="px-2 flex max-375-footrt lg:flex justify-between items-center w-full h-full">
        <div className="flex max-375-footrt-img items-center py-5">
          <img
            className="mb-24 mr-2 lg:mb-0 lg:mr-0"
            src={LogoFooter}
            alt="logo"
          />
          <ul className="lg:flex cursor-pointer">
            <li className="px-3 text-lg font-bold">About us</li>
            <li className="px-3 text-lg font-bold">Contact us</li>
            <li className="px-3 text-lg font-bold">Product</li>
            <li className="px-3 text-lg font-bold">Terms and Conditions</li>
            <li className="px-3 text-lg font-bold">Privacy</li>
          </ul>
        </div>
        <div className=" lg:flex">
          <div className="flex border-none max-375-footrt-icon sm:justify-end p3 justify-around items-center mr-4 cursor-pointer">
            <FaFacebook className="mr-1 fa-xs " />
            <FaInstagram className="mr-1 " />
            <FaTwitter className="mr-1 " />
            <FaLinkedin className="mr-1 " />
            <FaPlayCircle className="" />
          </div>
          <span className="px-4 py-3 cursor-pointer max-375-footrtPulse text-lg font-bold">
            ©{new Date().getFullYear()} Pulse Technologies
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
