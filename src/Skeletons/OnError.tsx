import React from 'react';

function OnError() {
  return (
    <div className="w-full overflow-hidden h-full grow flex flex-col">
      <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg overflow-hidden px-4">
        <div className="flex flex-row pb-8 justify-center">
          <div className="lg:pt-[6vh]">
            <div className="grid grid-cols-2 lg:grid-cols-4 px-4" />
          </div>
        </div>
        <div className="items-center px-4 ">
          <h2>Something went wrong on our side</h2>
        </div>
      </div>
    </div>
  );
}

export default OnError;
