import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLazyQuery, gql, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import Pagination from './Pagination';
import PerformanceData from '../dummyData/performance.json';
import { TRAINEE_RATING } from '../Mutations/Ratings';
import Button from './Buttons';

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
      coordinator
      cohort {
        name
        phase {
          name
        }
        coordinator {
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

export function ExportToExcel({
  Data,
  fileName,
}: {
  Data: (string | number)[];
  fileName: string;
}) {
  const { t } = useTranslation();
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
// eslint-disable-next-line no-nested-ternary
  const exportToCSV = (Data: (string | number)[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(Data);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    // eslint-disable-next-line no-nested-ternary
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    (FileSaver as any).saveAs(data, fileName + fileExtension);
  };

  return (
    <button
      className=" btn primary
  sm
  px-4 py-1 text-sm  "
      type="button"
      onClick={(e) => exportToCSV(Data, fileName)}
    >
      {t('Export')}
    </button>
  );
}

function TraineePerfomance() {
  const [usedata, setUserdata] = React.useState([]);
  const fileName = 'userInfo';
  const { data } = useQuery(GET_RATINGS_DATA, {});

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
        Coodinator: item?.cohort?.coordinator?.profile?.name,
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
      onCompleted: /* istanbul ignore next */ (data) => {
        /* istanbul ignore next */
        setRatings(data?.fetchRatingsTrainee);
        /* istanbul ignore next */
        sessionStorage.removeItem('data');
      },
      onError: /* istanbul ignore next */ (error) => {
        /* istanbul ignore next */
        toast.error(error?.message || 'Something went wrong');
      },
    });
  }, [toggle]);

  return (
    <>
      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8 pb-10">
        <div className="px-3 md:px-8">
          <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full lg:w-[80%] lg:ml-56 mt-[90px]">
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
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-neutral-600 text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Actions')}
                        </th>
                      </tr>
                      {ratings?.slice(firstContentIndex, lastContentIndex).map(
                        /* istanbul ignore next */
                        (item: any) => (
                          /* istanbul ignore next */
                          <tr key={item.id}>
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
                                {item.average}
                              </p>
                            </td>

                            <td className="   px-0 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                              <Link to="/performance-details">
                                <Button
                                  variant="primary"
                                  size="sm"
                                  style="px-4 py-1 text-sm"
                                  onClick={
                                    /* istanbul ignore next */
                                    () => {
                                      /* istanbul ignore next */
                                      setToggle(!toggle);
                                      sessionStorage.setItem(
                                        'data',

                                        JSON.stringify({
                                          user_sprint: item?.sprint,
                                          quantity_remark: item?.quantityRemark,
                                          quality_remark: item?.qualityRemark,
                                          professional_remark:
                                            item?.professionalRemark,
                                          quality: item?.quality,
                                          quantity: item?.quantity,
                                          professional:
                                            item?.professional_Skills,
                                          user_id: item?.user.id,
                                        }),
                                      );
                                    }
                                  }
                                >
                                  {t('Details')}
                                </Button>
                              </Link>
                              <ExportToExcel
                                Data={usedata}
                                fileName={fileName}
                              />
                            </td>
                          </tr>
                        ),
                      )}
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
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === 1 && 'disabled'
              }`}
            >
              &larr;
            </button>
            <button
              onClick={() => setPage(1)}
              data-testid="page1"
              type="button"
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === 1 && 'disabled'
              }`}
            >
              1
            </button>
            {/* @ts-ignore */}
            {gaps.paginationGroup.map(
              /* istanbul ignore next */ (el) => (
                <button
                  onClick={/* istanbul ignore next */ () => setPage(el)}
                  data-testid="page"
                  key={el}
                  type="button"
                  className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                    page === el ? 'active' : ''
                  }`}
                >
                  {el}
                </button>
              ),
            )}
            <button
              onClick={() => setPage(totalPages)}
              data-testid="page3"
              type="button"
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === totalPages && 'disabled'
              }`}
            >
              {totalPages}
            </button>
            <button
              onClick={nextPage}
              data-testid="next"
              type="button"
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === totalPages && 'disabled'
              }`}
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
