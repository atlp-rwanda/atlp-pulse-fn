import React, {
  useEffect,
  useMemo,
  useState,
  Fragment,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery, useSubscription } from '@apollo/client';
import { toast } from 'react-toastify';
import { Transition, Dialog } from '@headlessui/react';
import Button from './Buttons';
import {
  GET_FEEDBACK_SUBSCRIPTION,
  TRAINEE_RATING,
} from '../Mutations/Ratings';
import DataTable from './DataTable';
import Frame from '../pages/ratings/frame';

type detailsModelProps = {
  data: any;
};
/* istanbul ignore next */
function DetailsModel({ data }: detailsModelProps) {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [allFeeds, setAllFeeds] = useState<any[]>(data?.feedbacks);

  const closeModal = useCallback(() => {
    setToggle(false);
  }, []);

  useSubscription(GET_FEEDBACK_SUBSCRIPTION, {
    onData: ({ data }) => {
      setAllFeeds((p) => [...p, data.data.newfeedback]);
    },
    variables: {
      sprint: `${data?.sprint}`,
      user: `${data?.user.id}`,
    },
  });

  return (
    <div className=" ">
      <Button
        variant="primary"
        size="sm"
        style="px-4 py-0 text-sm"
        onClick={
          /* istanbul ignore next */
          () => {
            setToggle(!toggle);
          }
        }
      >
        {t('Details')}
      </Button>
      <Transition
        appear
        show={toggle}
        as={Fragment}
        data-testid="modalTransistion"
      >
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full overflow-auto lg:mx-60 xl:mx-96 h-[800px] md:h-[600px] transform  rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
                  <Frame
                    rows={{
                      sprint: data?.sprint,
                      quantityremark: data?.quantityRemark,
                      qualityremark: data?.qualityRemark,
                      professionalRemark: data?.professionalRemark,
                      id: data?.user.id,
                      username: data?.cohort.coordinator.profile.name,
                      user: data?.cohort.coordinator.email,
                    }}
                    allFeeds={allFeeds}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

// trainee perfomance page

function TraineePerfomance() {
  const [ratings, setRatings] = useState<any>([]);
  const { t } = useTranslation();

  const [getRatings, { loading }] = useLazyQuery(TRAINEE_RATING, {});
  useEffect(() => {
    getRatings({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        /* istanbul ignore next */
        setRatings(data?.fetchRatingsTrainee);
        /* istanbul ignore next */
        sessionStorage.removeItem('data');
      },
      onError: (error) => {
        /* istanbul ignore next */
        toast.error(error?.message || 'Something went wrong');
      },
    });
  }, [getRatings]);

  const columns = useMemo(
    () => [
      { Header: `${t('Sprint')}`, accessor: 'sprint' },
      { Header: `${t('Phase')}`, accessor: 'cohort[phase[name]]' },
      { Header: `${t('Quantity')}`, accessor: 'quantity' },
      { Header: `${t('Quality')}`, accessor: 'quality' },
      {
        Header: `${t('Professional skills')}`,
        accessor: 'professional_Skills',
      },
      { Header: `${t('Average')}`, accessor: 'average' },
      {
        Header: `${t('Actions')}`,
        accessor: '',
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: ({ row: { original } }: any) => <DetailsModel data={original} />,
      },
    ],
    undefined,
  );

  return (
    <>
      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8 pb-10 pt-28">
        <div className="px-3 md:px-8">
          <DataTable
            data={ratings}
            columns={columns}
            title={t('Performance score')}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
}

export default TraineePerfomance;
