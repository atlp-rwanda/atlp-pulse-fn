/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Buttons';

const TraineePerfomance = () => {
  return (
    <>
      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8">
        <div className="px-3 md:px-8">
          <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full lg:w-[80%] lg:ml-56 mt-[90px]">
            <div className="">
              <div className="flex ml-2 items-center justify-between">
                <h2 className="text-gray-800 dark:text-white font-semibold">
                  Performance
                </h2>
              </div>
              <div className="flex ml-[-25px] px-7 py-2  mt-4">
                <select className="flex bg-primary px-4 py-2 rounded-md text-white font-medium cursor-pointer">
                  <option>All phases</option>
                  <option>Phase 1</option>
                  <option>Phase 2</option>
                  <option>Phase 3</option>
                  <option>Phase 4</option>
                  <option>Phase 5</option>
                </select>
              </div>
            </div>

            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead className="dark:text-white "></thead>

                    <tbody>
                      <tr>
                        <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          Sprint
                        </th>
                        <th className="px-5  border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider">
                          Quantity
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider">
                          Quality
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider">
                          Professional skills
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          Average
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider"></th>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <div className="flex justify-center items-center">
                            <div className="">
                              <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                Sprint 1
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center ">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center ">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900  dark:text-white whitespace-no-wrap text-center">
                            2
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <Link to="/dashboard/performance-details">
                            <Button
                              variant="primary"
                              size="sm"
                              style="px-4 py-0 text-sm"
                            >
                              {' '}
                              Details{' '}
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <div className="flex justify-center items-center">
                            <div className="">
                              <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                Sprint 2
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap ">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap ">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap ">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap ">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <Link to="/dashboard/performance-details">
                            <Button
                              variant="primary"
                              size="sm"
                              style="px-4 py-0 text-sm"
                            >
                              {' '}
                              Details{' '}
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <div className="flex justify-center items-center">
                            <div className="">
                              <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                Sprint 3
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap ">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap ">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap ">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <Link to="/dashboard/performance-details">
                            <Button
                              variant="primary"
                              size="sm"
                              style="px-4 py-0 text-sm"
                            >
                              {' '}
                              Details{' '}
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <div className="flex justify-center items-center">
                            <div className="">
                              <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                Sprint 4
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <Link to="/dashboard/performance-details">
                            <Button
                              variant="primary"
                              size="sm"
                              style="px-4 py-0 text-sm"
                            >
                              {' '}
                              Details{' '}
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <div className="flex justify-center items-center">
                            <div className="">
                              <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                Sprint 5
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                            1
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap ">
                            2
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <Link to="/dashboard/performance-details">
                            <Button
                              variant="primary"
                              size="sm"
                              style="px-4 py-0 text-sm"
                            >
                              {' '}
                              Details{' '}
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr className="shadow-lg rounded-md ">
                        <th className="px-5 py-5 border-b border-gray-200  dark:bg-dark-bg text-sm text-center  font-semibold dark:text-white text-gray-600">
                          Average
                        </th>
                        <th className="py-3 ml-[-80px] border-b border-gray-200 bg-white dark:bg-dark-bg text-sm text-center dark:text-white  font-semibold text-gray-600 md:table-cell sm:hidden whitespace-no-wrap ">
                          1.5
                        </th>
                        <th className="py-3 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm text-center dark:text-white font-semibold text-gray-600 md:table-cell sm:hidden whitespace-no-wrap ">
                          1.7
                        </th>
                        <th className="py-3 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm text-center dark:text-white font-semibold text-gray-600 md:table-cell sm:hidden whitespace-no-wrap">
                          1.8
                        </th>
                        <th className="py-3 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm text-center dark:text-white font-semibold text-gray-600">
                          1.4
                        </th>
                        <th className="py-3 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm rounded-br-lg"></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraineePerfomance;
