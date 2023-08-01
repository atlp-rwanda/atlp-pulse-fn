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
  data: any[];
  columns: any;
  title: string;
  loading?: boolean;
  className?: string;
}

function DataTable({ data, columns, title, loading }: TableData) {
  // const sortedData = React.useMemo(() => [...data], []);
  const sortedColumns = React.useMemo(() => [...columns], [columns]);
  const sortedData = data;
  // const sortedColumns = columns;
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
    <div className={`bg-indigo-100 dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] lg:w-[80%] "lg:ml-60 mx-auto"} mb-10`}>
      <div className="flex items-center justify-between pb-6 ">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white ">
            {t(title)}
          </h2>
          {/* <span className="text-xs text-gray-600">Current cohort</span> */}
          <input
            defaultValue={globalFilter || ''}
            placeholder="Filter"
            className="px-5 py-2 mt-4 font-sans text-xs border border-primary rounded outline-none dark:bg-neutral-600 dark:text-white w-52 md:w-96"
            /* istanbul ignore next */
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>
      <div style={{ overflowX: 'auto' }}>
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

              // eslint-disable-next-line operator-linebreak
              const rowTheme =
                row.index % 2 !== 0
                  ? 'bg-light-bg dark:bg-neutral-600'
                  : 'bg-white dark:bg-dark-bg';

              return (
                <tr className={` ${rowTheme} `} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className="data-cell" {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
            {loading && (
              <tr>
                <td
                  colSpan={columns.length || 100}
                  style={{ textAlign: 'center' }}
                >
                  loading...
                </td>
              </tr>
            )}
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
