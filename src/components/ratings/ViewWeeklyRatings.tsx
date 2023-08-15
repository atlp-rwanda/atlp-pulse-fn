import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { FETCH_ALL_RATINGS } from '../../Mutations/Ratings';
import AddNewRatings from './AddNewRatings';
import Dropout from './Dropout';

function ViewWeeklyRatings({
  traineeName,
  traineeEmail,
  traineeId,
  traineeCohort,
  traineeStatus,
}: any) {
  const organizationToken = localStorage.getItem('orgToken');
  const [selectViewWeek, setSelectViewWeek] = useState(false);
  const [viewAddNewRating, setViewAddNewRating] = useState(false);
  const [selectWeek, setSelectWeek] = useState<number | null>(null); // Keep track of the selected week
  const [allRatings, setAllRatings] = useState([]);
  const { t }: any = useTranslation();

  const { data, refetch } = useQuery(FETCH_ALL_RATINGS, {
    variables: {
      orgToken: organizationToken,
    },
  });

  useEffect(() => {
    if (data && data.fetchAllRatings) {
      setAllRatings(data.fetchAllRatings);
    }
  }, [data]);

  const traineeRatings = allRatings.filter(
    (rating: any) => rating.user.email === traineeEmail,
  );
  const maxSprint = Math.max(
    ...traineeRatings.map((rating: any) => rating.sprint),
  );
  const weekOptions = Array.from(
    { length: maxSprint },
    (_, index) => index + 1,
  );

  const selectedWeekRatings =
    selectWeek !== null
      ? traineeRatings.filter((rating: any) => rating.sprint === selectWeek)
      : traineeRatings.filter((rating: any) => rating.sprint === maxSprint);

  const currentWeek = selectWeek ? `Week ${selectWeek}` : `Week ${maxSprint}`;

  return (
    <div className="h-screen w-screen z-20 bg-black bg-opacity-40 backdrop-blur-sm absolute flex items-center justify-center  px-4">
      <div className="modal-content flex flex-col border-black w-[658px] rounded-2xl bg-[#E0E7FF] px-8 ">
        <div className="py-8">
          <h3 className="w-11/12 text-[16px] font-bold text-center dark:text-white">
            {t('Trainee')} : {traineeName}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#5F49AC] font-semibold">Weekly Ratings</h1>
          <div className="">
            <div className="flex gap-4 rounded-2xl border-[#707070] border-2 w-fit px-4">
              <div className="text-[#4B4B4B] text-xs text-center">Filter</div>
              <div>
                <button
                  type="button"
                  onClick={() => setSelectViewWeek(!selectViewWeek)}
                  className="inline-flex font-light justify-center w-full rounded-md "
                >
                  {currentWeek}
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
            </div>

            {selectViewWeek ? (
              <div className="fixed mt-1 w-56 rounded-md shadow-lg bg-white z-99">
                <div className="py-1">
                  {weekOptions.map((week) => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <p
                      key={week}
                      onClick={() => {
                        setSelectWeek(week);
                        setSelectViewWeek(!selectViewWeek);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    >
                      Week {week}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div>
          {selectedWeekRatings.map((rating: any) => (
            <div key={rating.sprint} className="py-6 ">
              <div className="rounded-[15px] shadow-lg bg-white w-fit">
                <table>
                  <thead>
                    <tr>
                      <th className="px-6 py-2">Week</th>
                      <th className="px-6 py-2">Quality</th>
                      <th className="px-6 py-2">Quantity</th>
                      <th className="px-6 py-2 ">Professionalism</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t-[#C7C7C7]">
                      <td className="px-6 py-2 text-center border-t-[#C7C7C7]">
                        Week {rating.sprint}
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
              </div>
              <div className="pt-6 flex gap-4">
                Feedback :
                <div>
                  {rating.feedbacks.length !== 0
                    ? rating.feedbacks[0].content
                    : 'No feedback provided'}
                </div>
              </div>
            </div>
          ))}
        </div>
        {traineeStatus === 'active' ? (
          <div className=" flex justify-end py-4">
            <button
              type="button"
              className="bg-[#8667F2] rounded-md text-sm font-medium text-white hover:bg-opacity-40 h-[43px] px-3"
              onClick={() => setViewAddNewRating(true)}
            >
              New Rating
            </button>
          </div>
        ) : (
          <Dropout />
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
        />
      </div>
    </div>
  );
}

export default ViewWeeklyRatings;
