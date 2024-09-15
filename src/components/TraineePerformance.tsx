import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery, gql, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import Pagination from './Pagination';
import PerformanceData from '../dummyData/performance.json';
import { TRAINEE_RATING } from '../Mutations/Ratings';
import RemarksModal from '../pages/ratings/CoordinatorRemarks';
import { UserContext } from '../hook/useAuth';
import { rowsType } from '../pages/ratings/frame';
import oop from '../assets/oops.svg';
import Spinner from './Spinner';

export const GET_RATINGS_DATA = gql`
  query FetchRatingsTrainee {
    fetchRatingsTrainee {
      quality
      qualityRemark
      bodyQuality
      professional_Skills
      bodyQuantity
      quantityRemark
      quantity
      average
      sprint
      professionalRemark
      bodyProfessional
      approved
      ttl
      cohort {
        name
        phase {
          name
        }
        ttl {
          email
          profile {
            firstName
            name
            lastName
          }
        }
        program {
          name
          manager {
            email
          }
        }
      }
      user {
        id
        profile {
          name
          firstName
          lastName
        }
        email
        organizations
      }
    }
  }
`;

function TraineePerfomance() {
  const [usedata, setUserdata] = useState([]);
  const { data, loading, error } = useQuery(GET_RATINGS_DATA, {});
  const { user } = useContext(UserContext);
  const [row, setRow] = useState<rowsType>({
    id: user?.userId,
    feedbacks: [],
    sprint: 0,
    username: 'string',
    user: 'string',
    qualityremark: '',
    quantityremark: '',
    professionalRemark: '',
  });

  useEffect(() => {
    if (data && data.fetchRatingsTrainee) {
      const ratingsData = data.fetchRatingsTrainee;

      const customHeadings = ratingsData.map((item: any) => ({
        Name: item?.user?.profile?.name,
        Email: item?.user?.email,
        Quality: item.quality,
        QualityRemark: item.qualityRemark,
        Quantity: item.quantity,
        QuantityRemark: item.quantityRemark,
        Professional_Skills: item.professional_Skills,
        Professional_SkillsRemark: item.professionalRemark,
        Average: item.average,
        Sprint: item.sprint,
        Cohort: item?.cohort?.name,
        Phase: item?.cohort?.phase?.name,
        Coodinator: item?.cohort?.ttl?.profile?.name,
      }));
      setUserdata(customHeadings);
    }
  }, [data]);

  const [ratings, setRatings] = useState<any>([]);
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
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
    contentPerPage: 3,
    count: PerformanceData.length,
  });

  const [getRatings] = useLazyQuery(TRAINEE_RATING, {});
  useEffect(() => {
    getRatings({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setRatings(data?.fetchRatingsTrainee);
        sessionStorage.removeItem('data');
      },
      onError: (error) => {
        toast.error(error?.message || 'Something went wrong');
      },
    });
  }, []);

  const openFeed = (rate: any) => {
    setToggle(true);
    setRow((prev) => ({
      ...prev,
      sprint: rate?.sprint,
      quantityremark: rate?.quantityRemark,
      qualityremark: rate?.qualityRemark,
      professionalRemark: rate?.professionalRemark,
      id: user?.userId,
      username: rate?.cohort?.ttl?.profile?.name,
      user: rate?.cohort?.ttl?.email,
      feedbacks: rate?.feedbacks,
    }));
  };

  const closeFeeds = () => {
    setToggle(false);
  };

  if (loading) {
    return (
      <>
        <div className="bg-light-bg dark:bg-dark-frame-bg pb-10">
          <div className="">
            <div className="bg-white dark:bg-dark-bg shadow-lg py-8 px-5 rounded-md w-full mdl:w-[70%] mdl:m-auto flex">
              <div className=" flex-1">
                <div className="flex w-full h-full  items-center justify-between">
                  <p className="text-gray-800 dark:text-white font-semibold text-[24px] w-[90%] m-auto">
                    <Spinner />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (ratings?.length === 0) {
    return (
      <>
        <div className="bg-light-bg dark:bg-dark-frame-bg pb-10">
          <div className="">
            <div className="bg-white dark:bg-dark-bg shadow-lg py-8 px-5 rounded-md w-full mdl:w-[70%] mdl:m-auto flex">
              <div className="flex ml-2 items-center justify-between">
                <div className="">
                  <img src={oop} className="w-[8rem] h-[8rem]" alt="images" />
                </div>
              </div>

              <div className=" flex-1">
                <div className="flex w-full h-full  items-center justify-between">
                  <p className="text-gray-800 dark:text-white font-semibold text-[24px] w-[90%] m-auto">
                    Performance updates are on the way! Stay tuned for the
                    latest insights!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <RemarksModal showRemarks={toggle} closeModal={closeFeeds} rows={row} />
      <div className="bg-light-bg dark:bg-dark-frame-bg pb-10 font-serif">
        <div className="">
          <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full">
            <div className="">
              <div className="flex ml-2 items-center justify-between">
                <h2 className="text-gray-800 dark:text-white font-semibold">
                  {t('Performance score')}
                </h2>
              </div>
              <div className="flex ml-[-25px] px-7 py-2  mt-4"> </div>
            </div>

            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead className="dark:text-white "> </thead>
                    <tbody>
                      <tr>
                        <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Sprint')}
                        </th>

                        <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Phase')}
                        </th>
                        <th className="px-5  border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider">
                          {t('Quantity')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider">
                          {t('Quality')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider">
                          {t('Professional skills')}
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Average')}
                        </th>
                      </tr>
                      {ratings
                        ?.slice(firstContentIndex, lastContentIndex)
                        .map((item: any) => (
                          <tr key={item.sprint}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                              <div className="flex justify-center items-center">
                                <div className="">
                                  <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                    {item.sprint}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                              <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                                {item.cohort.phase?.name}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                              <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                                {item.quantity}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                              <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center ">
                                {item.quality}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                              <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center ">
                                {item.professional_Skills}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                              <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                                {item.average % 1 === 0
                                  ? item.average
                                  : Number(item.average).toFixed(2)}
                              </p>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-12 mb-0">
            <button
              onClick={prevPage}
              data-testid="prev"
              type="button"
              className={`page flex h-12 w-12 items-center justify-center border-solid ${
                page === 1
                  ? 'cursor-not-allowed bg-primary text-white' // Adjust to a suitable color for disabled state
                  : 'cursor-pointer bg-primary text-white'
              }`}
              disabled={page === 1}
            >
              &larr;
            </button>

            <button
              onClick={() => setPage(1)}
              data-testid="page1"
              type="button"
              className={`page flex h-12 w-12 items-center justify-center border-solid ${
                page === 1
                  ? 'cursor-not-allowed bg-white text-black' // Adjust to a suitable color for disabled state
                  : 'cursor-pointer bg-primary text-white'
              }`}
              disabled={page === 1}
            >
              1
            </button>
            {gaps.paginationGroup.map((el) => (
              <button
                onClick={() => setPage(el)}
                data-testid="page"
                key={el}
                type="button"
                className={`page flex h-12 w-12 items-center justify-center border-solid ${
                  page === el
                    ? 'cursor-not-allowed bg-white text-black' // Adjust to a suitable color for disabled state
                    : 'cursor-pointer bg-white text-black'
                }`}
                disabled={page === el}
              >
                {el}
              </button>
            ))}
            <button
              onClick={() => setPage(totalPages)}
              data-testid="page3"
              type="button"
              className={`page flex h-12 w-12 items-center justify-center border-solid ${
                page === totalPages
                  ? 'cursor-not-allowed bg-white text-black' // Adjust to a suitable color for disabled state
                  : 'cursor-pointer bg-primary text-white'
              }`}
              disabled={page === totalPages}
            >
              {totalPages}
            </button>

            <button
              onClick={nextPage}
              data-testid="next"
              type="button"
              className={`page flex h-12 w-12 items-center justify-center border-solid ${
                page === totalPages
                  ? 'cursor-not-allowed bg-primary text-white' // Adjust to a suitable color for disabled state
                  : 'cursor-pointer bg-primary text-white'
              }`}
              disabled={page === totalPages}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TraineePerfomance;
