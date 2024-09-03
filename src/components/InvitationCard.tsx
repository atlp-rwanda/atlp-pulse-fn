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
    <div className='bg-blue-100 w-48 grid grid-row-4 rounded-xl h-40 text-black '>
      <div>
        <h3 className='ml-6 text-xl font-serif font-bold text-[18px] mt-4 '>{status}</h3>
        <div className='flex w-8 h-10 ml-2 -mt-2 '>
          {icon}
        </div>
        <div>
          <p className='ml-10 -mt-2'>{time}</p>
        </div>
      </div>
      <div className='flex justify-center items-center -mt-8'>
        <div className='text-2xl font-serif font-bold text-[40px]'>{staticNumber}
        </div>
        <div className='text-base text-[#7258ce] ml-3 mb-0'>
          <AiOutlineRise className="text-2xl" />
          <span>{percentage}</span>
        </div>
      </div>
    </div>
  );
}

export default InvitationCard;


