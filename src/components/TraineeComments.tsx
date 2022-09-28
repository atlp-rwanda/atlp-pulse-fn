/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
import { Icon } from '@iconify/react';

function TraineeComments() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-4 rounded-md w-[90%] mx-auto lg:w-[75%] lg:ml-60 mb-10 mt-10">
      <div className="w-full flex flex-col md:py-10 md:px-20 sm:py-2 md:mt-0 lg:ml-0  sm:mt-2">
        <div className=" ">
        
        <div className="w-2/3 flex flex-col border border-gray-200 mb-4 float-left rounded-tr-lg rounded-bl-lg">
            <div className="m-8">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sit dicta.
                Temporibus minus totam cumque itaque doloribus ipsum placeat porro.</p>
            </div>
          </div>

          <div className="w-2/3 flex flex-col border border-gray-400 mb-12 float-right rounded-tl-lg rounded-br-lg">
            <div className="m-8">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sit dicta.
                Temporibus minus totam cumque itaque doloribus ipsum placeat porro.</p>
            </div>
          </div>



        </div>
          <div className="w-full flex flex-col border border-gray-400 rounded-md">
            <div className="m-4">
              <div className="">
                <input
                  className="w-full bg-inherit px-2 outline-0"
                  type="text"
                  placeholder="Type a reply ..."
                />
              </div>
            </div>
            <div className="flex justify-between px-4 py-2">
              <div className="flex flex-row">
                
              </div>
              <div><button >
                <Icon icon="octicon:paper-airplane-16" color="#9297a3" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-bg">
            <button
              onClick={() => navigate(-1)}
              className="flex mt-2 bg-primary px-4 md:py-2 sm:py-1 md:mt-3 rounded-md text-white font-semibold cursor-pointer"
            >
              <IoIosArrowBack className="mt-1 mr-1" />
              {t('Back')}
            </button>
          </div>
        </div>
      </div>
  );
}

export default TraineeComments;




