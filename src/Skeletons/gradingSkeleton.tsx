import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function GradingSkeleton() {
  // Define an array with unique keys
  const skeletonRows = [{ id: 'row-1' }, { id: 'row-2' }, { id: 'row-3' }];

  return (
    <div className="p-4">
      {/* Header Skeleton */}
      <Skeleton height={30} width={80} />
      <Skeleton height={30} width="40%" className="mt-6" />
      <div className="p-6 border-b-2 bg-gray-100 mt-6">
      {/* <Skeleton height={60} className="mt-6 " /> */}
        <div className="flex px-6">
            <Skeleton width={100} height={20} className='px-6 '/>
            <Skeleton width={100} height={20} className=' px-6 ml-20' />
            <Skeleton width={100} height={20} className=' px-6 ml-20' />
            <Skeleton width={100} height={20} className='px-6 ml-20'/>
            <Skeleton width={100} height={20} className='px-6 ml-28'/>
        </div>
      </div>
      {/* Skeleton for Table Rows */}
      {skeletonRows.map((row) => (
        <div key={row.id} className="flex items-center mb-4">
          {/* Name and Email Skeleton */}
          <div className="flex-1">
            <Skeleton height={20} width="85%" className="mt-2" />
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex space-x-4 mr-16">
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton width={30} height={30} borderRadius="50%"/>
            <Skeleton width={30} height={30} borderRadius="50%" />
          </div>
        </div>
      ))}
      <div className="flex  justify-between">
        <div className="flex space-x-4 p-4">
        <Skeleton width={50} height={30} />
        <Skeleton width={50} height={30} />
        </div>
        <div className='mr-14'>
        <Skeleton width={300} height={30} />
        </div>
      </div>
    </div>
  );
}
