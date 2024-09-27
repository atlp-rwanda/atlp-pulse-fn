/* istanbul ignore file */

import React from 'react';

function Dropout({ traineeStatus }: any) {
  return (
    <div className="font-serif">
      <div className="pt-2 pb-6">
        <hr className="bg-[#868686] h-[2px]" />
      </div>
      <div className="pb-6">
        <h1 className="text-[#5F49AC] dark:text-[#C7B9F9] font-semibold">
          Drop Out
        </h1>
        <div className="pt-6 flex gap-4">
          Date :<div>{traineeStatus.date}</div>
        </div>
        <div className="pt-6 flex gap-4">
          Reason:
          <div>{traineeStatus.reason}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropout;
