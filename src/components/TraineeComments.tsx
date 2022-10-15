/* eslint-disable */
import { Icon } from '@iconify/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';
import CommentCard from '../components/CommentCard';
import comments from '../dummyData/comments.json';

function TraineeComments() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-4 rounded-md w-[90%] mx-auto lg:w-[70%] lg:ml-60 mb-10 mt-10">
      <div className="w-full flex flex-col md:py-10 md:px-20 sm:py-2 md:mt-0 lg:ml-0  sm:mt-2">
        <div className=" ">
          <h2 className="font-md">{t('Comments')}</h2>
        </div>
        <div className="w-full">
          {comments.map((comment: any, index: any) => (
            <div key={index}>
              <CommentCard comment={comment} />
            </div>
          ))}
          <div className="w-full flex flex-col border border-gray-400">
            <div className="m-4">
              <div className="">
                <input
                  className="w-full bg-inherit px-2 outline-0"
                  type="text"
                  placeholder="Start typing ..."
                />
              </div>
            </div>
            <div className="flex justify-between px-4 py-2 border-t">
              <div className="flex flex-row">
                <div>
                  <Icon icon="ant-design:paper-clip-outlined" color="#9297a3" />
                </div>
                <div className="mx-2">
                  <Icon icon="akar-icons:link-chain" color="#9297a3" />
                </div>
                <div>
                  <Icon icon="ep:document-add" color="#9297a3" />
                </div>
              </div>
              <div>
                <Icon icon="octicon:paper-airplane-16" color="#9297a3" />
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
    </div>
  );
}

export default TraineeComments;
