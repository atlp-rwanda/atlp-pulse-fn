import React, { useState, Fragment, useEffect } from 'react';
import { Listbox, Transition, Dialog } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import {
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from '@apollo/client';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';
import useDocumentTitle from '../hook/useDocumentTitle';
import Sidebar from '../components/Sidebar';
import Button from '../components/Buttons';
import { DEFAULT_GRADE } from '../Mutations/MakeDefault';
import {
  ADD_RATING,
  UPDATE_RATING,
  RATING_BY_COHORT,
  GET_FEEDBACKS_SUBSCRIPTION,
} from '../Mutations/Ratings';
import {
  GET_COHORTS_QUERY,
  GET_COHORT_TRAINEES_QUERY,
} from '../Mutations/manageStudentMutations';

import { sprint } from '../dummyData/ratings';
import DataTable from '../components/DataTable';
import GRADING_SYSTEM_QUERY from './GradingSystemQuery';
import AddRatings from './ratings/addRatings';
import CoordinatorRemarks from './ratings/CoordinatorRemarks';
import { ExportToExcel } from './AdminRatings';

function classNames(...classes: any) {
  /* istanbul ignore next */
  return classes.filter(Boolean).join(' ');
}

const initialRatingData = {
  quality: '',
  qualityRemark: '',
  quantity: '',
  quantityRemark: '',
  professional: '',
  professionalRemark: '',
  userEmail: '',
  average: '',
};

type UserDataItem = {
  Email: any;
  Quality: any;
  Qualityremark: any;
  Quantity: any;
  Quantityremark: any;
  Professional: any;
  ProfessionalRemark: any;
  Sprint: any;
  Cohort: any;
};

function TraineeRatingDashboard() {
  const organizationToken = localStorage.getItem('orgToken');

  useDocumentTitle('Ratings');
  const { t } = useTranslation();
  const [trainee, setTrainee] = useState<any>([]);
  const [cohorts, setCohorts] = useState<any>([]);
  const [selectedCohort, setSelectedCohort] = useState(cohorts[0]);
  const [selectedSprint, setSelectedSprint] = useState(sprint[0]);
  const [cohortName, setCohortName] = useState<string>(cohorts[0]?.name || '');

  const [disable, setDisable] = useState(false);
  const [ratingData, setRatingData] = useState(initialRatingData);
  const [rows, setRows] = useState({
    quality: '0',
    qualityremark: '',
    quantity: '0',
    quantityremark: '',
    feedbacks: [],
    professional: '0',
    professionalRemark: '',
    bodyQuantity: '',
    bodyQuality: '',
    bodyProfessional: '',
    sprint: '0',
    username: '',
    user: '',
    id: '',
  });
  const [showActions, setShowActions] = useState(false);
  const [showRemarks, setShowRemarks] = useState(false);
  const [ratingsByCohort, setRatingsByCohort] = useState<any[]>([]);
  const [defaultGrading, setDefaultGrading] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [toggle, setToggle] = useState(false);
  const [usedata, setUserdata] = React.useState<UserDataItem[]>([]);
  const fileName = 'userInfo';

  useEffect(() => {
    if (ratingsByCohort) {
      const customHeadings: UserDataItem[] = ratingsByCohort.map(
        (row: any) => ({
          Email: row.user.email,
          Quality: row.quality,
          Qualityremark: row.qualityRemark,
          Quantity: row.quantity,
          Quantityremark: row.quantityRemark,
          Professional: row.professional_Skills,
          ProfessionalRemark: row.professionalRemark,
          Sprint: row.sprint,
          Cohort: row.cohort.name,
          Feedback: row.feedbacks,
        }),
      );
      setUserdata(customHeadings);
    }
  }, [ratingsByCohort]);

  /* istanbul ignore next */
  const addFeedbacks = (
    sprint: string | number,
    userId: string,
    feedbacks: [any],
  ) => {
    const newRatings = ratingsByCohort;
    const index = newRatings.findIndex(
      (val) =>
        `${val?.sprint}` === `${sprint}` && `${val?.user?.id}` === `${userId}`,
    );
    if (feedbacks.length) {
      newRatings[index].feedbacks = [
        ...newRatings[index].feedbacks,
        ...feedbacks,
      ];
      setRatingsByCohort([...newRatings]);
    }
  };

  /* istanbul ignore next */
  const closeRemarksModal = () => {
    setShowRemarks(false);
  };

  const closeModal = () => {
    setShowActions(false);
  };

  /* istanbul ignore next */
  const closeCancel = () => {
    setShowActions(false);
  };

  /* istanbul ignore next */
  const handleToggle = () => {
    setToggle(!toggle);
  };

  /* istanbul ignore next */
  const handleUpdate = (e: any) => {
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    updateRatings();
    handleToggle();
    closeModal();
  };

  /* istanbul ignore next */
  const columns = [
    { Header: `${t('Email')}`, accessor: 'user[email]' },
    { Header: `${t('Phase')}`, accessor: 'cohort[phase[name]]' },
    { Header: `${t('Sprint')}`, accessor: 'sprint' },
    { Header: `${t('Quantity')}`, accessor: 'quantity' },
    { Header: `${t('Quality')}`, accessor: 'quality' },
    { Header: `${t('Professional skills')}`, accessor: 'professional_Skills' },
    { Header: `${t('Average')}`, accessor: 'average' },
    {
      Header: `${t('Actions')}`,
      accessor: '',
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: ({ row }: any) => (
        <div className="flex flex-row">
          <div className="cursor-pointer">
            <Icon
              icon="bx:edit-alt"
              color="#9e85f5"
              onClick={() => {
                setShowActions(!showActions);
                setRows({
                  ...rows,
                  quality: row.original.quality,
                  qualityremark: row.original.qualityRemark,
                  quantity: row.original.quantity,
                  quantityremark: row.original.quantityRemark,
                  professional: row.original.professional_Skills,
                  professionalRemark: row.original.professionalRemark,
                  sprint: row.original.sprint,
                  username: row.original.user.profile.name,
                  user: row.original.user.email,
                  id: row.original.user.id,
                });
              }}
            />
          </div>
        </div>
      ),
    },
    {
      Header: `${t('Remarks')}`,
      accessor: '',
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: ({ row }: any) => (
        <div className="flex flex-row">
          <div className="cursor-pointer">
            <Icon
              icon="ant-design:comment-outlined"
              width="25"
              height="25"
              color="#9e85f5"
              onClick={() => {
                setShowRemarks(!showRemarks);
                setRows({
                  ...rows,
                  quality: row.original.quality,
                  qualityremark: row.original.qualityRemark,
                  bodyQuality: row.original.bodyQuality,
                  quantity: row.original.quantity,
                  quantityremark: row.original.quantityRemark,
                  feedbacks: row.original.feedbacks,
                  bodyQuantity: row.original.bodyQuantity,
                  professional: row.original.professional_Skills,
                  professionalRemark: row.original.professionalRemark,
                  bodyProfessional: row.original.bodyProfessional,
                  sprint: row.original.sprint,
                  username: row.original.user.profile.name,
                  user: row.original.user.email,
                  id: row.original.user.id,
                });
              }}
            />
          </div>
        </div>
      ),
    },
  ];
  const resetForm = () => {
    setRatingData(initialRatingData);
    setSelectedSprint(sprint[0]);
  };

  /* istanbul ignore next */
  const [createRatings] = useMutation(ADD_RATING, {
    variables: {
      cohort: selectedCohort?.id,
      user: ratingData.userEmail,
      sprint: selectedSprint?.name,
      quantity: ratingData.quantity.toString(),
      quantityRemark: ratingData.quantityRemark.toString(),
      quality: ratingData.quality.toString(),
      qualityRemark: ratingData.qualityRemark.toString(),
      professionalSkills: ratingData.professional.toString(),
      professionalRemark: ratingData.professionalRemark.toString(),
      orgToken: organizationToken,
    },
    onError: (err) => {
      toast.error(err.message || 'Something went wrong');
    },
    onCompleted: () => {
      handleToggle();
      closeCancel();
      resetForm();
      toast.success('Successfully done');
    },
  });
  /* istanbul ignore next */
  const [updateRatings] = useMutation(UPDATE_RATING, {
    variables: {
      user: rows.id,
      sprint: rows.sprint,
      quantity: rows?.quantity,
      quantityRemark: rows?.quantityremark,
      quality: rows?.quality,
      qualityRemark: rows?.qualityremark,
      professionalSkills: rows?.professional,
      professionalRemark: rows?.professionalRemark,
      orgToken: organizationToken,
    },
    onError: (err) => {
      toast.error(err.message || 'something went wrong');
      setShowActions(true);
    },
    onCompleted: () => {
      toast.success('waiting for admin approval');
    },
  });
  const [DefaultGrade] = useLazyQuery(DEFAULT_GRADE, {});

  const [RatingByCohort, { loading }] = useLazyQuery(RATING_BY_COHORT, {
    variables: {
      cohortName: selectedCohort?.name,
    },
  });

  const [getCohorts] = useLazyQuery(GET_COHORTS_QUERY, {
    variables: {
      orgToken: organizationToken,
    },
  });

  /* istanbul ignore next */
  useSubscription(GET_FEEDBACKS_SUBSCRIPTION, {
    onData: ({
      data: {
        data: { newfeedbacks },
      },
    }) => {
      addFeedbacks(newfeedbacks?.sprint, newfeedbacks?.user, [
        newfeedbacks?.data,
      ]);
    },
    variables: {
      sprintUser: `${JSON.stringify(
        ratingsByCohort.map((val) => ({
          sprint: `${val?.sprint}`,
          user: val?.user?.id,
        })),
      )}`,
    },
  });

  const [getUsers] = useLazyQuery(GET_COHORT_TRAINEES_QUERY, {
    variables: {
      orgToken: organizationToken,
      cohort: cohortName,
    },
  });

  /* istanbul ignore next */
  function getCohortUsers() {
    getUsers({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setTrainee(data?.getCohortTrainees);
      },
      onError: (error) => {
        toast.error(error?.message || 'Something went wrong');
      },
    });
  }

  /* istanbul ignore next */
  function getRatingByCohort() {
    RatingByCohort({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setRatingsByCohort(data?.fetchRatingByCohort);
      },
      onError: (error) => {
        toast.error(error?.message || 'Failed to load the data');
      },
    });
  }

  const { data } = useQuery(GRADING_SYSTEM_QUERY);
  const handleSaveClick = () => {
    if (
      ratingData.quality === ' null' &&
      ratingData.quantity === 'null' &&
      ratingData.professional === 'null'
    ) {
      toast.error('Please provide ratings before saving.');
    }
  };
  /* istanbul ignore next */
  useEffect(() => {
    getCohortUsers();
    getRatingByCohort();

    DefaultGrade({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setDefaultGrading(data?.getDefaultGrading[0]?.grade);
      },
      onError: (error) => {
        toast.error(error?.message || 'Failed to load the data');
      },
    });

    getCohorts({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        const cohorts = data?.getCohorts;
        setCohorts(cohorts);
        setSelectedCohort(cohorts[0]);
        if (cohorts[0].name) setCohortName(cohorts[0]?.name);
      },
      onError: (error) => {
        toast.error(error?.message || 'Failed to load the data');
      },
    });
  }, [toggle, updateRatings]);

  return (
    <>
      <div className="flex flex-col bg-light-bg dark:bg-dark-frame-bg font-serif">
        <div className="flex flex-row">
          <div className="w-[100%]">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg max-h-full overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col w-full mx-auto md:flex-row relative gap-x-4 items-end">
                  {/* SELECT COHORT DROPDOWN START */}
                  <div className="flex flex-col md:ml-a w-40">
                    <Listbox
                      value={selectedCohort}
                      onChange={
                        /* istanbul ignore next */
                        (e) => {
                          setSelectedCohort(e);
                          setCohortName(e?.name);
                          setDisable(false);
                          getCohortUsers();
                          getRatingByCohort();
                        }
                      }
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block text-lg font-medium text-gray-700 dark:text-dark-text-fill mt-2">
                            {t('Cohort')}
                          </Listbox.Label>
                          <div className="relative mt-1">
                            <Listbox.Button
                              className="relative md:w-full p-30 h-8 cursor-default rounded-md border border-primary bg-primary py-2 pl-3 pr-10 text-left shadow-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
                              data-testid="cohortList"
                            >
                              <span className="flex items-center">
                                <span className="ml-3 block truncate text-white">
                                  {selectedCohort?.name}
                                </span>
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <SelectorIcon
                                  className="h-5 w-5 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>
                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-1/2 md:w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {cohorts?.map((cohort: any) => (
                                  <Listbox.Option
                                    key={cohort?.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? 'text-white bg-primary'
                                          : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                      )
                                    }
                                    value={cohort}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <div className="flex items-center">
                                          <span
                                            className={classNames(
                                              selected
                                                ? 'font-semibold'
                                                : 'font-normal',
                                              'ml-3 block truncate',
                                            )}
                                          >
                                            {cohort?.name}
                                          </span>
                                        </div>
                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? 'text-white'
                                                : 'text-primary',
                                              'absolute inset-y-0 right-0 flex items-center pr-4',
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>

                  {/* SELECT COHORT DROPDOWN END */}
                  <AddRatings
                    createRatings={createRatings}
                    trainee={trainee}
                    query={query}
                    setQuery={setQuery}
                    selectedSprint={selectedSprint}
                    setSelectedSprint={setSelectedSprint}
                    defaultGrading={defaultGrading}
                    setDefaultGrading={setDefaultGrading}
                    disable={disable}
                    ratingData={ratingData}
                    setRatingData={setRatingData}
                  />
                  {/* ADD NEW RATING MODAL END */}
                  <div className="mt-2">
                    <ExportToExcel data={usedata} fileName={fileName} />
                  </div>
                  {/* UPDATE MODAL START */}
                  <Transition
                    appear
                    show={showActions}
                    as={Fragment}
                    data-testid="modalTransistion"
                  >
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={closeModal}
                    >
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
                        <div className="flex min-h-full  items-center justify-center p-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full overflow-auto lg:mx-60 xl:mx-96 md:h-[500px] transform h-fit rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
                              <form onSubmit={handleUpdate}>
                                <Dialog.Title
                                  as="h3"
                                  className="text-lg font-medium leading-6 text-gray-900 dark:text-dark-text-fill"
                                >
                                  {t('Update rating')}
                                </Dialog.Title>
                                <div className="bg-gray-100 dark:bg-dark-frame-bg rounded-md p-2 my-2 flex flex-col md:flex-row">
                                  <div className="mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center ">
                                    <Button
                                      variant="default"
                                      size="md"
                                      style="text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2"
                                    >
                                      {t('Quality')}
                                    </Button>
                                    <div className="flex flex-col justify-start items-start w-full my-0 md:my-2">
                                      <select
                                        name="quality"
                                        value={rows.quality}
                                        onChange={(e) => {
                                          setRows({
                                            ...rows,
                                            quality: e.target.value,
                                          });
                                        }}
                                        id="qualityRating"
                                        className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
                                      >
                                        <option value="-1" disabled>
                                          {t('Select rating')}
                                        </option>
                                        <>
                                          {defaultGrading?.map((grade: any) => (
                                            <option key={grade}>{grade}</option>
                                          ))}
                                        </>
                                      </select>
                                    </div>
                                    <textarea
                                      value={rows.qualityremark}
                                      onChange={(e) =>
                                        setRows({
                                          ...rows,
                                          qualityremark: e.target.value,
                                        })
                                      }
                                      id=""
                                      rows={5}
                                      className="rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill dark:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10"
                                      placeholder="Quality ratings remark"
                                      name="qualityDescription"
                                      data-testid="qualityDescriptionTextArea"
                                    />{' '}
                                  </div>
                                  <div className="mx-0 md:mx-2  my-1 w-full flex flex-col md:flex-col justify-start items-center ">
                                    <Button
                                      variant="default"
                                      size="md"
                                      style="text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2"
                                    >
                                      {t('Quantity')}
                                    </Button>
                                    <div className="flex flex-col justify-start items-start w-full my-0 md:my-2">
                                      <select
                                        name="quantity"
                                        id="quantityRating"
                                        value={rows.quantity}
                                        onChange={(e) =>
                                          setRows({
                                            ...rows,
                                            quantity: e.target.value,
                                          })
                                        }
                                        className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
                                      >
                                        <option value="-1" disabled>
                                          {t('Select rating')}
                                        </option>
                                        <>
                                          {defaultGrading?.map((grade: any) => (
                                            <option key={grade}>{grade}</option>
                                          ))}
                                        </>
                                      </select>
                                    </div>
                                    <textarea
                                      name="quantityDescription"
                                      id=""
                                      value={rows.quantityremark}
                                      onChange={(e) =>
                                        setRows({
                                          ...rows,
                                          quantityremark: e.target.value,
                                        })
                                      }
                                      rows={5}
                                      className="rounded-md w-full  my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white"
                                      placeholder="Quantity rating remark"
                                    />
                                  </div>
                                  <div className="mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center ">
                                    <Button
                                      variant="default"
                                      size="md"
                                      style="text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2"
                                    >
                                      {t('Professionalism')}
                                    </Button>
                                    <div className="flex flex-col justify-start items-start w-full my-0 md:my-2">
                                      <select
                                        name="professional"
                                        id="qualityRating"
                                        value={rows.professional}
                                        onChange={(e) =>
                                          setRows({
                                            ...rows,
                                            professional: e.target.value,
                                          })
                                        }
                                        className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
                                      >
                                        <option value="-1" disabled>
                                          {t('Select rating')}
                                        </option>
                                        <>
                                          {defaultGrading?.map((grade: any) => (
                                            <option key={grade}>{grade}</option>
                                          ))}
                                        </>
                                      </select>
                                    </div>
                                    <textarea
                                      name="proffessionalDescription"
                                      id=""
                                      value={rows.professionalRemark}
                                      onChange={(e) =>
                                        setRows({
                                          ...rows,
                                          professionalRemark: e.target.value,
                                        })
                                      }
                                      rows={5}
                                      className="rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white"
                                      placeholder="Professional rating remark"
                                    />
                                  </div>
                                </div>
                                <div className="">
                                  <button
                                    type="submit"
                                    className="inline-flex justify-center float-right rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                  >
                                    {t('Save')}
                                  </button>
                                  <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                    onClick={closeCancel}
                                  >
                                    {t('Cancel')}
                                  </button>
                                </div>
                              </form>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                  {/* UPDATE MODAL END */}

                  {/* REMARKS MODEL START */}
                  <CoordinatorRemarks
                    rows={rows}
                    showRemarks={showRemarks}
                    closeModal={closeRemarksModal}
                  />
                  {/* REMARKS MODEL END */}
                </div>
                <div className="w-full">
                  <div>
                    <div className="bg-light-bg dark:bg-dark-frame-bg ">
                      <div className="mt-10 ">
                        {data === 0 ? (
                          <div className="text-center mt-7 text-lg uppercase">
                            <p> {t('No ratings data found')}</p>

                            {/* <Square /> */}
                          </div>
                        ) : (
                          <DataTable
                            data={ratingsByCohort}
                            columns={columns}
                            title={t('Performance Ratings')}
                            loading={loading}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TraineeRatingDashboard;