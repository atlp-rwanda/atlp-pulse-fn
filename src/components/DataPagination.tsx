import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline';
import React from 'react';

function DataPagination({
  pageOptions,
  columnLength,
  canNextPage,
  canPreviousPage,
  pageSize,
  setPageSize,
  gotoPage,
  previousPage,
  nextPage,
  pageIndex,
}: any) {
  return (
    <div className="font-serif">
      {pageOptions.length >= 0 && (
        <table className="w-full mt-2">
          <tfoot className="w-full py-2">
            <tr className="w-full py-2">
              <td colSpan={columnLength}>
                <div className="flex flex-row sm:space-x-9 md:space-x-72 lg:flex-row items-center justify-between w-full mx-auto">
                  <div className="flex mb-4 sm:-ml-7 -ml-7 lg:mb-0 mr-auto ">
                    <button
                      type="button"
                      aria-label="left-arrow"
                      className="page mx-2 text-white rounded-circle appearance-none font-bold flex items-center justify-center bg-primary mr-2 h-[30px] w-[50px] lg:h-[40px] lg:w-[60px] cursor-pointer"
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      <ArrowCircleLeftIcon className="w-5" fontSize="sm" />
                    </button>{' '}
                    <button
                      type="button"
                      aria-label="right-arrow"
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                      className="page mx-2 text-white rounded-circle font-bold flex items-center justify-center bg-primary h-[30px] w-[50px] lg:h-[40px] lg:w-[60px] cursor-pointer"
                    >
                      <ArrowCircleRightIcon className="w-5" fontSize="sm" />
                    </button>{' '}
                  </div>

                  <div className="flex flex-row relative md:ml-80 lg:flex-row   justify-center items-baseline w-full lg:w-1/3 w-1/2 text-xs lg:text-md  mx-2 -mr-5">
                    <span className="flex justify-center sm:w-[50%] w-[70%] lg:mb-0">
                      Page{' '}
                      <strong>
                        {pageIndex + 1} of
                        {` ${pageOptions.length}`}
                      </strong>{' '}
                    </span>

                    <div className="flex flex-row sm:justify-center justify-end items-center w-full">
                      {/* Go to page */}
                      <div className="hidden lg:flex items-center mx-2 mb-2 lg:mb-0">
                        <span className="mr-1">| Go to page: </span>
                        <input
                          type="number"
                          className="pl-1 border rounded-md outline-none appearance-none border-primary dark:bg-primary"
                          defaultValue={pageIndex + 1}
                          onChange={(e) => {
                            const pageNumber = e.target.value
                              ? Number(e.target.value) - 1
                              : 0;
                            gotoPage(pageNumber);
                          }}
                          style={{
                            width: '50px',
                            height: '30px',
                            border: 'solid 0.1rem #9e85f5',
                            paddingLeft: '1.2rem',
                          }}
                        />
                      </div>
                      {/* Show page size */}
                      <div className="flex items-center sm:mx-2 mx-0 mb-2 lg:mb-0 ">
                        <select
                          className="border rounded-md px-1/2 font-raleway border-dark dark:bg-primary focus:outline-none"
                          value={pageSize}
                          onChange={(e) => setPageSize(Number(e.target.value))}
                          style={{
                            height: '30px',
                            border: 'solid 0.1rem #9e85f5',
                          }}
                        >
                          {[3, 5, 10, 25, 50, 100].map((pgSize) => (
                            <option key={pgSize} value={pgSize}>
                              Show {pgSize}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export default DataPagination;
