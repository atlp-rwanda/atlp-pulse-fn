import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { FETCH_ALL_RATINGS } from '../../../queries/ratings.queries';

const useViewTraineeRatings = ({ traineeEmail, selectSprint }: any) => {
  const organizationToken = localStorage.getItem('orgToken');
  const [selectViewSprint, setSelectViewSprint] = useState(false);
  const [viewAddNewRating, setViewAddNewRating] = useState(false);
  const [allRatings, setAllRatings] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const { t }: any = useTranslation();

  const { data, refetch, loading } = useQuery(FETCH_ALL_RATINGS, {
    variables: {
      orgToken: organizationToken,
    },
  });

  useEffect(() => {
    if (data && data.fetchAllRatings) {
      setAllRatings(data.fetchAllRatings);
    }
  }, [data]);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [successMessage]);

  const traineeRatings = allRatings.filter(
    (rating: any) => rating.user.email === traineeEmail,
  );
  const maxSprint =
    traineeRatings.length > 0
      ? Math.max(...traineeRatings.map((rating: any) => rating.sprint))
      : 0;
  const sprintOptions = Array.from(
    { length: maxSprint },
    (_, index) => index + 1,
  );

  const selectedSprintRatings =
    selectSprint !== null
      ? traineeRatings.filter((rating: any) => rating.sprint === selectSprint)
      : traineeRatings.filter((rating: any) => rating.sprint === maxSprint);

  const currentSprint = selectSprint
    ? `Sprint ${selectSprint}`
    : `Sprint ${maxSprint}`;

  const onClose = () => {
    navigate('/ttl-trainees');
  };
  useEffect(() => {
    const updateWindowWidth = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  });
  return {
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
  };
};

export default useViewTraineeRatings;
