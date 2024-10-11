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
      className={`relative font-serif bg-indigo-100 dark:bg-dark-bg shadow-lg h-fit px-5 py-8 rounded-md w-[100%] "lg:ml-60 mx-auto"} mb-10`}
    >
      <div className="flex items-center justify-between pb-6 ">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white ">
            {t(title)}
          </h2>
          <input
            value={filterInput}
            aria-label="Filter table data"
            placeholder="Filter"
            className="px-5 py-2 mt-4 font-sans text-xs border rounded outline-none border-primary dark:bg-neutral-600 dark:text-white w-52 md:w-96"
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="overflow-visible ">
        <table className="min-w-full leading-normal" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.getHeaderGroupProps().key}
              >
                {headerGroup.headers.map((column, colIndex) => (
                  <th
                    className={column.isSorted ? 'sort-asc thead' : ' thead'}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={
                      column.getHeaderProps(column.getSortByToggleProps()).key
                    }
                  >
                    {column.render('Header')}
                    <span>
                      {/* //  {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''} */}
                    </span>
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
                // console.log(row.getRowProps());
                return (
                  <tr
                    className={`border-b dark:border-gray-700 ${
                      row.index % 2 === 0
                        ? 'bg-light-bg dark:bg-neutral-600'
                        : 'bg-white dark:bg-dark-bg'
                    }`}
                    {...row.getRowProps()}
                    key={row.getRowProps().key}
                  >
                    {row.cells.map((cell) => (
                      <td
                        className="data-cell "
                        {...cell.getCellProps()}
                        key={cell.getCellProps().key}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={columns.length || 100}
                  className="p-4 text-center h-24"
                >
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 pt-8">
                    No records available
                  </p>
                </td>
              </tr>
            )}
            {loading && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-sm text-center text-gray-500 dark:text-gray-300 "
                >
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4">
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
