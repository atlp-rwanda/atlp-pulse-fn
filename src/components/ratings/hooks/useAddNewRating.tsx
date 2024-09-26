/* istanbul ignore file */

import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ADD_FEEDBACK, ADD_RATING } from '../../../Mutations/Ratings';

const useAddRating = ({
  setViewAddNewRating,
  traineeCohort,
  traineeId,
  maxSprint,
  organizationToken,
  refetchQuery,
  setSuccessMessage,
}: any) => {
  const [feedbackError, setFeedbackError] = useState('');
  const initialRatingData = {
    quality: '',
    quantity: '',
    professional: '',
    feedback: '',
  };
  const [ratingData, setRatingData] = useState(initialRatingData);
  const [ratingErrors, setRatingErrors] = useState({
    quality: '',
    quantity: '',
    professional: '',
  });

  const onClose = () => {
    setViewAddNewRating(false);
  };
  const [createRatings, { loading }] = useMutation(ADD_RATING, {
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
      if (
        err.message.includes('quality') &&
        err.message.includes('quantity') &&
        err.message.includes('professional_Skills')
      ) {
        setRatingErrors({
          quality: 'Provide Quality range between 1-2',
          quantity: 'Provide Quantity range between 1-2',
          professional: 'Provide Professional_Skills range between 1-2',
        });
      } else if (
        err.message.includes('quality') &&
        err.message.includes('quantity')
      ) {
        setRatingErrors({
          quality: 'Provide Quality range between 1-2',
          quantity: 'Provide Quantity range between 1-2',
          professional: '',
        });
      } else if (
        err.message.includes('quality') &&
        err.message.includes('professional_Skills')
      ) {
        setRatingErrors({
          quality: 'Provide Quality range between 1-2',
          quantity: '',
          professional: 'Professional rating is required',
        });
      } else if (
        err.message.includes('quantity') &&
        err.message.includes('professional_Skills')
      ) {
        setRatingErrors({
          quality: '',
          quantity: 'Provide Quantity range between 1-2',
          professional: 'Professional rating is required',
        });
      } else if (err.message.includes('quality')) {
        setRatingErrors({
          quality: 'Provide Quality range between 1-2',
          quantity: '',
          professional: '',
        });
      } else if (err.message.includes('quantity')) {
        setRatingErrors({
          quality: '',
          quantity: 'Provide Quantity range between 1-2',
          professional: '',
        });
      } else if (err.message.includes('professional_Skills')) {
        setRatingErrors({
          quality: '',
          quantity: '',
          professional: 'Professional rating is required',
        });
      }
    },
    onCompleted: () => {
      setRatingErrors({
        quality: '',
        quantity: '',
        professional: '',
      });
    },
  });
  const [createFeedback, { loading: feedbackLoading }] = useMutation(
    ADD_FEEDBACK,
    {
      variables: {
        sprint: (maxSprint + 1).toString(),
        user: traineeId,
        content: ratingData.feedback.toString(),
      },
      onError: (err) => {
        setFeedbackError('This Trainee was Dropped out ');
      },
      onCompleted: () => {
        setRatingData(initialRatingData);
        setFeedbackError('');
        refetchQuery();
        setSuccessMessage('Rating was successful !!');
        onClose();
      },
    },
  );
  return {
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
  };
};

export default useAddRating;