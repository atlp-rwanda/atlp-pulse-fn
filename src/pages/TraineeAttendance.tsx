/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Pagination from '../components/Pagination';
import { GET_ATTENDANCE, UPDATE_ATTENDANCE } from '../Mutations/Attendance';
import 'react-circular-progressbar/dist/styles.css';
import ButtonLoading from '../components/ButtonLoading';

/* istanbul ignore next */
function TraineeAttendanceTracker() {
  const [submittingAttendance, setSubmittingAttendance] = useState(false);

  const [addEventModel, setAddEventModel] = useState(false);
  const [emailsAndStatuses, setemailsAndStatuses] = useState<any[]>([]);
  let week: any = [];
  const { loading, data } = useQuery(GET_ATTENDANCE);
  const [selectedWeek, setSelectedWeek] = useState<number>(0);





  useEffect(() => {
    getAttend({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        week = data.getTraineeAttendance.length;
        const traineeData = data.getTraineeAttendance[selectedWeek].trainees;
        /* istanbul ignore next */
        function extractEmailsAndStatus(traineeData: any) {
          return traineeData.map(
            (item: { traineeId: any; traineeEmail: any; status: any }) => ({
              traineeId: item.traineeId,
              traineeEmail: item.traineeEmail,
              status: item.status,
            }),
          );
        }

        setemailsAndStatuses(extractEmailsAndStatus(traineeData)); // Update the state with new data
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }, [selectedWeek, loading]);
  const { t } = useTranslation();
  const removeModel = (e: any) => {
    e.preventDefault();
    const newState = !addEventModel;
    setAddEventModel(newState);
  };

  const handleToggleModal = () => {
    setAddEventModel(!addEventModel);
  };

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = Pagination({
    contentPerPage: 5,
    count: emailsAndStatuses.length,
  });

  const [days, setDays] = useState<any>();
  const [weeks, setweeks] = useState();
  const [createAttend] = useMutation(UPDATE_ATTENDANCE);

  const [getAttend] = useLazyQuery(GET_ATTENDANCE, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
  });

  // update attendance
  const [updateAttend, setUpdateAttend] = useState({
    week: 0,
    days: '',
    trainees: [
      {
        traineeId: '',
        status: [
          {
            value: '',
          },
        ],
      },
    ],
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  }: any = useForm();
  /* istanbul ignore next */
  const handleTakeAttedValue = (event: any, TraineeId: any) => {
    const { value } = event.target;
    setUpdateAttend((prevState) => {
      const existingTraineeIndex = prevState.trainees.findIndex(
        (trainee) => trainee.traineeId === TraineeId,
      );

      if (existingTraineeIndex !== -1) {
        const updatedTrainees = [...prevState.trainees];
        updatedTrainees[existingTraineeIndex].traineeId = TraineeId;
        updatedTrainees[existingTraineeIndex].status[0].value = value;
        return { ...prevState, trainees: updatedTrainees };
      }
      const emptyTraineeIndex = prevState.trainees.findIndex(
        (trainee) => trainee.traineeId === '',
      );

      if (emptyTraineeIndex !== -1) {
        const updatedTrainees = [...prevState.trainees];
        updatedTrainees[emptyTraineeIndex].traineeId = TraineeId;
        updatedTrainees[emptyTraineeIndex].status[0].value = value;
        return { ...prevState, trainees: updatedTrainees };
      }
      const newTrainee = {
        traineeId: TraineeId,
        status: [{ value }],
      };
      const updatedTrainees = [...prevState.trainees, newTrainee];
      return { ...prevState, trainees: updatedTrainees };
    });
  };

  // handle take day
  const handleDays = (e: any) => {
    setDays(e.target.value);
    setUpdateAttend((prevState) => ({ ...prevState, days: e.target.value }));
  };

  const handelWeeks = (e: any) => {
    setweeks(e.target.value);
    setUpdateAttend((prevState) => ({ ...prevState, week: e.target.value }));
  };
  /* istanbul ignore next */
  const onSubmit = async () => {
    try {
      setSubmittingAttendance(true);
      await createAttend({
        variables: {
          ...updateAttend,
          recordAttendanceOrgToken2: localStorage.getItem('orgToken'),
        },
        onCompleted: (data) => {
          const newData = data.recordAttendance.trainees;
          setemailsAndStatuses(newData);
          setTimeout(() => { }, 500);
          setSubmittingAttendance(false);
          toast.success('Attendance updated');
          setAddEventModel(false); // Move toast here
        },
        onError: (error) => {
          toast.error(error.message);
          setSubmittingAttendance(false);
        },
      });
    } catch (error: any) {
      toast.error(error);
    }
  };

  let zeo = 0;
  let two = 0;
  let one = 0;



  emailsAndStatuses.forEach((item) => {

    /* istanbul ignore next */
    for (const element of item.status) {

      if (element.value === 0) {
        zeo++;
      } else if (element.value === 1) {
        one++;
      } else {
        two++;
      }
    }
  });
  const totalvalues = emailsAndStatuses?.length * 5;

  const zeroparc = Math.round((zeo / totalvalues) * 100);
  const oneparc = Math.round((one / totalvalues) * 100);
  const twoparc = Math.round((two / totalvalues) * 100);

  const [index, setIndex] = useState(4);


  return (
    <>
      <div
        className={`font-serif w-screen bg-black bg-opacity-30 backdrop-blur-sm min-h-[100%] fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${addEventModel === true ? 'block' : 'hidden'
          }`}
      >
        {
          <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8 font-serif">
            <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
              <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
                {t('Take Attendance')}
              </h3>
              <hr className=" bg-primary border-b my-3 w-full" />
            </div>
            <div className="card-body  bg-white dark:bg-dark-bg">
              <form
                data-testid="handleAddEvent"
                className=" py-3 px-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="input my-3 h-12  felx flex-col">
                  <div className="grouped-input flex items-center h-full w-full rounded-md">
                    <select
                      data-testid="testWeek"
                      className={`${errors.weeks ? 'border-red-500' : 'border-primary'
                        } dark:bg-dark-tertiary dark:text-white border ${errors.weeks ? 'border-red-500' : 'border-primary'
                        } rounded outline-none px-5 font-sans text-xs py-2 w-full`}
                      {...register('weeks', { required: 'Week is required' })}
                      value={weeks}
                      name="weeks"
                      onChange={(event) => {
                        setSelectedWeek(Number(event.target.value) - 1);
                        handelWeeks(event);
                      }}
                      defaultValue=""
                    >
                      <option value="">{t('Select week')}</option>
                      <option value="1">{t('Week 1')}</option>
                      <option value="2">{t('Week 2')}</option>
                      <option value="3">{t('Week 3')}</option>
                      <option value="4">{t('Week 4')}</option>
                    </select>
                  </div>{' '}
                  <p className="text-red-500 text-xs mb-8">
                    {errors?.weeks?.message}
                  </p>
                </div>
                <div className="input my-3 h-12  flex flex-col">
                  <div className="grouped-input flex items-center h-full  w-full rounded-md">
                    <select
                      data-testid="getDay"
                      className={`${errors.days ? 'border-red-500' : 'border-primary'
                        } dark:bg-dark-tertiary dark:text-white border ${errors.days ? 'border-red-500' : 'border-primary'
                        } rounded outline-none px-5 font-sans text-xs py-2 w-full`}
                      {...register('days', { required: 'Day is required' })}
                      value={days}
                      name="days"
                      onChange={(e) => {
                        handleDays(e);
                        if (e.target.value === 'Monday') {
                          setIndex(0); // Set the index to 0 when "Monday" is selected
                        }
                        if (e.target.value === 'Tuesday') {
                          setIndex(1); // Set the index to 0 when "Monday" is selected
                        }
                        if (e.target.value === 'Wednesday') {
                          setIndex(2); // Set the index to 0 when "Monday" is selected
                        }
                        if (e.target.value === 'Thursday') {
                          setIndex(3); // Set the index to 0 when "Monday" is selected
                        }
                        if (e.target.value === 'Friday') {
                          setIndex(4); // Set the index to 0 when "Monday" is selected
                        }
                      }}
                      defaultValue=""
                    >
                      <option value="">{t('Select day')}</option>
                      <option value="Monday">{t('Monday')}</option>
                      <option value="Tuesday">{t('Tuesday')}</option>
                      <option value="Wednesday">{t('Wednesday')}</option>
                      <option value="Thursday">{t('Thursday')}</option>
                      <option value="Friday">{t('Friday')}</option>
                    </select>
                  </div>
                  <p className="text-red-500 text-xs mb-4">
                    {errors?.days?.message}
                  </p>
                </div>
                <div className=" dark:bg-dark-tertiary dark:text-white overflow-y-auto h-[50vh] overflow-scroll scrollbar-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:text-white overflow-scroll">
                    <thead className="dark:bg-dark-tertiary dark:text-white">
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider dark:bg-dark-tertiary dark:text-white">
                          Trainee
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider dark:bg-dark-tertiary dark:text-white">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {emailsAndStatuses.slice().map((item: any) => (
                        /* istanbul ignore next */
                        <tr key={item.traineeId}>
                          {loading || !data ? (
                            <p className="text-white">loading</p>
                          ) : (
                            <>
                              <td className="border-b border-gray-300 px-4 py-2">
                                {item.traineeEmail}
                              </td>
                              <td className="flex justify-center border-b border-gray-300">
                                <select
                                  data-testid="getValue"
                                  onChange={(e) =>
                                    handleTakeAttedValue(e, item.traineeId[0])
                                  }
                                  className="  flex justify-start  px-4 py-2 rounded-md text-white font-medium cursor-pointer border border-primary dark:bg-dark-tertiary dark:text-white"
                                >
                                  <option value={item.status[index]?.value}>
                                    Score {item.status[index]?.value || 0}
                                  </option>
                                  <option value="0">{t(' 0')}</option>
                                  <option value="1">{t(' 1')}</option>
                                  <option value="2">{t(' 2')}</option>
                                </select>
                              </td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="w-full flex justify-between mx-10px">
                  <button
                    type="button"
                    data-testid="removeModel"
                    className="py-2 w-[40%] md:w-1/3 bg-primary rounded font-sans text-sm text-white"
                    style={{ height: '40px' }} // Apply a fixed height to the button
                    onClick={removeModel}
                  >
                    {t('cancel')}
                  </button>
                  {!submittingAttendance ? (
                    <button
                      type="submit"
                      disabled={submittingAttendance}
                      className="text-white py-2 w-[40%] md:w-1/3 bg-primary rounded"
                      style={{ height: '40px' }} // Apply a fixed height to the button
                    >
                      {t('Save')}
                    </button>
                  ) : (
                    <ButtonLoading style="rounded py-2 w-[40%]" />
                  )}
                </div>
              </form>
            </div>
          </div>
        }
      </div>
      <div className="bg-light-bg dark:bg-dark-frame-bg lg:px-8 overflow-y-scroll pb-6 font-serif">
        <div className="">
          <div className="flex items-center justify-between py-4 rounded-md w-full">
            <div className="flex py-2 mt-2 ">
              <h2>{t('Attendance Tracker')}</h2>
            </div>
            <div className="flex justify-left">
              <select
                data-testid="getWeek"
                className="flex text-black px-4 py-2 rounded-md font-medium cursor-pointer border border-primary dark:bg-dark-tertiary dark:text-white"
                onChange={(event) => {
                  setSelectedWeek(Number(event.target.value));
                }}
              >
                <option>{t('Select Week')}</option>
                <option value="0">{t('Week 1')}</option>
                <option value="1">{t('Week 2')}</option>
                <option value="2">{t('Week 3')}</option>
                <option value="3">{t('Week 4')}</option>
              </select>
              <h2
                aria-hidden
                data-testid="submitAttend"
                className="mx-3 bg-primary px-4 py-2 rounded-md text-white font-medium cursor-pointer"
                onClick={handleToggleModal} // Add this onClick event
              >
                {t('Submit Attendance')}
              </h2>
            </div>
          </div>
          <div className="bg-light-bg dark:bg-dark-frame-bg">
            <div className="">
              <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full">
                <div className="">
                  <div className="flex items-center justify-between" />
                </div>
                <div>
                  <div className="py-2 overflow-x-auto">
                    <div className="w-full lg:min-w-full shadow rounded-lg  ">
                      <table className="min-w-full leading-normal">
                        <thead className="rounded-lg">
                          <tr className="">
                            <th
                              rowSpan={2}
                              className="border border-gray-300 p-2"
                            >
                              {t('Trainee')}
                            </th>
                            <th
                              colSpan={5}
                              className="border border-gray-300 p-2"
                            >
                              {selectedWeek + 1}
                            </th>
                            {/* <th
                              rowSpan={2}
                              className="border border-gray-300 p-2"
                            >
                              {t('Action')}
                            </th> */}
                          </tr>
                          <tr className="">
                            <th className="border border-gray-300 ">
                              {t('Mon')}
                            </th>
                            <th className="border border-gray-300 p-2">
                              {t('Tue')}
                            </th>
                            <th className="border border-gray-300 p-2">
                              {t('Wed')}
                            </th>
                            <th className="border border-gray-300 p-2">
                              {t('Thu')}
                            </th>
                            <th className="border border-gray-300 p-2">
                              {t('Fri')}
                            </th>
                          </tr>
                        </thead>

                        {loading || !data ? (
                          <p>loading</p>
                        ) : (
                          <tbody>
                            {emailsAndStatuses
                              .slice(firstContentIndex, lastContentIndex)
                              .map((item: any) => (

                                <>
                                  <tr key={item.id}>
                                    <td className="w-[20%] border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                      <div className="flex justify-center items-center">
                                        <div className="">
                                          <p className="text-gray-900  dark:text-white whitespace-no-wrap">
                                            {item.traineeEmail}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                                      <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center ">
                                        {item.status.find((day: any) => day.days === 'Monday') ? item.status.find((day: any) => day.days === 'Monday').value : 0}
                                      </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                      <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                                        {item.status.find((day: any) => day.days === 'Tuesday') ? item.status.find((day: any) => day.days === 'Tuesday').value : 0}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                      <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                                        {item.status.find((day: any) => day.days === 'Wednesday') ? item.status.find((day: any) => day.days === 'Wednesday').value : 0}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                      <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                                        {item.status.find((day: any) => day.days === 'Thursday') ? item.status.find((day: any) => day.days === 'Thursday').value : 0}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                      <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                                        {item.status.find((day: any) => day.days === 'Friday') ? item.status.find((day: any) => day.days === 'Friday').value : 0}

                                      </p>
                                    </td>
                                    {/* <td className="w-[20%] border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                    <div className="flex justify-center items-center">
                                      <div className="">
                                        <p className="text-gray-900  dark:text-white whitespace-no-wrap">
                                          edit
                                        </p>
                                      </div>
                                    </div>
                                  </td> */}
                                  </tr>
                                </>

                              ))}
                          </tbody>
                        )}
                      </table>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1 mb-0">
                  <button
                    type="button"
                    onClick={prevPage}
                    data-testid="prev"
                    className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === 1 && 'disabled'
                      }`}
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    onClick={() => setPage(1)}
                    data-testid="page1"
                    className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === 1 && 'disabled'
                      }`}
                  >
                    1
                  </button>
                  {gaps.paginationGroup.map((el) => (
                    <button
                      type="button"
                      onClick={() => setPage(el)}
                      data-testid="page2"
                      key={el}
                      className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === el ? 'active' : ''
                        }`}
                    >
                      {el}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setPage(totalPages)}
                    data-testid="page3"
                    className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === totalPages && 'disabled'
                      }`}
                  >
                    {totalPages}
                  </button>
                  <button
                    type="button"
                    onClick={nextPage}
                    data-testid="next"
                    className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === totalPages && 'disabled'
                      }`}
                  >
                    &rarr;
                  </button>
                </div>
              </div>
              <div className="big0 flex flex-row mt-4 gap-2">
                <div className="big flex flex-col w-[50%] flex-1 gap-2">
                  <div className="bg-white flex flex-1 flex-col justify-center dark:bg-dark-bg border border-primary shadow-lg p-5 rounded-md w-full">
                    <h2 className="font-bold ">Overview cohort 1</h2>
                    <div>
                      <div className="flex flex-row ">
                        <div className="flex flex-row justify-center items-center  ">
                          <p className="text-right font-semibold">trainees:</p>
                        </div>

                        <div className="flex flex-row justify-center items-center  ">
                          <p className="text-right font-semibold">
                            {emailsAndStatuses?.length}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row  ">
                        <div className="flex flex-row justify-center items-center ">
                          <p className="text-right font-semibold">weeks:</p>
                        </div>

                        <div className="flex flex-row justify-center items-center ">
                          <p className="text-right font-semibold">
                            {' '}
                            {selectedWeek + 1}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row ">
                        <div className="flex flex-row justify-center items-center ">
                          <p className="text-right font-semibold">Phase:</p>
                        </div>

                        <div className="flex flex-row justify-center items-center ">
                          <p className="text-right font-semibold">II</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white flex flex-1 flex-col justify-center dark:bg-dark-bg border border-primary shadow-lg p-5 rounded-md w-full">
                    <h2 className="font-bold mb-4 ">Attendance Scores</h2>
                    <div>
                      <div className="flex flex-row ">
                        <div className="flex flex-row justify-center items-center ">
                          <p className="text-right font-semibold">0</p>
                        </div>

                        <div className="flex flex-row justify-center items-center px-2 ">
                          <p className="text-right font-semibold">
                            Didn't attend and didn't communicate
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row ">
                        <div className="flex flex-row ">
                          <p className="text-right font-semibold">1:</p>
                        </div>

                        <div className="flex flex-row px-2">
                          <p className="text-right font-semibold">
                            Didn't attend but communicated
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row  ">
                        <div className="flex flex-row justify-center items-center ">
                          <p className="text-right font-semibold">2:</p>
                        </div>

                        <div className="flex flex-row justify-center items-center px-2">
                          <p className="text-right font-semibold">Attended</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="big2 bg-white flex flex-col justify-start  dark:bg-dark-bg border  border-primary shadow-lg p-2 rounded-md w-[50%]">
                  <h2 className="font-bold ml-2 mb-4 ">
                    Attendance Score Parcentage
                  </h2>
                  <h2 className="font-bold ml-2">
                    Score Percentages (Percentages of trainee attendance at each
                    score)
                  </h2>
                  <div className="">
                    <div className="flex flex-row    px-8">
                      <p className="text-right font-semibold ">0:</p>
                      <p className="text-right ml-4"> {zeroparc || 0}%</p>
                    </div>
                    <div className="flex flex-row px-8 ">
                      <p className="text-right font-semibold">1:</p>
                      <p className="text-right ml-4"> {oneparc || 0}%</p>
                    </div>
                    <div className="flex flex-row px-8">
                      <p className="text-right font-semibold">2:</p>
                      <p className="text-right ml-4"> {twoparc || 0}%</p>
                    </div>
                  </div>
                  <div className=" w-[100%] h-[30%] flex flex-row  mt-5 justify-around items-center">
                    <div className=" w-[100px] flex flex-col justify-center items-center">
                      <CircularProgressbar
                        value={zeroparc || 0}
                        text={`${zeroparc || 0}%`}
                        styles={buildStyles({
                          // Customize the root element's size, color, etc.
                          // You can also adjust other styles like textSize, pathColor, trailColor, etc.
                          pathColor: `#8667f2`,
                          textColor: `#8667f2`, // Set the desired color here
                        })}
                      />
                      <label htmlFor="0"> score 0</label>
                    </div>

                    <div className=" w-[100px] flex flex-col justify-center items-center">
                      <CircularProgressbar
                        value={oneparc || 0}
                        text={`${oneparc || 0}%`}
                        styles={buildStyles({
                          // Customize the root element's size, color, etc.
                          // You can also adjust other styles like textSize, pathColor, trailColor, etc.
                          pathColor: `#8667f2`,
                          textColor: `#8667f2`, // Set the desired color here
                        })}
                      />
                      <label htmlFor="0"> Score 1</label>
                    </div>
                    <div className=" w-[100px] flex flex-col justify-center items-center">
                      <CircularProgressbar
                        value={twoparc || 0}
                        text={`${twoparc || 0}%`}
                        styles={buildStyles({
                          // Customize the root element's size, color, etc.
                          // You can also adjust other styles like textSize, pathColor, trailColor, etc.
                          pathColor: `#8667f2`,
                          textColor: `#8667f2`, // Set the desired color here
                        })}
                      />
                      <label htmlFor="0"> Score 2</label>
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

export default TraineeAttendanceTracker;
