/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unstable-nested-components */
/* istanbul ignore file */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-bind */

/* istanbul ignore file */

import React, { useState, useEffect, useContext } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaCircle } from 'react-icons/fa';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { BsGraphUpArrow } from 'react-icons/bs';
import { MdDonutLarge } from 'react-icons/md';
import { ImTable } from 'react-icons/im';
import {
  endOfMonth,
  isWithinInterval,
  startOfMonth,
  startOfWeek,
  subMilliseconds,
  subMonths,
  subWeeks,
} from 'date-fns';
import TraineeChart from '../components/TraineeDashboardChart';
import Table from '../components/TraineeTable';
import { TRAINEE_RATING } from '../queries/ratings.queries';
// import { AiOutlineEye } from 'react-icons/ai';
import Comment from '../components/ViewComment';
import DataTable from '../components/DataTable';
import SimpleLineChart from '../components/MuiDashboard';
import { GET_PROFILE } from '../queries/user.queries';
import { ThemeContext } from '../hook/ThemeProvider';
import { handleError } from '../components/ErrorHandle';

function traineeDashboard() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('All');

  const { t } = useTranslation();
  const [cohort, setCohort] = useState<any>();
  const [selectedPhase, setSelectedPhase] = useState<any>();
  const [allPhase, setAllPhase] = useState<string[]>([]);
  const [noRating, setNoRating] = useState(false);

  const [quantityValue, setQuantityValue] = useState<any>('0');
  const [qualityValue, setQualityValue] = useState<any>('0');
  const [performanceValue, setPerformanceValue] = useState<any>('0');
  const { colorTheme } = useContext(ThemeContext);

  const [getProfile, { loading: getProfileLoading, refetch }] =
    useLazyQuery(GET_PROFILE);
  let {
    loading: fetchRatingsTraineeLoading,
    error,
    data,
  } = useQuery(TRAINEE_RATING);
  const [traineeRatingData, setTraineeRatingData] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setTraineeRatingData(data?.fetchRatingsTrainee);
      setAllPhase([
        ...new Set(
          data?.fetchRatingsTrainee?.map(
            (data: any) => data?.phase,
          ) as string[],
        ),
      ]);
    }
  }, [data]);

  // useEffect to filter data when selectedTimeFrame changes
  useEffect(() => {
    if (data) {
      const today = startOfWeek(new Date(), { weekStartsOn: 1 });
      const filtered = data?.fetchRatingsTrainee.filter((item: any) => {
        const createdAt = new Date(Number(item.createdAt));
        const isPhaseMatch = item.phase === selectedPhase;

        switch (selectedTimeFrame.toLowerCase()) {
          case 'all':
            return true;
          case 'last week':
            return (
              isWithinInterval(createdAt, {
                start: subWeeks(today, 1),
                end: subMilliseconds(today, 1),
              }) && isPhaseMatch
            );
          case 'last two weeks':
            return (
              isWithinInterval(createdAt, {
                start: subWeeks(today, 2),
                end: subMilliseconds(subWeeks(today, 1), 1),
              }) && isPhaseMatch
            );
          case 'last three weeks':
            return (
              isWithinInterval(createdAt, {
                start: subWeeks(today, 3),
                end: subMilliseconds(subWeeks(today, 2), 1),
              }) && isPhaseMatch
            );
          case 'last month':
            return (
              isWithinInterval(createdAt, {
                start: startOfMonth(subMonths(today, 1)),
                end: endOfMonth(subMonths(today, 1)),
              }) && isPhaseMatch
            );
          default:
            return false;
        }
      });
      setTraineeRatingData(filtered);
      setNoRating(filtered.length === 0);
    }
  }, [selectedPhase, selectedTimeFrame]);

  const columns = [
    {
      Header: `${t('Sprint')}`,
      accessor: 'sprint',
      Cell: ({ value }: any) => (
        <div className="flex justify-center items-center">{value}</div>
      ),
    },
    {
      Header: `${t('Quantity')}`,
      accessor: 'quantity',
      Cell: ({ value }: any) => (
        <div className="flex justify-center items-center">{value}</div>
      ),
    },
    {
      Header: `${t('Quality')}`,
      accessor: 'quality',
      Cell: ({ value }: any) => (
        <div className="flex justify-center items-center">{value}</div>
      ),
    },
    {
      Header: `${t('Professionalism')}`,
      accessor: 'professionalism',
      Cell: ({ value }: any) => (
        <div className="flex justify-center items-center">{value}</div>
      ),
    },
    {
      Header: `${t('Attendance')}`,
      accessor: 'attendance',
      Cell: ({ value }: any) => (
        <div className="flex justify-center items-center">{value}</div>
      ),
    },
    {
      Header: `${t('Comment')}`,
      accessor: '',
      Cell: ({ row }: any) => (
        <div className="flex justify-center items-center">
          <Comment remark={row.original.comment} />
        </div>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProfile();
        setCohort(data?.getProfile?.user?.team?.cohort?.name);
        if (selectedPhase === undefined) {
          setSelectedPhase(data?.getProfile?.user?.team?.cohort?.phase?.name);
          // setAllPhase([data?.getProfile?.user?.team?.cohort?.phase?.name]);
        }
      } catch (error: any) {}
    };
    fetchData();
  }, [selectedPhase, data]);

  if (data?.fetchRatingsTrainee) {
    data.fetchRatingsTrainee.forEach((rating: any) => {
      if (rating.feedbacks && rating.feedbacks.length > 0) {
        rating.feedbacks.forEach((feedback: any) => {
          const feedbackContent = feedback.content;
        });
      }
    });
  }

  useEffect(() => {
    const now = new Date(Date.now());
    let traineeData = data?.fetchRatingsTrainee
      ?.map(
        (item: {
          sprint: any;
          quality: string;
          quantity: string;
          professional_Skills: string;
          phase: any;
        }) => ({
          sprint: item.sprint,
          quality: parseInt(item.quality),
          quantity: parseInt(item.quantity),
          professionalism: parseInt(item.professional_Skills),
          phase: item.phase,
        }),
      )
      .filter((item: any) => item.phase === selectedPhase);

    if (traineeData?.length === 0) {
      setQuantityValue(parseInt(data?.fetchRatingsTrainee[0]?.quantity));
      setQualityValue(parseInt(data?.fetchRatingsTrainee[0]?.quality));
      setPerformanceValue(
        parseInt(data?.fetchRatingsTrainee[0]?.professionalism),
      );
    }
    if (data?.fetchRatingsTrainee?.length === 0) {
      setQuantityValue('');
      setQualityValue('');
      setPerformanceValue('');
      setNoRating(true);
    }
    if (traineeData?.length > 0) {
      const totalPerformance = traineeData.reduce(
        (acc: any, entry: any) => acc + entry.professionalism,
        0,
      );
      const totalQuality = traineeData.reduce(
        (acc: any, entry: any) => acc + entry.quality,
        0,
      );
      const totalQuantity = traineeData.reduce(
        (acc: any, entry: any) => acc + entry.quantity,
        0,
      );

      const averagePerformance = isNaN(totalPerformance / traineeData.length)
        ? 0
        : totalPerformance / traineeData.length;
      const averageQuality = isNaN(totalQuality / traineeData.length)
        ? 0
        : totalQuality / traineeData.length;
      const averageQuantity = isNaN(totalQuantity / traineeData.length)
        ? 0
        : totalQuantity / traineeData.length;

      const formattedPerformanceValue =
        averagePerformance % 1 !== 0
          ? averagePerformance?.toFixed(1)
          : averagePerformance;

      const formattedQuantityValue =
        averageQuantity % 1 !== 0
          ? averageQuantity?.toFixed(1)
          : averageQuantity;

      const formattedQualityValue =
        averageQuality % 1 !== 0 ? averageQuality?.toFixed(1) : averageQuality;

      setQuantityValue(formattedQuantityValue || 0);
      setQualityValue(formattedQualityValue);
      setPerformanceValue(formattedPerformanceValue);
    }
  }, [data, selectedPhase, qualityValue, quantityValue, performanceValue]);

  const transformedData = traineeRatingData.map(
    (item: {
      sprint: any;
      quality: string;
      quantity: string;
      professional_Skills: string;
      phase: any;
      createdAt: string;
    }) => ({
      sprint: item.sprint,
      quality: parseInt(item.quality),
      quantity: parseInt(item.quantity),
      professionalism: parseInt(item.professional_Skills),
      phase: item.phase,
      createdAt: item.createdAt,
    }),
  );

  transformedData.sort((a: any, b: any) => a.sprint - b.sprint);

  let chartData = traineeRatingData
    .map(
      (item: {
        sprint: any;
        quality: string;
        quantity: string;
        professional_Skills: string;
        attendance: string | null;
        phase: any;
        feedbacks: any;
      }) => ({
        sprint: item.sprint,
        quality: parseInt(item.quality),
        quantity: parseInt(item.quantity),
        professionalism: parseInt(item.professional_Skills),
        attendance: item.attendance || '0.0',
        phase: item.phase,
        comment: item.feedbacks[0]?.content,
      }),
    )
    .filter((item: any) => item.phase === selectedPhase);

  const getProgressBarStyles = (value: any) => {
    let pathColor = '#b71c1c';
    let textColor = '#b71c1c';

    if (value > 1) {
      pathColor = '#1b5e20';
      textColor = '#1b5e20';
    } else if (value === 1) {
      pathColor = '#e8ab02';
      textColor = '#e8ab02';
    } else {
      pathColor = '#b71c1c';
      textColor = '#b71c1c';
    }

    return buildStyles({
      pathColor,
      textColor,
    });
  };

  const timeFrames = [
    'All',
    'Last Week',
    'Last Two Weeks',
    'Last Three Weeks',
    'Last Month',
  ];

  const statsSkeleton = (
    <>
      <Skeleton
        baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
        highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
        width="30%"
        className="h-5 xmd:h-6 md:h-8 mt-1 mb-1 xmd:mb-2 md:mb-4"
      />
      <Skeleton
        baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
        highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
        className="h-32 xmd:h-48 mt-1 xmd:mt-4"
        inline
      />
    </>
  );

  return (
    <div className="flex flex-col gap-y-5 xmd:gap-y-10 w-[100%] lg:w-[95%] mx-auto my-6 dark:bg-dark-frame-bg text-[.85rem] xmd:text-[.9rem] md:text-[.95rem]">
      <div className="flex justify-between items-center">
        <div className="inline-flex bg-[#b8cdba]  h-9 xmd:h-10 px-3 xmd:px-5  items-center justify-between gap-x-2 xmd:gap-x-5 rounded-md  dark:bg-dark-bg font-medium  capitalize">
          {!getProfileLoading ? (
            <>
              <span>{cohort}</span>
              {allPhase.length > 0 && (
                <>
                  <span className="h-5 border border-black dark:border-white "></span>
                  <select
                    className="cursor-pointer bg-inherit outline-none"
                    onChange={(e) => setSelectedPhase(e.target.value)}
                    value={selectedPhase}
                  >
                    {allPhase.map((phase: any, index) => (
                      <option key={index} value={phase}>
                        {phase}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </>
          ) : (
            <Skeleton
              baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
              highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
              width="8rem"
              className="h-4"
              inline
            />
          )}
        </div>

        {!fetchRatingsTraineeLoading ? (
          <div className="flex items-center w-[6.5rem] xmd:w-fit h-8 xmd:h-9 rounded-md border border-black dark:border-white px-1 xmd:px-3 overflow-x-hidden">
            <span className="hidden xmd:block">Period:</span>
            <select
              id="timeFrame"
              value={selectedTimeFrame}
              onChange={(event) => {
                setSelectedTimeFrame(event.target.value);
              }}
              className="w-full border-none xmd:px-4 rounded-md bg-white dark:bg-dark-frame-bg  outline-none text-[.8rem] xmd:text-[.85rem] md:text-[.9rem]"
            >
              {timeFrames.map((timeFrame, index) => (
                <option key={index} value={timeFrame}>
                  {timeFrame}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="flex bg-[#b8cdba]  h-9 xmd:h-10 px-3 xmd:px-5 items-center rounded-md  dark:bg-dark-bg ">
            <Skeleton
              baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
              highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
              width="8rem"
              className="h-4 w-20"
              inline
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-4 min-h-[12rem] bg-tertiary dark:bg-dark-bg rounded-md px-4 xmd:px-5 md:px-9 pt-5 xmd:pt-8 pb-6 xmd:pb-10">
        {!fetchRatingsTraineeLoading && (
          <>
            <h1 className="font-semibold text-[.92rem] xmd:text-[.95rem] lg:text-lg">
              Phase Performance Score
            </h1>
            <div className="flex justify-between xmd:mx-8 lg:mx-10 gap-x-4 mt-2 xmd:mt-6  ">
              {noRating ? (
                <div className="border dark:border-[#7a7a7a] border-[#cccccc] rounded-md -mt-3 xmd:-mt-4 flex flex-col items-center justify-center gap-y-5 w-full px-3 py-10 xmd:py-14">
                  <MdDonutLarge className="text-5xl xmd:text-7xl" />
                  <div className="text-center leading-4">
                    <p className="text-[.85rem] xmd:text-base font-bold text-red-500">
                      You have no performance scores{' '}
                      {`${
                        selectedTimeFrame.toLowerCase() === 'all'
                          ? 'available'
                          : `for ${selectedTimeFrame.toLowerCase()}`
                      }`}
                    </p>
                    <p className="text-[.7rem] xmd:text-[.78rem] mt-2">
                      Once you receive ratings, your performance scores will be
                      displayed here
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-1/4 xmd:w-fit flex flex-wrap items-center justify-center gap-1">
                    <div className="flex items-center w-[4.5rem] h-20 xmd:h-28 xmd:w-[6.5rem] ">
                      <CircularProgressbar
                        value={(quantityValue / 2) * 100}
                        text={`${quantityValue}`}
                        styles={getProgressBarStyles(quantityValue)}
                      />
                    </div>

                    <div className="flex gap-x-2">
                      <FaCircle className="w-2 mt-[3px]" />
                      <div className="leading-4">
                        <p className="text-[.83rem] xmd:text-[.88rem] md:text-[.95rem] font-medium text-nowrap">
                          Quantity
                        </p>
                        <p
                          className={`text-[.8rem] xmd:text-[.85rem] ${
                            quantityValue > 1
                              ? 'text-[#1b5e20]'
                              : quantityValue === 1
                              ? 'text-[#e8ab02]'
                              : 'text-[#b71c1c]'
                          }`}
                        >
                          {noRating
                            ? 'No ratings yet '
                            : quantityValue >= 1.5
                            ? 'Very Good'
                            : quantityValue >= 1
                            ? 'Good'
                            : 'Need to improve'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 xmd:w-fit flex flex-wrap items-center justify-center gap-1 ">
                    <div className="flex items-center w-[4.5rem] h-20 xmd:h-28 xmd:w-[6.5rem] ">
                      <CircularProgressbar
                        value={(qualityValue / 2) * 100}
                        text={`${qualityValue}`}
                        styles={getProgressBarStyles(qualityValue)}
                      />
                    </div>

                    <div className="flex justify-center gap-x-2">
                      <FaCircle className="w-2 mt-[3px]" />
                      <div className="leading-4">
                        <p className="text-[.83rem] xmd:text-[.88rem] md:text-[.95rem] font-medium text-nowrap">
                          Quality
                        </p>
                        <p
                          className={`leading-3 text-[.8rem] xmd:text-[.85rem] ${
                            qualityValue > 1
                              ? 'text-[#1b5e20]'
                              : qualityValue === 1
                              ? 'text-[#e8ab02]'
                              : 'text-[#b71c1c]'
                          }`}
                        >
                          {noRating
                            ? 'No ratings yet'
                            : qualityValue >= 1.5
                            ? 'Very Good'
                            : qualityValue >= 1
                            ? 'Good'
                            : 'Need to improve'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 xmd:w-fit flex flex-wrap items-center justify-center gap-1">
                    <div className="flex items-center w-[4.5rem] h-20 xmd:h-28 xmd:w-[6.5rem] ">
                      <CircularProgressbar
                        value={(performanceValue / 2) * 100}
                        text={`${performanceValue}`}
                        styles={getProgressBarStyles(performanceValue)}
                      />
                    </div>

                    <div className="flex gap-x-2">
                      <FaCircle className="w-2 mt-[3px]" />
                      <div className="leading-4">
                        <p className="text-[.83rem] xmd:text-[.88rem] md:text-[.95rem] font-medium text-nowrap tracking-tight">
                          Professionalism
                        </p>
                        <p
                          className={`text-[.8rem] xmd:text-[.85rem] ${
                            performanceValue > 1
                              ? 'text-[#1b5e20]'
                              : performanceValue === 1
                              ? 'text-[#e8ab02]'
                              : 'text-[#b71c1c]'
                          }`}
                        >
                          {noRating
                            ? 'No ratings yet'
                            : performanceValue >= 1.5
                            ? 'Very Good'
                            : performanceValue >= 1
                            ? 'Good'
                            : 'Need to improve'}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
        {fetchRatingsTraineeLoading && statsSkeleton}
      </div>
      <div className="flex flex-col gap-y-4 min-h-[14rem] bg-tertiary dark:bg-dark-bg rounded-md px-4 xmd:px-5 md:px-9 py-5 xmd:py-8">
        {!fetchRatingsTraineeLoading && (
          <>
            <h1 className="font-semibold text-[.92rem] xmd:text-[.95rem] lg:text-lg">
              Stats
            </h1>
            <div className="flex ml-5 -mr-7 xmd:ml-7 xmd:mr-2 lg:mx-10 mt-2 xmd:mt-6">
              {noRating ? (
                <div className="-ml-5 mr-7 xmd:ml-2 xmd:mr-4 md:mx-0 border dark:border-[#7a7a7a] border-[#cccccc] rounded-md -mt-3 xmd:-mt-4 flex flex-col items-center justify-center gap-y-5 w-full px-3 py-10 xmd:py-14">
                  <BsGraphUpArrow className="text-5xl xmd:text-7xl" />
                  <div className="text-center  leading-4">
                    <p className="text-[.85rem] xmd:text-base font-bold text-red-500">
                      You have no statistics{' '}
                      {`${
                        selectedTimeFrame.toLowerCase() === 'all'
                          ? 'available'
                          : `for ${selectedTimeFrame.toLowerCase()}`
                      }`}
                    </p>
                    <p className="text-[.7rem] xmd:text-[.78rem] mt-2">
                      Once you receive ratings they will be displayed here
                    </p>
                  </div>
                </div>
              ) : (
                <TraineeChart barChartData={chartData} />
              )}
            </div>
          </>
        )}
        {fetchRatingsTraineeLoading && statsSkeleton}
      </div>
      <div className="flex flex-col gap-y-4 min-h-[12rem] bg-tertiary dark:bg-dark-bg rounded-md  py-5 xmd:py-8">
        {!fetchRatingsTraineeLoading && (
          <>
            <h1 className="font-semibold text-[.92rem] xmd:text-[.95rem] lg:text-lg px-4 xmd:px-5 md:px-9">
              Performance Overview & Feedback
            </h1>
            <div className="xmd:mx-7 lg:mx-10 mt-2 xmd:mt-6">
              {noRating ? (
                <div className="mx-4 xmd:mx-5 md:mx-9">
                  <div className=" border dark:border-[#7a7a7a] border-[#cccccc] rounded-md -mt-3 xmd:-mt-4 flex flex-col items-center justify-center gap-y-5 w-full px-3 py-10 xmd:py-14">
                    <ImTable className="text-5xl xmd:text-7xl" />
                    <div className="text-center leading-4">
                      <p className="text-[.85rem] xmd:text-base font-bold text-red-500">
                        You have no feedbacks{' '}
                        {`${
                          selectedTimeFrame.toLowerCase() === 'all'
                            ? 'available'
                            : `for ${selectedTimeFrame.toLowerCase()}`
                        }`}
                      </p>
                      <p className="text-[.7rem] xmd:text-[.78rem] mt-2">
                        Once you receive ratings your recent feedbacks will be
                        displayed here
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between px-4 xmd:px-5 md:px-9">
                    <div className="flex items-center gap-x-1 xmd:gap-x-5 md:gap-x-7 font-medium leading-5">
                      {allPhase.map((phase: any, index) => (
                        <>
                          {index !== 0 && (
                            <span
                              key={index + phase}
                              className="block border-l-2 border-black dark:border-white w-1 h-[85%]"
                            ></span>
                          )}
                          <span
                            key={index}
                            className={`${
                              phase === selectedPhase
                                ? 'border-b-[3px] border-primary pb-1'
                                : 'hover:border-b-[3px] hover:border-primary/60 pb-1 hover:pb-[2px]'
                            } px-2 cursor-pointer`}
                            onClick={() => setSelectedPhase(phase)}
                          >
                            {phase}
                          </span>
                        </>
                      ))}
                    </div>
                    {noRating ? (
                      ''
                    ) : (
                      <div className="flex items-center w-[6.5rem] xmd:w-fit h-8 xmd:h-9 rounded-md border border-black dark:border-white px-1 xmd:px-3 overflow-x-hidden">
                        <span className="hidden xmd:block">Filter:</span>
                        <select
                          id="timeFrame"
                          value={selectedTimeFrame}
                          onChange={(event) => {
                            setSelectedTimeFrame(event.target.value);
                          }}
                          className="w-full border-none xmd:px-4 rounded-md bg-inherit dark:bg-dark-bg  outline-none text-[.8rem] xmd:text-[.85rem] md:text-[.9rem]"
                        >
                          {timeFrames.map((timeFrame, index) => (
                            <option key={index} value={timeFrame}>
                              {timeFrame}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                  <div>
                    {chartData.length > 0 && (
                      <DataTable
                        columns={columns}
                        data={chartData ? (chartData as [any]) : []}
                        title={t('')}
                        loading={fetchRatingsTraineeLoading}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </>
        )}
        {fetchRatingsTraineeLoading && (
          <div className="px-4 xmd:px-5 md:px-9">{statsSkeleton}</div>
        )}
      </div>
    </div>
  );
}

export default traineeDashboard;
