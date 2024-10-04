/* istanbul ignore file */

import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_TRAINEES_QUERY } from '../../queries/manageStudent.queries';
import ViewWeeklyRatings from '../../components/ratings/ViewWeeklyRatings';

function ViewTraineeRatings() {
  const { userId } = useParams();
  const traineeId = userId?.replace(/'/g, '');
  const organizationToken = localStorage.getItem('orgToken');
  const [trainee, setTrainee] = useState<any>(null);

  const { data } = useQuery(GET_TRAINEES_QUERY, {
    variables: {
      orgToken: organizationToken,
    },
  });
  useEffect(() => {
    if (data && data.getTrainees) {
      const filteredTrainees = data.getTrainees.filter(
        (trainee: any) => trainee?.profile?.user?.id === userId,
      );

      setTrainee(filteredTrainees);
    }
  }, [data, traineeId]);

  if (!trainee || trainee.length === 0) {
    return <p>No trainee data available.</p>;
  }

  const traineeData = trainee[0];

  return (
    <>
      <ViewWeeklyRatings
        traineeName={traineeData?.profile?.name}
        traineeEmail={traineeData.email}
        traineeId={userId}
        traineeCohort={traineeData.team?.cohort?.id}
        traineeStatus={traineeData.profile?.user?.status}
      />
    </>
  );
}

export default ViewTraineeRatings;
