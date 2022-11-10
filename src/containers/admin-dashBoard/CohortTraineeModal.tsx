import { gql, useMutation, useLazyQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Cohort } from './Cohorts';
import ModalDataTable from '../../components/ModalDataTable';
import { GET_COHORT_TRAINEES_QUERY } from '../../Mutations/manageStudentMutations';
import ButtonLoading from '../../components/ButtonLoading';

const organizationToken = localStorage.getItem('orgToken');

export default function CohortTraineeModal({
  cohortTraineeModal,
  currentCohort,
  removeModel,
  refetch,
}: {
  cohortTraineeModal: boolean;
  currentCohort: Cohort | undefined;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();

  const [traineeData, setTraineeData] = useState<any[]>([]);
  const columns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('email'), accessor: 'email' },
    { Header: t('rating'), accessor: 'rating' },
    { Header: t('cohort'), accessor: 'cohort' },
    { Header: t('program'), accessor: 'program' },
  ];
  const datum: any = [];

  const [getCohortTraineesQuery, { loading }] = useLazyQuery(
    GET_COHORT_TRAINEES_QUERY,
    {
      variables: {
        orgToken: organizationToken,
        cohort: currentCohort ? currentCohort.name : '',
      },
    },
  );

  if (traineeData && traineeData.length > 0) {
    traineeData?.map((data: any, index: number): any => {
      datum[index] = {};
      datum[index].name = data.profile.name;
      datum[index].email = data.email;
      datum[index].rating = '2';
      datum[index].cohort = data.cohort.name;
      datum[index].program = data.cohort.program.name;
      return datum;
    });
  }

  useEffect(() => {
    getCohortTraineesQuery({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setTraineeData(data.getCohortTrainees);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }, [currentCohort]);

  return (
    <div
      className={`h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${
        cohortTraineeModal === true ? 'block' : 'hidden'
      }`}
    >
      {!loading ? (
        <ModalDataTable
          data={traineeData?.length > 0 ? datum : [{}]}
          columns={columns}
          title={t('Trainees list')}
          removeModel={removeModel}
        />
      ) : (
        <ButtonLoading style="rounded-full inline-block" />
      )}
    </div>
  );
}
