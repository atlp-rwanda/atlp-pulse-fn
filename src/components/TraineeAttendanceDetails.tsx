/* eslint-disable */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Buttons';

interface Details {
  session: string;
  record: string;
  comment: string;
  id: number;
}

const attendanceDetailsData = [
  {
    id: 1,
    session: 'Demo',
    record: '1',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam	',
  },
  {
    id: 1,
    session: 'Stand Up',
    record: '1',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam	',
  },
];

const TraineeAttendanceDetails = () => {
  const { t } = useTranslation();
  const [replyModal, setReplyModal] = React.useState(false);
  const handleReplyModal = () => setReplyModal(!replyModal);

  return (
    <>
      {/* ATTENDANCE REPLY MODAL START */}
      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
          replyModal === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-indigo-100 dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Reply to attendance')}
            </h3>
            <hr className=" bg-primary border-gray-300 my-3 w-full" />
          </div>
          <div className="card-body">
            {/* istanbul ignore next */}
            <form data-testid="handleAddEvent" className=" py-3 px-8">
              <div className="py-4">
                <label
                  htmlFor="reply"
                  className="block text-sm font-semibold  text-gray-700"
                >
                  {
                   t('Reply')
                  }
                </label>
                <textarea
                  id="reply"
                  name="reply"
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder= {
                    `${t('Reply')}...`
                  }
                />
              </div>
              <div className="w-full flex justify-between">
                <button
                  data-testid="removeModel"
                  className="py-2 w-[40%] md:w-1/3 bg-violet-400 rounded font-sans text-sm text-white"
                  onClick={handleReplyModal}
                >
                  {t('cancel')}
                </button>
                <button className="text-white py-2 w-[40%] md:w-1/3 bg-primary rounded">
                  {t('save')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ATTENDANCE REPLY MODAL END */}
      <div>
        <div className="bg-neutral-100 dark:bg-dark-frame-bg md:flex sm:hidden flex-col justify-start items-center">
          <table className="dark:bg-dark-bg shadow-lg py-8 rounded-md">
            <thead>
              <tr className="text-gray-300  bg-gray-100  dark:bg-dark-tertiary">
                <th className="lg:py-3 md:py-2 lg:px-3 md:px-2  text-left  text-[#6B7280] dark:text-dark-text-fill ">
                  {t('Session')}
                </th>
                <th className="lg:py-3 md:py-2 lg:px-10 md:px-7 text-center text-[#6B7280] dark:text-dark-text-fill">
                  {t('Record')}
                </th>
                <th className="lg:py-3 md:py-2 text-left text-[#6B7280] dark:text-dark-text-fill">
                  {t('Comment')}
                </th>
                <th className="lg:py-3 md:py-2"></th>
              </tr>
            </thead>
            <tbody className=" text-center ">
              {attendanceDetailsData.map(
                ({ session, record, comment }: Details) => (
                  <tr className="text-light-text dark:text-dark-text-fill bg-light-bg dark:bg-dark-bg ">
                    <td className="lg:py-10 md:py-0 px-10 text-left  ">
                      {t(session)}
                    </td>
                    <td className="py-3 ">{record}</td>
                    <td className="lg:py-6 md:py-3 text-start lg:text-sm">
                      {t(comment)}
                    </td>

                    <td className="py-3 px-8">
                      <Button
                        variant="primary"
                        size="sm"
                        style="px-4 py-0 text-sm"
                        onClick={handleReplyModal}
                      >
                        {t('Reply')}
                      </Button>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TraineeAttendanceDetails;
