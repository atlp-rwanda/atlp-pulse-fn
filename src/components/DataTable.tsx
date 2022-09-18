// @ts-nocheck
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import DataPagination from './DataPagination';

interface TableData {
  data: [any];
  columns: any;
  title: string;
}

function DataTable({ data, columns, title }: TableData) {
  // const sortedData = React.useMemo(() => [...data], []);
  const sortedData = data;

  // const sortedColumns = React.useMemo(() => [...columns], []);
  const sortedColumns = columns;

  const TableInstance = useTable(
    { data: sortedData, columns: sortedColumns, initialState: { pageSize: 3 } },

    useGlobalFilter,
    useSortBy,
    usePagination,
  );
  const { t } = useTranslation();

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
    state,
  } = TableInstance;
  // @ts-ignore
  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-60 mb-10">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-800 dark:text-white font-semibold text-xl">
            {t(title)}
          </h2>
          {/* <span className="text-xs text-gray-600">Current cohort</span> */}
          <input
            defaultValue={globalFilter || ''}
            placeholder="Filter by cohort, program, and rating"
            className="border-gray-300 dark:bg-dark-tertiary dark:text-white border py-2 mt-4 rounded outline-none px-5 font-sans text-xs w-52 md:w-96"
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>
      <div>
        <table className="min-w-full leading-normal" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
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
            {page.map((row) => {
              prepareRow(row);

              const rowTheme = row.index % 2 !== 0
                ? 'bg-light-bg dark:bg-dark-tertiary'
                : 'bg-white dark:bg-dark-bg';

              return (
                <tr className={` ${rowTheme}} `} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className="data-cell" {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
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
