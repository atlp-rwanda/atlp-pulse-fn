/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Buttons';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hook/useDocumentTitle';
import AttendanceData from '../dummyData/attendance.json';
import Pagination from '../components/Pagination';

const TraineeAttendance = () => {
  useDocumentTitle('Attendance');
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
    count: AttendanceData.length,
  });

  return (
    <>
      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8">
        <div className="px-3 md:px-8">
          <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full lg:w-[80%] lg:ml-56 mt-[90px]">
            <div className="">
              <div className="flex ml-2 items-center justify-between">
                <h2 className="text-gray-800 dark:text-white font-semibold">
                  {t('Attendance')}
                </h2>
              </div>
              <div className="flex ml-[-25px] px-7 py-2  mt-4">
                <select className="flex bg-primary px-4 py-2 rounded-md text-white font-medium cursor-pointer">
                  <option>{t('phases')}</option>
                  <option>{t('Phase 1')}</option>
                  <option>{t('Phase 2')}</option>
                  <option>{t('Phase 3')}</option>
                  <option>{t('Phase 4')}</option>
                  <option>{t('Phase 5')}</option>
                </select>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <tbody>
                      <tr>
                        <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Sprint')}
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider">
                          {t('Session')}
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Record')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider"></th>
                      </tr>

                      {AttendanceData.slice(
                        firstContentIndex,
                        lastContentIndex,
                      ).map((item: any) => (
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
                            <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center ">
                              {item.session}
                            </p>
                          </td>

                          <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                            <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                              {item.record}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                            <Link to="/attendance-details">
                              <Button
                                variant="primary"
                                size="sm"
                                style="px-4 py-0 text-sm"
                              >
                                {t('Details')}
                              </Button>
                            </Link>
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
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === 1 && 'disabled'
              }`}
            >
              &larr;
            </button>
            <button
              onClick={() => setPage(1)}
              data-testid="page1"
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === 1 && 'disabled'
              }`}
            >
              1
            </button>
            {gaps.paginationGroup.map((el) => (
              <button
                onClick={() => setPage(el)}
                data-testid="page2"
                key={el}
                className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                  page === el ? 'active' : ''
                }`}
              >
                {el}
              </button>
            ))}
            <button
              onClick={() => setPage(totalPages)}
              data-testid="page3"
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === totalPages && 'disabled'
              }`}
            >
              {totalPages}
            </button>
            <button
              onClick={nextPage}
              data-testid="next"
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
};

export default TraineeAttendance;
