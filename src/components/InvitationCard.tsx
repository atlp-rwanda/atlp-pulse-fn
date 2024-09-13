import React from 'react';
import { AiOutlineRise } from "react-icons/ai";

// Define the type for the props
interface InvitationCardType {
  icon: React.ReactNode;
  status: string;
  time: string;
  staticNumber: string;
  percentage: string;
}

// Define the InvitationCard component using a function declaration
function InvitationCard({ icon, status, time, staticNumber, percentage }: InvitationCardType) {
  return (
    <div className='bg-blue-100 lg:dark:bg-blue-100 sm:dark:bg-[#0A1729] xm:dark:bg-[#0A1729] w-full grid h-36 text-black shadow-lg rounded-lg m-auto'>

        <div className='flex flex-row mt-4 gap-3 sm:gap-1'>
          <div className='flex w-8 h-10 ml-2'>
            {icon}
          </div>
          <h3 className='text-md md:text-md lg:text-xl font-Inter font-bold text-[12px] sm:dark:text-white xm:dark:text-white lg:dark:text-black'>{status}</h3>
        </div>
        <div>
          <p className='-mt-10 ml-12 text-[12px] font-inter text-gray-500 font-inter sm:-[8px]'>{time}</p>
        </div>

      <div className='flex justify-center items-center -mt-10 '>
        <div className='font-bold -mt-4 ml-0 sm:ml-5 text-[30px] md:text-[40px] sm:dark:text-white xm:dark:text-white lg:dark:text-black'>{staticNumber}
        </div>
        <div className='text-base text-[#7258ce] ml-3 mb-4'>
          <AiOutlineRise className="text-xl" data-testid="ai-outline-user"/>
          <span>{percentage}</span>
        </div>
      </div>
    </div>
  );
}

export default InvitationCard;