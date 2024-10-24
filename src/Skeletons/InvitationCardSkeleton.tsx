import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function InvitationCardSkeleton() {
  return (
    <div className='bg-white dark:bg-[#0A1729] rounded-md shadow-sm p-4 w-[100%] md:w-[30%]'>
      <div className='flex flex-row items-center gap-4 mb-3'>
        <Skeleton
          circle
          width={50}
          height={50}
          highlightColor='#E0E0E' 
          className="dark:bg-[#4B5563]" 
        />
        <div>
          <Skeleton
            width={100}
            height={20}
            highlightColor='#E0E0E' 
            className="dark:bg-[#4B5563]" 
          />
        </div>
      </div>

      <Skeleton
        width={70}
        height={30}
        highlightColor='#E0E0E' 
        className="dark:bg-[#4B5563]" 
      />

      <Skeleton
        width={50}
        height={20}
        highlightColor='#E0E0E' 
        className="dark:bg-[#4B5563]" 
      />
    </div>
  );
}

export default InvitationCardSkeleton;
