/* eslint-disable */
/* istanbul ignore file */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import { BsEye } from 'react-icons/bs';
import TraineeChart from '../components/TraineesChart';
import Table from '../components/TeamTable';
import { useLazyQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { GET_TEAMS_CARDS } from './ManagerCard';
import { FETCH_ALL_RATINGS } from '../Mutations/Ratings';
import Spinner from './Spinner';

function TeamDetails() {
  const { teamname } = useParams<{ teamname: string }>();
  const organizationToken = localStorage.getItem('orgToken');
  const { data, loading } = useQuery(GET_TEAMS_CARDS, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
      fetchPolicy: 'network-only',
    },
  });
  const [getRatings] = useLazyQuery(FETCH_ALL_RATINGS, {
    variables: {
      orgToken: organizationToken,
    },
  });
  const { t } = useTranslation();
  const [ratings, setRatings] = useState<any>([]);
  const [filteredRatings, setFilteredRatings] = useState<any[]>([]);
  const [selectedTeamMembersEmails, setSelectedTeamMembersEmails] = useState<
    string[]
  >([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [toggle, setToggle] = useState(true);

  const columns = [
    { Header: `${t('Sprint')}`, accessor: 'sprint' },
    { Header: `${t('first name')}`, accessor: 'user.profile.firstName' },
    { Header: `${t('Last name')}`, accessor: 'user.profile.lastName' },
    { Header: `${t('Quantity')}`, accessor: 'quantity' },
    { Header: `${t('Quality')}`, accessor: 'quality' },
    { Header: `${t('Professionalism')}`, accessor: 'professional_Skills' },

    {
      Header: `${t('Action')}`,
      accessor: '',
      Cell: ({ row }: any) => (
        <div className="flex items-center">
          <div className="cursor-pointer">
            <button className="bg-dark-bg hover:bg-primary text-white text-sm flex items-center hover:text-white px-2 py-1 border hover:border-transparent rounded-full">
              <BsEye className="mr-1" />
              {t('Rating')}
            </button>
          </div>
        </div>
      ),
    },
  ];
  const teamData =
    data &&
    data.getAllTeams.map((team: any) => {
      const Qnty = isNaN(team.avgRatings.quantity)
        ? 0
        : parseFloat(team.avgRatings.quantity);
      const Qty = isNaN(team.avgRatings.quality)
        ? 0
        : parseFloat(team.avgRatings.quality);
      const skills = isNaN(team.avgRatings.professional_Skills)
        ? 0
        : parseFloat(team.avgRatings.professional_Skills);
      const memberEmails = team.members.map((member: any) => member.email);

      return {
        cohort: team?.cohort?.name,
        teamname: team.name,
        coordinator: team?.cohort?.coordinator?.profile
          ? team.cohort?.coordinator.profile.name
          : team?.cohort?.coordinator?.email,
        ttl: team?.ttl?.profile ? team.ttl.profile.name : team?.ttl?.email,
        Qty,
        Qnty,
        skills,
        memberEmails,
      };
    });

  const selectedTeam = teamData
    ? teamData.find(
        (team: { teamname: string | null }) => team.teamname === teamname,
      )
    : null;
  function getColor(rating: number) {
    if (rating >= 1.5 && rating <= 2) {
      return 'green';
    }
    if (rating >= 1 && rating < 1.5) {
      return 'yellow';
    }
    return 'red';
  }

  function getRatingColorClass(rating: number) {
    if (rating >= 1.5 && rating <= 2) {
      return 'green';
    }
    if (rating >= 1 && rating < 1.5) {
      return 'yellow';
    }
    return 'red';
  }

  useEffect(() => {
    getRatings({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setRatings(data?.fetchAllRatings);

        const teamMembersEmails = data?.fetchAllRatings
          .filter((rating: any) =>
            selectedTeam?.memberEmails?.includes(rating.user.email),
          )
          .map((rating: any) => rating.user.email)
          .filter((email: any) => email);

        setSelectedTeamMembersEmails(teamMembersEmails);

        function calculateAverageQuality(ratings: any[]) {
          if (ratings.length === 0) return 0;
          const totalQuality = ratings.reduce(
            (tot, curr) => tot + Number(curr?.quality ?? 0),
            0,
          );
          return totalQuality / ratings.length;
        }
        function calculateAverageQuantity(ratings: any[]) {
          if (ratings.length === 0) return 0;
          const totalQuantity = ratings.reduce(
            (tot, curr) => tot + Number(curr?.quantity ?? 0),
            0,
          );
          return totalQuantity / ratings.length;
        }
        function calculateAverageProfessionalism(ratings: any[]) {
          if (ratings.length === 0) return 0;
          const totalProfessionalism = ratings.reduce(
            (tot, curr) => tot + Number(curr?.professional_Skills ?? 0),
            0,
          );
          return totalProfessionalism / ratings.length;
        }

        const sprintAverages = [];
        for (let sprint = 1; sprint <= 20; sprint++) {
          const sprintRatings = data?.fetchAllRatings.filter(
            (item: any) =>
              item.sprint === sprint &&
              selectedTeam?.memberEmails?.includes(item.user.email) &&
              (item.quality !== null ||
                item.quantity !== null ||
                item.professional_Skills !== null),
          );
          if (sprintRatings.length > 0) {
            const avgQuality = calculateAverageQuality(sprintRatings);
            const avgQuantity = calculateAverageQuantity(sprintRatings);
            const avgProfessionalism =
              calculateAverageProfessionalism(sprintRatings);

            sprintAverages.push({
              sprint,
              avgQuality,
              avgQuantity,
              avgProfessionalism,
            });
          }
        }
        const ChartData = sprintAverages.map((item: any) => ({
          sprint: item.sprint,
          quality: item.avgQuality,
          quantity: item.avgQuantity,
          professionalism: item.avgProfessionalism,
        }));
        setChartData(ChartData);

        setToggle(!toggle);
      },

      onError: (error) => {
        toast.error(error?.message || 'Something went wrong');
      },
    });
  }, [toggle]);

  useEffect(() => {
    const teamRatings = ratings.filter((rating: any) =>
      selectedTeamMembersEmails.includes(rating.user.email),
    );
    setFilteredRatings(teamRatings);
  }, [selectedTeamMembersEmails, ratings]);
  const [selectedSprint, setSelectedSprint] = useState<number | null>(null);

  const handleSprintFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedValue = event.target.value;
    setSelectedSprint(selectedValue === 'all' ? null : parseInt(selectedValue));
  };
  const filteredData = selectedSprint
    ? filteredRatings.filter((rating) => rating.sprint === selectedSprint)
    : filteredRatings;

  return (
    <div className="flex flex-col  dark:bg-dark-frame-bg  items-center justify-center font-serif">
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <Spinner />
          <div className="spinner" />
        </div>
      ) : (
        <div className="flex  grow  dark:bg-dark-frame-bg sm:w-full">
          <div className="flex flex-row pb-8 justify-center">
            <div className=" w-full items-center ">
              <div className="bg-[#B8CDBA] border-2 border-[#B8CDBA] flex flex-col pb-6 rounded-lg ml-10 mb-14 justify-start items-start px-8 py-4 lg:max-w-[30%] sm:w-[80%]  max-sm:ml-0 max-sm:justify-center">
                <div className="pb-2 flex flex-row gap-8 mt-4 dark:text-black">
                  <h1 className="font-bold text-xl">{teamname}</h1>
                  <div className="border-r-2 h-6 border-black" />
                  <h1 className="font-extrabold text-xl">
                    {selectedTeam.cohort}
                  </h1>
                </div>
                <div className="relative dark:text-black">
                  <p>Coordinator: {selectedTeam?.coordinator}</p>
                  <p>TTL: {selectedTeam.ttl}</p>
                </div>
              </div>

              <div className="flex w-[100%]  max-lg:flex-col gap-9 justify-center ">
                <div className="bg-white flex flex-col justify-start border-black border   dark:border-primary dark:bg-black  rounded-xl xl:max-w-[46%] lg:max-h-[50%]  sm:w-[90%] sm:justify-center">
                  <p className="text-2xl font-bold px-8 mb-8"> Project</p>
                  <div className="bg-[#f5f8ff] w-[98%] mx-auto shadow-lg border-gray-400 flex flex-col border  mt-4 rounded-xl ">
                    <p className="font-bold p-4 text-gray-400">Ecommerce App</p>
                    <div className="font-light text-[70%] w-[50%]  pl-4 justify-center items-center dark:text-black ">
                      This app allows the buyers and sellers to buy and seller
                      on theportal without having to move from their homes.
                    </div>
                  </div>
                  <div className="relative  pt-4 px-4 dark:text-white">
                    <p>links:</p>
                    <div className="ml-11 py-3">
                      <p>
                        Codebase:{' '}
                        <span className="text-sm ml-5 text-green-700">
                          Github
                        </span>
                      </p>
                      <p>
                        Live production:{' '}
                        <span className="text-sm ml-5 text-green-700">
                          <a href="https://beta.devpulse.org/">
                            https://beta.devpulse.org/
                          </a>
                        </span>
                      </p>
                      <p>
                        atlp link:{' '}
                        <span className="text-sm ml-5 text-green-700">
                          <a href="  https://github.com/atlp-rwanda">
                            {' '}
                            https://github.com/atlp-rwanda{' '}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white flex flex-col justify-start border-black  dark:border-primary dark:bg-black border  rounded-xl xl:max-w-[45%] lg:max-h-[50%]  sm:w-[90%] sm:justify-center ">
                  <h2 className="text-2xl font-bold ml-10 mb-8  dark:text-white ">
                    Performance score
                  </h2>
                  <div className=" flex flex-col mx-5 my-6  gap-8  max-sm:gap-4">
                    <div className="w-full  flex flex-row  items-center justify-between ">
                      <div className="flex flex-row lg:flex-row ">
                        <div className="w-[90px]">
                          <CircularProgressbar
                            value={(selectedTeam.Qty / 2) * 100}
                            text={`${selectedTeam.Qty.toFixed(1)}`}
                            className={getRatingColorClass(selectedTeam.Qty)}
                            styles={{
                              path: {
                                stroke: getColor(selectedTeam.Qty),
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                              },
                              trail: {
                                stroke: '#e6ecff',
                              },
                              text: {
                                fill: 'gray',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                textAnchor: 'middle',
                                dominantBaseline: 'middle',
                              },
                            }}
                          />
                        </div>
                        <div className=" flex flex-col justify-center ml-7">
                          <ul className="list-disc">
                            <li>Quality</li>
                          </ul>
                          <span style={{ color: getColor(selectedTeam.Qty) }}>
                            {selectedTeam.Qty >= 1.5 && selectedTeam.Qty <= 2
                              ? 'Good'
                              : selectedTeam.Qty >= 1 && selectedTeam.Qty < 1.5
                              ? 'Improve'
                              : 'Poor'}
                          </span>
                        </div>
                      </div>
                      <div className="  flex flex-row  lg:flex-row ">
                        <div className="w-[90px] ">
                          <CircularProgressbar
                            value={(selectedTeam.Qnty / 2) * 100}
                            text={`${selectedTeam.Qnty.toFixed(1)}`}
                            styles={{
                              path: {
                                stroke: getColor(selectedTeam.Qnty),
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                              },
                              trail: {
                                stroke: '#e6ecff',
                              },
                              text: {
                                fill: 'gray',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                textAnchor: 'middle',
                                dominantBaseline: 'middle',
                              },
                            }}
                          />
                        </div>
                        <div className=" flex flex-col justify-center ml-7">
                          <ul className="list-disc ">
                            <li>Quantity</li>
                          </ul>
                          <span style={{ color: getColor(selectedTeam.Qnty) }}>
                            {selectedTeam.Qnty >= 1.5 && selectedTeam.Qnty <= 2
                              ? 'Good'
                              : selectedTeam.Qnty >= 1 &&
                                selectedTeam.Qnty < 1.5
                              ? 'Improve'
                              : 'Poor'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" w-full flex flex-row">
                      <div className="w-[90px] ">
                        <CircularProgressbar
                          value={(selectedTeam.skills / 2) * 100}
                          text={`${selectedTeam.skills.toFixed(1)}`}
                          styles={{
                            path: {
                              stroke: getColor(selectedTeam.skills),
                              transition: 'stroke-dashoffset 0.5s ease 0s',
                            },
                            trail: {
                              stroke: '#e6ecff',
                            },
                            text: {
                              fill: 'gray',
                              fontSize: '20px',
                              fontWeight: 'bold',
                              textAnchor: 'middle',
                              dominantBaseline: 'middle',
                            },
                          }}
                        />
                      </div>
                      <div className=" flex flex-col justify-center ml-7">
                        <ul className="list-disc ">
                          <li>Professionalism</li>
                        </ul>
                        <span style={{ color: getColor(selectedTeam.skills) }}>
                          {selectedTeam.skills >= 1.5 &&
                          selectedTeam.skills <= 2
                            ? 'Good'
                            : selectedTeam.skills >= 1 &&
                              selectedTeam.skills < 1.5
                            ? 'Improve'
                            : 'Poor'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-2xl px-10 max-lg:hidden font-bold my-10">
                  {' '}
                  Stats
                </p>
              </div>
              {chartData && (
                <div className="max-lg:hidden">
                  <TraineeChart barChartData={chartData} />
                </div>
              )}

              <div className="flex justify-between px-10 max-lg:hidden">
                <h1 className="text-2xl font-bold mb-4">Team Members</h1>
                <div className="relative inline-flex">
                  <select
                    className="px-5 py-2 mt-4 font-sans text-xs border border-primary outline-none dark:bg-neutral-600 dark:text-white w-32 max-md:w-96 rounded-full"
                    value={selectedSprint || 'all'}
                    onChange={handleSprintFilterChange}
                  >
                    <option value="all">All Sprints</option>
                    <option value="1">Sprint 1</option>
                    <option value="2">Sprint 2</option>
                    <option value="3">Sprint 3</option>
                    {/* <option value="4">Sprint 4</option>
                    <option value="5">Sprint 5</option> */}
                  </select>
                </div>
              </div>
              <div className="dark:bg-dark-frame-bg max-lg:hidden">
                <div className="justify-self-center px-8 ">
                  {selectedSprint === null ? (
                    <Table
                      data={filteredData}
                      columns={columns}
                      title={t('Team Members')}
                    />
                  ) : filteredData.length !== 0 ? (
                    <Table
                      data={filteredData}
                      columns={columns}
                      title={t('Team Members')}
                    />
                  ) : (
                    <table className="min-w-full rounded-full">
                      <thead>
                        <tr>
                          {columns.map((column, columnIndex) => (
                            <th
                              key={columnIndex}
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 bg-[#B8CDBA] dark:bg- uppercase tracking-wider"
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
                            {t('No team members found')}
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
      )}
    </div>
  );
}

export default TeamDetails;
