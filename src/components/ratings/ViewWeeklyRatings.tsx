/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* istanbul ignore file */

import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import { useNavigate } from 'react-router';
import AddNewRatings from './AddNewRatings';
import Dropout from './Dropout';
import useViewTraineeRatings from './hooks/useViewTraineeRatings';
import Spinner from '../Spinner';

function ViewSprintRatings({
  traineeName,
  traineeEmail,
  traineeId,
  traineeCohort,
  traineeStatus,
}: any) {
  const [selectSprint, setSelectSprint] = useState<number | null>(null);
  const [openModel, setOpenModel] = useState<boolean>(true);
  const navigate = useNavigate();
  const {
    onClose,
    t,
    maxSprint,
    selectViewSprint,
    setSelectViewSprint,
    currentSprint,
    sprintOptions,
    selectedSprintRatings,
    deviceWidth,
    successMessage,
    setViewAddNewRating,
    viewAddNewRating,
    organizationToken,
    refetch,
    setSuccessMessage,
    loading,
  } = useViewTraineeRatings({ traineeEmail, selectSprint, setOpenModel });
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner />
      </div>
    );
  }
  return (
    <Dialog open={openModel} onClose={onClose}>
      <div className="flex flex-col border-black w-full bg-[#E0E7FF] dark:bg-[#4B4B4B] px-8">
        <div className=" relative py-8 ">
          <h3 className="w-11/12 text-[16px] font-bold text-center dark:text-white">
            {t('Trainee')} : {traineeName}
          </h3>
          <h1
            className="absolute right-0 top-2 text-red-500   transform rotate-45 w-120 h-120 text-5xl cursor-pointer"
            onClick={() => {
              navigate('/trainees');
            }}
          >
            +
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#5F49AC] dark:text-[#C7B9F9] font-semibold">
            {t('Sprint Ratings')}
          </h1>
          <div className="">
            {maxSprint !== 0 ? (
              <div className="flex gap-4 rounded-2xl border-[#707070] border-2 w-fit px-4">
                <button
                  type="button"
                  onClick={() =>
                    maxSprint !== 0
                      ? setSelectViewSprint(!selectViewSprint)
                      : setSelectViewSprint(false)
                  }
                  className="inline-flex font-light justify-center w-full rounded-md "
                >
                  {currentSprint}
                  <svg
                    className="-mr-1 ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              ''
            )}

            {selectViewSprint ? (
              <div className="fixed mt-1 w-56 rounded-md shadow-lg bg-white z-99">
                <div className="py-1">
                  {sprintOptions.map((sprint) => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <p
                      key={sprint}
                      onClick={() => {
                        setSelectSprint(sprint);
                        setSelectViewSprint(!selectViewSprint);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    >
                      Sprint {sprint}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        {maxSprint !== 0 ? (
          <div>
            {selectedSprintRatings?.map((rating: any) => (
              <div key={rating.sprint} className="py-6 ">
                <div className="rounded-[15px] shadow-lg overflow-hidden bg-white w-full">
                  {deviceWidth <= 580 ? (
                    <table className="w-full">
                      <tbody className="bg-[#F5F8FF] dark:bg-[#868686] dark:text-black">
                        <tr>
                          <th className="px-6 py-2 text-left">Sprint</th>
                          <th className="px-6 py-2">Sprint {rating.sprint}</th>
                        </tr>
                      </tbody>
                      <tbody className=" bg-white dark:bg-[#202020] dark:text-white">
                        <tr className="border-t-[#C7C7C7]">
                          <td className="px-6 py-2 text-left border-t-[#C7C7C7]">
                            {t('Quality')}
                          </td>
                          <td className="px-6 py-2 text-center border-t-[#C7C7C7]">
                            {rating.quality}
                          </td>
                        </tr>
                      </tbody>
                      <tbody className=" bg-white dark:bg-[#202020] dark:text-white ">
                        <tr className="border-t-[#C7C7C7]">
                          <td className="px-6 py-2 text-left border-t-[#C7C7C7]">
                            {t('Quantity')}
                          </td>
                          <td className="px-6 py-2 text-center  border-t-[#C7C7C7]">
                            {rating.quantity}
                          </td>
                        </tr>
                      </tbody>
                      <tbody className=" bg-white dark:bg-[#202020] dark:text-white ">
                        <tr className="border-t-[#C7C7C7]">
                          <td className="px-6 py-2 text-left border-t-[#C7C7C7]">
                            {t('Professionalism')}
                          </td>
                          <td className="px-6 py-2 text-center">
                            {rating.professional_Skills}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full">
                      <tbody className="bg-[#F5F8FF] dark:bg-[#868686] dark:text-black">
                        <tr>
                          <th className="px-6 py-2">Sprint</th>
                          <th className="px-6 py-2">{t('Quality')}</th>
                          <th className="px-6 py-2">{t('Quantity')}</th>
                          <th className="px-3 py-2 ">{t('Professionalism')}</th>
                        </tr>
                      </tbody>
                      <tbody className=" bg-white dark:bg-[#202020] dark:text-white">
                        <tr className="border-t-[#C7C7C7]">
                          <td className="px-6 py-2 text-center border-t-[#C7C7C7]">
                            Sprint {rating.sprint}
                          </td>
                          <td className="px-6 py-2 text-center border-t-[#C7C7C7]">
                            {rating.quality}
                          </td>
                          <td className="px-6 py-2 text-center border-t-[#C7C7C7]">
                            {rating.quantity}
                          </td>
                          <td className="px-6 py-2 text-center">
                            {rating.professional_Skills}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
                <div className="pt-6 flex gap-4">
                  {t('Feedback')} :
                  <div>
                    {rating.feedbacks.length !== 0
                      ? rating.feedbacks[0].content
                      : 'No feedback provided'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="md:w-[466px] p-3 flex justify-center items-end">
            {loading ? (
              <p>Loading ...</p>
            ) : (
              <p>There are no Ratings Available</p>
            )}
          </div>
        )}

        {traineeStatus.status === 'active' ? (
          <div
            className={` ${
              successMessage ? 'flex justify-between' : 'flex justify-end'
            } py-4`}
          >
            {successMessage ? (
              <p className="text-green-500 text-[20px]">{successMessage}</p>
            ) : (
              ''
            )}
            <button
              type="button"
              className="bg-[#8667F2] rounded-md text-sm font-medium text-white hover:bg-opacity-40 h-[43px] px-3"
              onClick={() => setViewAddNewRating(true)}
            >
              {t('New Rating')}
            </button>
          </div>
        ) : (
          <Dropout traineeStatus={traineeStatus} />
        )}
        <AddNewRatings
          viewAddNewRating={viewAddNewRating}
          t={t}
          setViewAddNewRating={setViewAddNewRating}
          traineeCohort={traineeCohort}
          traineeId={traineeId}
          maxSprint={maxSprint}
          organizationToken={organizationToken}
          refetchQuery={refetch}
          setSuccessMessage={setSuccessMessage}
        />
      </div>
    </Dialog>
  );
}

export default ViewSprintRatings;
