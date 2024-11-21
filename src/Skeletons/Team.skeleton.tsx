import React from 'react';

function TeamsSkeleton() {
  // Define unique identifiers for calendar days

  return (
    <div className="animate-pulse font-serif font-lexend w-[550px] h-[300px] md:w-[550px] md:h-[300px] rounded-md px-3 md:p-10 mr-11 py-7 bg-gray-300">
      <div className="flex justify-between py-1">
        {/* Team Name Placeholder */}
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-400" />
          <div className="h-6 w-32 bg-gray-400 ml-3 rounded-md" />
        </div>
        {/* Grade Placeholder */}
        <div className="h-8 w-12 bg-gray-400 rounded-md" />
      </div>

      <div className="font-josefin ml-12 mt-3 space-y-3">
        {/* Coordinator and TTL Placeholders */}
        <div>
          <div className="h-4 w-40 bg-gray-400 rounded-md" />
          <div className="h-4 w-32 bg-gray-400 rounded-md mt-1" />
        </div>
        <div>
          <div className="h-4 w-40 bg-gray-400 rounded-md" />
          <div className="h-4 w-32 bg-gray-400 rounded-md mt-1" />
        </div>

        {/* Active and Drop Stats Placeholder */}
        <div className="flex items-center">
          <div className="h-5 w-5 bg-gray-400 rounded-full" />
          <div className="h-4 w-20 bg-gray-400 ml-2 rounded-md" />
          <span className="mx-2">|</span>
          <div className="h-4 w-20 bg-gray-400 rounded-md" />
        </div>

        {/* Sprint and Phase Placeholder */}
        <div>
          <div className="h-4 w-64 bg-gray-400 rounded-md" />
        </div>

        {/* Metrics Placeholders */}
        <div className="space-y-2  flex items-center gap-3">
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 bg-gray-400 rounded-full" />
            <div className="h-4 w-28 bg-gray-400 rounded-md" />
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 bg-gray-400 rounded-full" />
            <div className="h-4 w-28 bg-gray-400 rounded-md" />
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-5 w-5 bg-gray-400 rounded-full" />
            <div className="h-4 w-28 bg-gray-400 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsSkeleton;
