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
      className={`font-serif bg-indigo-100 dark:bg-dark-bg shadow-lg h-fit px-0 py-0 rounded-md w-full mb-0 ${className}`}
    >
      <div className="flex items-center justify-between pb-0">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {t(title)}
          </h2>
          {/* Uncomment if you want a filter input */}
          {/* <input
            value={filterInput}
            aria-label="Filter table data"
            placeholder="Filter"
            className="px-5 py-2 mt-4 font-sans text-xs border rounded outline-none border-primary dark:bg-neutral-600 dark:text-white w-52 md:w-96"
            onChange={handleFilterChange}
          /> */}
        </div>
      </div>
      <div className="overflow-visible">
        <table className="min-w-full leading-normal" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    className={column.isSorted ? 'sort-asc thead' : 'thead'}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                    <span>
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {!loading && memoizedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-sm text-center text-gray-500 dark:text-gray-300"
                  aria-label="Empty cell"
                >
                  &nbsp; {/* Non-breaking space */}
                </td>
              </tr>
            ) : (
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    key={row.id}
                    className={`border-b dark:border-gray-700 text-center ${
                      row.index % 2 === 0
                        ? 'bg-gray-600 dark:bg-neutral-600' 
                        : 'bg-transparent' 
                    }`}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => (
                      <td
                        key={cell.id}
                        className="data-cell"
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })
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
            {!loading && data.length === 0 && (
              <tr>
                <td colSpan={columns.length || 100} className="p-4 text-center">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                      No records available
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Uncomment if you want to include pagination */}
      {/* <div className="px-6 py-4">
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
      </div> */}
    </div>
  );
}

export default DataTable;
