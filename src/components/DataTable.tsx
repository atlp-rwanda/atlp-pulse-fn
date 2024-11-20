// @ts-nocheck
import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import DataPagination from './DataPagination';

interface TableData {
  data: any[];
  columns: any;
  title: string;
  loading?: boolean;
  className?: string;
}

function DataTable({ data, columns, title, loading, className }: TableData) {
  const [pageIndex, setPageIndex] = useState(0);
  const [filterInput, setFilterInput] = useState('');
  const { t } = useTranslation();

  // Memoize columns and data to prevent unnecessary re-renders
  const memoizedColumns = useMemo(() => [...columns], [columns]);
  const memoizedData = useMemo(() => [...data], [data]);

  // Table instance
  const tableInstance = useTable(
    {
      data: memoizedData,
      columns: memoizedColumns,
      initialState: { pageIndex, pageSize: 3, globalFilter: filterInput },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    setGlobalFilter,
    getTableBodyProps,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    setPageSize,
    pageOptions,
    headerGroups,
    prepareRow,
    state: { pageIndex: currentPageIndex, pageSize },
  } = tableInstance;

  useEffect(() => {
    setPageIndex(currentPageIndex);
  }, [currentPageIndex]);

  const handleFilterChange = (e) => {
    const value = e.target.value || '';
    setGlobalFilter(value);
    setFilterInput(value);
  };

  return (
    <div
      className={`relative font-serif bg-indigo-100 dark:bg-dark-bg shadow-lg h-fit px-5 md:py-4 lg:py-5 rounded-md w-[100%] overflow-auto custom-scrollbar "lg:ml-60 mx-auto"} lg:mb-10 ${className}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between pb-6 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
            {t(title)}
          </h2>
          {/* Uncomment if you want a filter input */}
          {/* <input
            value={filterInput}
            aria-label="Filter table data"
            placeholder="Filter"
            className="px-4 py-2 mt-4 font-sans text-xs md:text-sm border rounded outline-none border-primary dark:bg-neutral-600 dark:text-white w-full sm:w-52 md:w-96"
            onChange={handleFilterChange}
          /> */}
        </div>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <table
          className="min-w-full leading-normal text-xs md:text-sm"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    className={`thead w-1/${columns.length} text-center  ${
                      column.isSorted ? 'sort-asc' : ''
                    }`}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={column.id}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {memoizedData.length ? (
              !loading &&
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    className={`border-b dark:border-gray-700 ${
                      row.index % 2 === 0
                        ? 'bg-gray-600 dark:bg-neutral-600'
                        : 'bg-transparent'
                    }`}
                    {...row.getRowProps()}
                    key={row.id}
                  >
                    {row.cells.map((cell) => (
                      <td
                        className={`w-1/${columns.length} data-cell px-4 py-2 text-center`}
                        {...cell.getCellProps()}
                        key={cell.column.id}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length} className="p-4 text-center h-24">
                  <p className="text-sm md:text-lg font-medium text-gray-600 dark:text-gray-400">
                    No records available
                  </p>
                </td>
              </tr>
            )}
            {loading && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-sm text-center text-gray-500 dark:text-gray-300"
                >
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="px-4 md:px-6 py-4">
        <DataPagination
          pageOptions={pageOptions}
          canNextPage={canNextPage}
          gotoPage={gotoPage}
          columnLength={columns.length}
          canPreviousPage={canPreviousPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          previousPage={previousPage}
          nextPage={nextPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
        />
      </div>
    </div>
  );
}

export default DataTable;
