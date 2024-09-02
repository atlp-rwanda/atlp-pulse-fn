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
    <div className='bg-blue-100 w-48 grid grid-row-4 rounded-2xl'>
      <div>
        <div>
          <h3 className='ml-6 p-2 text-2xl font-serif font-bold text-[20px]'>{status}</h3>
          <div className='flex gap-2 w-8 h-10'>
            {icon}
          </div>
          <div>
            <p className='ml-10 mb-8'>{time}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center pb-5'>
        <div className='text-2xl font-serif font-bold text-[40px]'>{staticNumber}</div>
        <div className='text-base text-[#7258ce] ml-3 mb-5'>
          <AiOutlineRise className="text-2xl" />
          <span>{percentage}</span>
        </div>
      </div>
    </div>
  );
}

export default InvitationCard;


