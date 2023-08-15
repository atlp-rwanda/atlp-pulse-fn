import React from 'react';

function Dropout() {
  return (
    <div>
      <div className="pt-2 pb-6">
        <hr className="bg-[#868686] h-[2px]" />
      </div>
      <div className="pb-6">
        <h1 className="text-[#5F49AC] font-semibold">Drop Out</h1>
        <div className="pt-6 flex gap-4">
          Date :<div>{/* Drop out date */}</div>
        </div>
        <div className="pt-6 flex gap-4">
          Reason:
          <div>{/* Drop out reason */}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropout;
