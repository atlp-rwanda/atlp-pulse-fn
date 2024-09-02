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
    <div className='bg-blue-100  max-w-full md:w-56 p-12 rounded-2xl shadow-lg flex flex-col justify-between'>
      <div className='flex items-center justify-between mb-4 p-2'>
        <h3 className='text-lg md:text-xl font-bold text-gray-800'>{status}</h3>
        <div className='flex items-center justify-center w-12 h-12 rounded-full'>
          {icon}
        </div>
      </div>

      <p className='text-sm md:text-gray-600 mb-4'>{time}</p>

      <div className='flex flex-col md:flex-row items-center justify-between p-2'>
        <div className='text-3xl md:text-2xl font-bold text-gray-800'>{staticNumber}</div>
        <div className='flex items-center text-base md:text-sm text-[#7258ce]'>
          <AiOutlineRise className="mr-1" />
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
}

export default InvitationCard;
