import { useMutation, useSubscription } from '@apollo/client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ADD_RATING, ADD_FEEDBACK } from '../../Mutations/Ratings';

function AddNewRatings({
  viewAddNewRating,
  t,
  setViewAddNewRating,
  traineeCohort,
  traineeId,
  maxSprint,
  organizationToken,
  refetchQuery,
}: any) {
  const initialRatingData = {
    quality: '',
    quantity: '',
    professional: '',
    feedback: '',
  };

  const [ratingData, setRatingData] = useState(initialRatingData);
  const onClose = () => {
    setViewAddNewRating(false);
  };
  const [createRatings] = useMutation(ADD_RATING, {
    variables: {
      cohort: traineeCohort,
      user: traineeId,
      sprint: maxSprint + 1,
      quantity: ratingData.quantity.toString(),
      quantityRemark: '',
      quality: ratingData.quality.toString(),
      qualityRemark: '',
      professionalSkills: ratingData.professional.toString(),
      professionalRemark: '',
      orgToken: organizationToken,
    },
    onError: (err) => {
      toast.error(err.message || 'Something went wrong');
    },
    onCompleted: () => {
      //   refetchQuery();
      setRatingData(initialRatingData);
    },
  });
  const [createFeedfback] = useMutation(ADD_FEEDBACK, {
    variables: {
      sprint: (maxSprint + 1).toString(),
      user: traineeId,
      content: ratingData.feedback.toString(),
    },
    onError: (err) => {
      toast.error(err.message || 'Something went wrong');
    },
    onCompleted: () => {
      setRatingData(initialRatingData);
      refetchQuery();
      onClose();
      toast.success('Successfully done');
    },
  });

  return (
    <div className={`${viewAddNewRating ? '' : 'hidden'} pb-6`}>
      <div className="pt-2 pb-6">
        <hr className="bg-[#868686] h-[2px]" />
      </div>
      <div>
        <h1 className="text-[#5F49AC] font-semibold">Add New Rating</h1>
        <div className="dark:bg-dark-frame-bg  p-2 my-2 mt-6 md:mt-8 flex flex-col gap-3 md:flex-row">
          <div className="w-full flex flex-col gap-3 md:flex-col justify-start items-center ">
            <h1 className="w-full font-semibold">{t(' Quality')}:</h1>
            <select
              name="quality"
              value={ratingData.quality}
              onChange={(e) =>
                setRatingData({
                  ...ratingData,
                  quality: e.target.value,
                })
              }
              id="qualityRating"
              className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
            >
              <option value="" disabled>
                {t('Select rating')}
              </option>
              <>
                {[0, 1, 2]?.map((grade: any) => (
                  <option key={grade}>{grade}</option>
                ))}
              </>
            </select>
          </div>

          <div className="w-full flex flex-col gap-3 md:flex-col justify-start items-center ">
            <h1 className="w-full font-semibold">{t(' Quantity')}:</h1>
            <select
              name="quantity"
              value={ratingData.quantity}
              onChange={(e) =>
                setRatingData({
                  ...ratingData,
                  quantity: e.target.value,
                })
              }
              id="quantityRating"
              className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
            >
              <option value="" disabled>
                {t('Select rating')}
              </option>
              <>
                {[0, 1, 2]?.map((grade: any) => (
                  <option key={grade}>{grade}</option>
                ))}
              </>
            </select>
          </div>

          <div className="w-full flex flex-col gap-3 md:flex-col justify-start items-center ">
            <h1 className="w-full font-semibold">{t(' Professionalism')}:</h1>
            <select
              value={ratingData.professional}
              onChange={(e) =>
                setRatingData({
                  ...ratingData,
                  professional: e.target.value,
                })
              }
              id="propfessionalismRating"
              className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
            >
              <option value="" disabled>
                {t('Select rating')}
              </option>
              <>
                {[0, 1, 2]?.map((grade: any) => (
                  <option key={grade}>{grade}</option>
                ))}
              </>
            </select>
          </div>
        </div>
        <div>
          <h1 className="pb-3">Feedback :</h1>
          <textarea
            name=""
            id=""
            cols={50}
            className="h-[117px] w-[585px]"
            onChange={(e) =>
              setRatingData({
                ...ratingData,
                feedback: e.target.value,
              })
            }
          >
            {ratingData.feedback}
          </textarea>
        </div>
      </div>
      <div className="mt-4 md:mt-8 flex justify-end gap-4">
        <button
          type="submit"
          className="inline-flex justify-center float-right rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          onClick={async (e) => {
            e.preventDefault();
            await createRatings();
            await createFeedfback();
            onClose();
          }}
        >
          {t('Add')}
        </button>
        <button
          type="button"
          className="rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40"
          onClick={onClose}
        >
          {t('Cancel')}
        </button>
      </div>
    </div>
  );
}

export default AddNewRatings;
