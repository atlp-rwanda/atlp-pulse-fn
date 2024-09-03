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
    <div className='bg-blue-100 w-48 grid grid-row-4 h-40 text-black '>
      
        <div className='flex flex-row mt-4 gap-2' >
          <div className='flex w-8 h-10 '>
            {icon}
          </div>
          <h3 className='text-xl font-serif font-bold text-[12px] '>{status}</h3>
        </div>
        <div>
          <p className='-mt-12 ml-12 text-[15px] text-gray-500'>{time}</p>
        </div>
      
      <div className='flex justify-center items-center -mt-9 '>
        <div className='text-xl font-serif font-bold mb-4 text-[50px]'>{staticNumber}
        </div>
        <div className='text-base text-[#7258ce] ml-3 mb-2'>
          <AiOutlineRise className="text-xl" />
          <span>{percentage}</span>
        </div>
      </div>
    </div>
  );
}

export default InvitationCard;


