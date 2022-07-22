import React from 'react';
import { useTranslation } from 'react-i18next';

function TraineeComments() {
  const { t } = useTranslation();
  return (
    <div className="bg-neutral-100 dark:bg-dark-bg dark:text-white flex flex-col justify-start items-center  lg:ml-[-32px] md:ml-[-44px] sm:ml-[-24px] sm:pb-80 lg:mt-[-200px] sm:mt-[-200px] md:mt-[-550px] md:py-8 h-full">
      <div className="w-7/12 flex flex-col md:py-10 sm:py-12 md:mt-0 lg:ml-0 md:ml-[-120px]  sm:mt-44">
        <div className=" w-7/12 ">
          <h2 className="font-md">{t('Comments')}</h2>
        </div>
        <div className=" mt-4">
          <h2>Kenth Ngabo</h2>
          <p className="text-[#6B7280] dark:text-dark-text-fill">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>

        <div className=" mt-4 ml-24">
          <h2> John Doe</h2>
          <p className="text-[#6B7280] dark:text-dark-text-fill ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div>
            <input
              className="bg-neutral-100 border-b border-gray-400   dark:bg-dark-bg outline-none"
              type="text"
              placeholder="Reply..."
            />
          </div>
        </div>
        <div>
          <div className="mt-4 ">
            <h2> John Doe</h2>
            <p className="text-[#6B7280] dark:text-dark-text-fill">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>

            <div className="ml-24 ">
              <input
                className="bg-neutral-100 border-b border-gray-400 dark:bg-dark-bg outline-none"
                type="text"
                placeholder="Reply..."
              />
            </div>
          </div>
        </div>
        <div className="mt-4 ">
          <input
            className="bg-neutral-100 border-b border-gray-400 dark:bg-dark-bg outline-none"
            type="text"
            placeholder="New comments..."
          />
        </div>
      </div>
    </div>
  );
}

export default TraineeComments;
