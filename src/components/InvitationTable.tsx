// @ts-nocheck
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import { toast } from 'react-toastify';
import DataPagination from './DataPagination';
import SkeletonTable from '../Skeletons/SkeletonTable'; 

export interface InvitationVariables {
  limit: number,
  offset: number,
  role?: string,
  status?: string
}
interface TableData {
  data: any[];
  columns: any;
  error: string | null;
  loading?: boolean;
  className?: string;
  totalInvitations?: number;
  fetchNextInvitations: ({limit, offset}: InvitationVariables) => void;
}

function DataTableStats({ data, columns, error, loading, fetchNextInvitations, totalInvitations }: TableData) {
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

  // const invitationNextPageHandler = () => {
  //   console.log(pageIndex, pageSize)
  //   // Check if more data needs to be fetched
  //   if ((data.length - (pageSize * (pageIndex + 1))) < 0) {
  //     console.log('in------!!!!')
  //     fetchNextInvitations({limit: pageSize, offset: data.length})
  //     return
  //   }

  //    // Check if there's less data left to fill a new page
  //   if ((data.length - (pageSize * (pageIndex + 1))) < pageSize) {
  //     console.log('in------!!!!2')
  //     fetchNextInvitations({limit: pageSize, offset: data.length})
  //     setPageIndex(prevData => prevData + 1)
  //     nextPage()
  //     return
  //   }
    
  //   const totalPages = data.length / pageSize
  //   // Check if the user is on the last page
  //   if (totalPages <= (pageIndex + 1)) {
  //     logger.debug('in------!!!!3')
  //     fetchNextInvitations({limit: pageSize, offset: data.length})
  //     setPageIndex(prevData => prevData + 1)
  //   } else {
  //     nextPage()
  //   }
  // }

  // // useEffect(() => {
  // //   invitationNextPageHandler()
  // // }, [pageSize])
  // useEffect(() => {
  //   setPageIndex(currentPageIndex);
  // }, [currentPageIndex]);

  const invitationNextPageHandler = () => {
    const totalFetchedData = data.length; 
    const totalPages = Math.ceil(totalInvitations / pageSize);
    const currentPage = pageIndex + 1;
  
    // If current page is the last one, stop fetching
    if (currentPage >= totalPages) {
      return;
    }
  
    // Check if more data needs to be fetched
    const currentOffset = pageSize * currentPage;
  
    if (totalFetchedData <= currentOffset) {
      fetchNextInvitations({ limit: pageSize, offset: totalFetchedData });
      setPageIndex(prevIndex => prevIndex + 1); // Increment page index after fetching
      return;
    }
  
    // If there's enough data to display the next page, simply move to the next page
    if (totalFetchedData > currentOffset) {
      nextPage();
      setPageIndex(prevIndex => prevIndex + 1);
    }
  };

  useEffect(() => {
    setPageIndex(currentPageIndex);
  }, [currentPageIndex]);

  const handleFilterChange = (e) => {
    const value = e.target.value || '';
    setGlobalFilter(value);
    setFilterInput(value);
  };

  const invitationPageOption = [];
  for (let i = 0; i < totalInvitations/pageSize; i=i+1) {
    invitationPageOption.push(i);
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between pb-6 " />
      <div style={{ overflowX: 'auto' }}>
        {loading ? (
          <SkeletonTable columns={columns} />
        ) : (
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
              {memoizedData.length === 0 && (
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
              {memoizedData.length > 0 &&
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
        )}
      </div>
      <div className="px-6 py-4">
        <DataPagination
          pageOptions={invitationPageOption}
          canNextPage={true}
          gotoPage={gotoPage}
          columnLength={columns.length}
          canPreviousPage={canPreviousPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          previousPage={previousPage}
          nextPage={invitationNextPageHandler}
          pageCount={pageCount}
          pageIndex={pageIndex}
        />
      </div>
    </div>
  );
}

export default DataTableStats;