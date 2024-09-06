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
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import TraineeChart from '../components/TraineeDashboardChart';
import Table from '../components/TraineeTable';
import { TRAINEE_RATING } from '../Mutations/Ratings';
// import { AiOutlineEye } from 'react-icons/ai';
import Comment from '../components/ViewComment';
import DataTable from '../components/DataTable';

const GET_PROFILE = gql`
  query {
    getProfile {
      user {
        team {
          cohort {
            name
            phase {
              name
            }
          }
        }
      }
      firstName
      lastName
      phoneNumber
      address
      city
      country
      avatar
      cover
      name
      biography
      githubUsername
    }
  }
`;
const organizationToken = localStorage.getItem('orgToken');
/* istanbul ignore file */

function SupAdDashboard() {
  const { t } = useTranslation();
  const [profileData, setProfileData] = useState<any>();
  const [cohort, setCohort] = useState<any>();
  const [phase, setPhase] = useState<any>();
  const [sprint, setSprint] = useState<any>();
  const [selectedSprint, setSelectedSprint] = useState('');
  const [norating, setNorating] = useState(false);

  const [quantityValue, setQuantityValue] = useState<any>();
  const [qualityValue, setQualityValue] = useState<any>();
  const [perfomanceValue, setPerfomanceValue] = useState<any>();

  const { loading, error, data } = useQuery(TRAINEE_RATING);
  const [getProfile, { refetch }] = useLazyQuery(GET_PROFILE);
  const columns = [
    { Header: `${t('Sprint')}`, accessor: 'sprint' },
    { Header: `${t('Quantity')}`, accessor: 'quantity' },
    { Header: `${t('Quality')}`, accessor: 'quality' },
    { Header: `${t('Professionalism')}`, accessor: 'professionalism' },
    {
      Header: `${t('Comment')}`,
      accessor: '',
      Cell: ({ row }: any) => (
        <div className="flex items-center">
          <div className="cursor-pointer">
            <Comment remark={row.original.comment} />
          </div>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProfile();
        setProfileData(data);
        setCohort(data?.getProfile?.user?.team?.cohort?.name);
        if (phase === undefined) {
          setPhase(data?.getProfile?.user?.team?.cohort?.phase?.name);
        }
      } catch (error: any) { }
    };
    fetchData();
  }, [phase, data]);

  if (data?.fetchRatingsTrainee) {
    data.fetchRatingsTrainee.forEach((rating: any) => {
      if (rating.feedbacks && rating.feedbacks.length > 0) {
        rating.feedbacks.forEach((feedback: any) => {
          const feedbackContent = feedback.content;
          console.log('Feedback Content:', feedbackContent);
        });
      }
    });
  }

  useEffect(() => {
    let traineeData = data?.fetchRatingsTrainee
      ?.map(
        (item: {
          sprint: any;
          quality: string;
          quantity: string;
          professional_Skills: string;
          professionalRemark: any;
          phase: any;
        }) => ({
          sprint: item.sprint,
          quality: parseInt(item.quality),
          quantity: parseInt(item.quantity),
          professionalism: parseInt(item.professional_Skills),
          phase: item.phase,
        }),
      )
      .filter((item: any) => item.phase === phase);

    if (traineeData?.length === 0) {
      setQuantityValue(parseInt(data?.fetchRatingsTrainee[0]?.quantity));
      setQualityValue(parseInt(data?.fetchRatingsTrainee[0]?.quality));
      setPerfomanceValue(
        parseInt(data?.fetchRatingsTrainee[0]?.professionalism),
      );
    }
    if (data?.fetchRatingsTrainee?.length === 0) {
      setQuantityValue('');
      setQualityValue('');
      setPerfomanceValue('');
      setNorating(true);
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

      setQuantityValue(formattedQuantityValue);
      setQualityValue(formattedQualityValue);
      setPerfomanceValue(formattedPerformanceValue);
    }
  }, [data, phase, qualityValue, quantityValue, perfomanceValue]);

  const phases = [
    ...new Set(data?.fetchRatingsTrainee?.map((data: any) => data?.phase)),
  ];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const rating = data?.fetchRatingsTrainee[0];

  const transformedData = data?.fetchRatingsTrainee?.map(
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
  );

  transformedData.sort((a: any, b: any) => a.sprint - b.sprint);

  const totalPerformance = transformedData.reduce(
    (acc: any, entry: any) => acc + entry.professionalism,
    0,
  );
  const totalQuality = transformedData.reduce(
    (acc: any, entry: any) => acc + entry.quality,
    0,
  );
  const totalQuantity = transformedData.reduce(
    (acc: any, entry: any) => acc + entry.quantity,
    0,
  );

  const averagePerformance = isNaN(totalPerformance / transformedData.length)
    ? 0
    : totalPerformance / transformedData.length;
  const averageQuality = isNaN(totalQuality / transformedData.length)
    ? 0
    : totalQuality / transformedData.length;
  const averageQuantity = isNaN(totalQuantity / transformedData.length)
    ? 0
    : totalQuantity / transformedData.length;

  const chartData = data?.fetchRatingsTrainee
    ?.map(
      (item: {
        sprint: any;
        quality: string;
        quantity: string;
        professional_Skills: string;
        professionalRemark: any;
        phase: any;
        feedbacks: any;
      }) => ({
        sprint: item.sprint,
        quality: parseInt(item.quality),
        quantity: parseInt(item.quantity),
        professionalism: parseInt(item.professional_Skills),
        phase: item.phase,
        comment: item.feedbacks[0]?.content,
      }),
    )
    .filter((item: any) => item.phase === phase);

  const getProgressBarStyles = (value: any) => {
    let pathColor = '#b71c1c';
    let textColor = '#b71c1c';

    if (value > 1) {
      pathColor = '#1b5e20';
      textColor = '#1b5e20';
    } else if (value === 1) {
      pathColor = '#ffeb3b';
      textColor = '#ffeb3b';
    } else {
      pathColor = '#b71c1c';
      textColor = '#b71c1c';
    }

    return buildStyles({
      pathColor,
      textColor,
    });
  };

  const handleSprintChange = (selectedSprint: any) => {
    setSelectedSprint(selectedSprint);
  };

  return (
    <div className="flex flex-col  grow dark:bg-dark-frame-bg font-serif">
      <div className="flex  flex-col justify-center  ">
        <div className="w-[100%] pt-[4vh] h-[100%]   ">
          <div className="">
            <div className="flex bg-[#b8cdba] w-[30%] h-[48px]  ml-7 items-center justify-center  rounded-lg cohort-phase dark:bg-[#8667F2]">
              <span className="flex  bg-[#b8cdba] pl-2 items-center rounded-md font-semibold text-xl w-[30%] dark:bg-[#8667F2]">
                {cohort}
              </span>
              <span className="h-5 border-2 mx-1 text-xl cohort-bar"></span>

              <span className="w-[45%] font-semibold text-xl pr-1 pl-3 c-phase ">
                {rating && (
                  <select
                    className="flex items-center bg-[#b8cdba] rounded-md font-semibold text-xl cursor-pointer phasesss dark:bg-[#8667F2]"
                    onChange={(e) => setPhase(e.target.value)}
                    value={phase}
                  >
                    {phases.map((phase: any, index) => (
                      <option key={index} value={phase}>
                        {phase}
                      </option>
                    ))}
                  </select>
                )}
              </span>
            </div>
          </div>

          <p className=" font-bold ml-7 my-10 text-2xl"> Perfomance score</p>
          <div className=" flex flex-row ">
            <div className=" Progres-bar flex flex-row w-[90%]  justify-between ml-3  ">
              <div className="  flex flex-col w-[30%] ml-3   lg:flex-row perfomance-bar">
                <div className=" w-[130px]">
                  <CircularProgressbar
                    value={(quantityValue / 2) * 100}
                    text={`${quantityValue}`}
                    styles={getProgressBarStyles(quantityValue)}
                  />
                </div>

                <div className=" flex flex-col justify-center ml-3">
                  <ul className="list-disc ml-4">
                    <li>Quantity</li>
                  </ul>
                  <p
                    className={`ml-2 ${quantityValue > 1
                        ? 'text-[#1b5e20]'
                        : quantityValue === 1
                          ? 'text-[#ffeb3b]'
                          : 'text-[#b71c1c]'
                      }`}
                  >
                    {norating ? (
                      <h1>No ratings yet </h1>
                    ) : quantityValue >= 1.5 ? (
                      <h1>Very Good</h1>
                    ) : quantityValue >= 1 ? (
                      <h1>Good</h1>
                    ) : (
                      <h1>Need to improve</h1>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-[30%]  flex-wrap   lg:flex-row quality-bar ">
                <div className=" w-[130px]">
                  <CircularProgressbar
                    value={(qualityValue / 2) * 100}
                    text={`${qualityValue}`}
                    styles={getProgressBarStyles(qualityValue)}
                  />
                </div>

                <div className=" flex flex-col justify-center ml-3">
                  <ul className="list-disc ml-4">
                    <li>Quality</li>
                  </ul>
                  <p
                    className={`ml-2 ${qualityValue > 1
                        ? 'text-[#1b5e20]'
                        : qualityValue === 1
                          ? 'text-[#ffeb3b]'
                          : 'text-[#b71c1c]'
                      }`}
                  >
                    {norating ? (
                      <h1>No ratings yet </h1>
                    ) : qualityValue >= 1.5 ? (
                      <h1>Very Good</h1>
                    ) : qualityValue >= 1 ? (
                      <h1>Good</h1>
                    ) : (
                      <h1>Need to improve</h1>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-[30%] flex-wrap  lg:flex-row quantity-bar ">
                <div className=" w-[130px]">
                  <CircularProgressbar
                    value={(perfomanceValue / 2) * 100}
                    text={`${perfomanceValue}`}
                    styles={getProgressBarStyles(perfomanceValue)}
                  />
                </div>

                <div className=" flex flex-col justify-center ml-3">
                  <ul className="list-disc ml-4">
                    <li>Professionalism</li>
                  </ul>
                  <p
                    className={`ml-2 ${perfomanceValue > 1
                        ? 'text-[#1b5e20]'
                        : perfomanceValue === 1
                          ? 'text-[#ffeb3b]'
                          : 'text-[#b71c1c]'
                      }`}
                  >
                    {norating ? (
                      <h1> No ratings yet</h1>
                    ) : perfomanceValue >= 1.5 ? (
                      <h1>Very Good</h1>
                    ) : perfomanceValue >= 1 ? (
                      <h1>Good</h1>
                    ) : (
                      <h1>Need to improve</h1>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className=" font-bold ml-7 my-10 text-2xl"> Stats</p>

          <div className=" w-[100%] ml-7">
            <TraineeChart barChartData={chartData} />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 ">Recents feedback</h1>
            <div className="p-2 grid grid-cols-2 phases ">
              <div className="flex  items-center ">
                {phases.map((phase: any, index) => (
                  <>
                    <span
                      key={index}
                      className="mr-2 font-bold "
                      style={{
                        cursor: 'pointer',
                        fontFamily: 'inter',
                        fontSize: '14px',
                        color: '#b1b1b1',
                        borderBottom: '3px solid #6b6319',
                        borderRadius: '1px',
                      }}
                      onClick={() => setPhase(phase)}
                    >
                      {phase}
                    </span>
                    <div className="h-5 border-2 bg-[#b1b1b1] mx-0" />
                  </>
                ))}
              </div>
            </div>
            <div className="trainee-table">
              <div className="font-bold my-10 w-[100%] text-lg ">
                {chartData.length !== 0 ? (
                  <DataTable
                    columns={columns}
                    data={chartData ? (chartData as [any]) : []}
                    title={t('Sprint ratings')}
                    loading={loading}
                  />
                ) : (
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        {columns.map((column, columnIndex) => (
                          <th
                            key={columnIndex}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:bg-neutral-600 uppercase tracking-wider"
                          >
                            {column.Header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          colSpan={columns.length}
                          className="px-6 py-4 whitespace-nowrap text-center text-gray-500"
                        >
                          {t('No ratings  yet')}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupAdDashboard;
