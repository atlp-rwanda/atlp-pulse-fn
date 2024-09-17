/* istanbul ignore file */

import React from 'react';
import { z } from 'zod';
import Button from '../Buttons';
import useAddRating from './hooks/useAddNewRating';

// Define the Zod schema
const ratingSchema = z.object({
  quality: z.string().nonempty('Quality is required'),
  quantity: z.string().nonempty('Quantity is required'),
  professional: z.string().nonempty('Professionalism is required'),
  feedback: z.string().nonempty('leave a feedback'),
});

interface RatingErrors {
  quality: string;
  quantity: string;
  professional: string;
  feedback: string;
}

interface AddNewRatingsProps {
  viewAddNewRating: boolean;
  t: (key: string) => string;
  setViewAddNewRating: (value: boolean) => void;
  traineeCohort: string;
  traineeId: string;
  maxSprint: number;
  organizationToken: string | null;
  refetchQuery: () => void;
  setSuccessMessage: (message: string) => void;
}

function AddNewRatings({
  viewAddNewRating,
  t,
  setViewAddNewRating,
  traineeCohort,
  traineeId,
  maxSprint,
  organizationToken,
  refetchQuery,
  setSuccessMessage,
}: AddNewRatingsProps) {
  const {
    feedbackError,
    ratingErrors,
    createRatings,
    loading,
    createFeedback,
    feedbackLoading,
    ratingData,
    setRatingData,
    setRatingErrors,
    setFeedbackError,
    onClose,
    initialRatingData,
  } = useAddRating({
    setViewAddNewRating,
    traineeCohort,
    traineeId,
    maxSprint,
    organizationToken,
    refetchQuery,
    setSuccessMessage,
  });

  const handleSubmit = async () => {
    try {
      // Validate the ratingData against the schema
      ratingSchema.parse(ratingData);

      // If validation passes, call the API functions
      await createRatings();
      await createFeedback();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const errors: Partial<RatingErrors> = error.errors.reduce(
          (acc, err) => {
            acc[err.path[0] as keyof RatingErrors] = err.message;
            return acc;
          },
          {} as Partial<RatingErrors>,
        );

        setRatingErrors({
          quality: errors.quality || '',
          quantity: errors.quantity || '',
          professional: errors.professional || '',
        });
        setFeedbackError(errors.feedback || '');
      }
    }
  };

  return (
    <div className={`${viewAddNewRating ? '' : 'hidden'} pb-6 font-serif`}>
      <div className="pt-2 pb-6">
        <hr className="bg-[#868686] h-[2px]" />
      </div>
      <div>
        <div className="py-2 flex justify-between">
          <h1 className="text-[#5F49AC] dark:text-[#C7B9F9] font-semibold">
            {t('Add New Rating')}
          </h1>
          <h2 className="rounded-md px-3 py-2 border dark:bg-[#6F6F6F] border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm  dark:text-dark-text-fill dark:border-white ">
            Sprint {maxSprint + 1}
          </h2>
        </div>
        <div className="my-2 mt-6 md:mt-4 flex flex-col gap-3 md:flex-row">
          <div className="w-40 h-28 flex flex-col gap-2 md:flex-col justify-start items-center ">
            <h1 className="w-full font-medium">{t('Quality')}:</h1>
            <select
              name="quality"
              value={ratingData.quality}
              onChange={(e) => {
                setRatingData({
                  ...ratingData,
                  quality: e.target.value,
                });
                setRatingErrors({ ...ratingErrors, quality: '' });
              }}
              id="qualityRating"
              className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-[#6F6F6F] border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
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
            {ratingErrors.quality ? (
              <p className="text-red-500 text-xs">{t(ratingErrors.quality)}</p>
            ) : (
              ''
            )}
          </div>

          <div className="w-40 h-28 flex flex-col gap-2 md:flex-col justify-start items-center ">
            <h1 className="w-full font-medium">{t('Quantity')}:</h1>
            <select
              name="quantity"
              value={ratingData.quantity}
              onChange={(e) => {
                setRatingData({
                  ...ratingData,
                  quantity: e.target.value,
                });
                setRatingErrors({
                  ...ratingErrors,
                  quantity: '',
                });
              }}
              id="quantityRating"
              className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-[#6F6F6F] border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
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
            {ratingErrors.quantity ? (
              <p className="text-red-500 text-xs">{t(ratingErrors.quantity)}</p>
            ) : (
              ''
            )}
          </div>

          <div className="w-40 h-28 flex flex-col gap-2 md:flex-col justify-start items-center ">
            <h1 className="w-full font-medium">{t('Professionalism')}:</h1>
            <select
              value={ratingData.professional}
              onChange={(e) => {
                setRatingData({
                  ...ratingData,
                  professional: e.target.value,
                });
                setRatingErrors({
                  ...ratingErrors,
                  professional: '',
                });
              }}
              id="propfessionalismRating"
              className="rounded-md appearance-none dark:bg-[#6F6F6F] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
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
            {ratingErrors.professional ? (
              <p className="text-red-500 text-xs">
                {t(ratingErrors.professional)}
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
        <div>
          <h1 className="pb-3 font-medium">{t('Feedback')} :</h1>
          <textarea
            className="h-32 w-full dark:bg-[#6F6F6F] rounded-xl px-3 py-2"
            placeholder={t('Feedback in general about the performance')}
            value={ratingData.feedback ? ratingData.feedback : ''}
            onChange={(e) => {
              setRatingData({
                ...ratingData,
                feedback: e.target.value,
              });
              setFeedbackError('');
            }}
          />
          {feedbackError ? (
            <p className="text-red-500 text-xs">{t(feedbackError)}</p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="mt-4 md:mt-8 flex justify-end">
        <Button
          type="button"
          variant="primary"
          size="sm"
          style="inline-flex justify-center float-right rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          onClick={() => {
            onClose();
            setRatingData(initialRatingData);
            setFeedbackError('');
            setRatingErrors({ quality: '', quantity: '', professional: '' });
          }}
        >
          {t('Cancel')}
        </Button>
        <Button
          type="submit"
          variant="primary"
          size="sm"
          style="inline-flex justify-center float-right rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          onClick={handleSubmit}
          loading={loading || feedbackLoading}
        >
          {t('Add')}
        </Button>
      </div>
    </div>
  );
}

export default AddNewRatings;
