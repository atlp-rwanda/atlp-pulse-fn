// @ts-nocheck
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import { toast } from 'react-toastify';
import DataPagination from './DataPagination';

interface TableData {
  data: any[];
  columns: any;
  error: string | null;
  loading?: boolean;
  className?: string;
}

function DataTableStats({ data, columns, error, loading }: TableData) {
  const [filterInput, setFilterInput] = useState('');
  const { t } = useTranslation();
  const [pageIndex, setPageIndex] = useState(0);

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

  useEffect(() => {
    if (error) {
      toast.error('Network error. Please, try again later.');
    }
  }, [error]);

  const handleFilterChange = (e) => {
    const value = e.target.value || '';
    setGlobalFilter(value);
    setFilterInput(value);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between pb-6 " />
      <div style={{ overflowX: 'auto' }}>
        <table className="min-w-full leading-normal" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    className={column.isSorted ? 'sort-asc thead' : ' thead'}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
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
            {!loading && memoizedData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-sm text-center text-gray-500 dark:text-gray-300"
                  aria-label="Empty cell" // Added for accessibility
                >
                  &nbsp;{' '}
                  {/* Non-breaking space to ensure it's not an empty tag */}
                </td>
              </tr>
            )}
            {!loading &&
              memoizedData.length > 0 &&
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    key={row.id}
                    className={`border-b dark:border-gray-700 ${
                      row.index % 2 === 0
                        ? 'bg-light-bg dark:bg-neutral-600'
                        : 'bg-white dark:bg-dark-bg'
                    }`}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => (
                      <td
                        key={cell.id}
                        className="data-cell "
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            {!loading && !error && data.length === 0 && (
              <tr>
                <td colSpan={columns.length || 100} className="text-center p-4">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                      No records available
                    </p>
                  </div>
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

export default DataTableStats;