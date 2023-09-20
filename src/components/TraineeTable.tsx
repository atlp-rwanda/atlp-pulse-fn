
/* eslint-disable react/button-has-type */
// @ts-nocheck
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import Pagination from '../components/Pagination';
import DataPagination from './DataPagination';

interface TableData {
  data: any[];
  columns: any;
  title: string;
  loading?: boolean;
}

function Table({ data, columns, title, loading }: TableData) {
  // const sortedData = React.useMemo(() => [...data], []);
  const sortedColumns = React.useMemo(() => [...columns], [columns]);
  const sortedData = data;
  // const sortedColumns = columns;
  const TableInstance = useTable(
    { data: sortedData, columns: sortedColumns, initialState: { pageSize: 5 } },

    useGlobalFilter,
    useSortBy,
    usePagination,
  );
  const { t } = useTranslation();

  const {
    getTableProps,
    getTableBodyProps,
    page,
    headerGroups,
    prepareRow,
    nextPage,
    canPreviousPage,
    previousPage,
    canNextPage,
    gotoPage,
    pageCount,
    setPageSize,
    pageOptions,
    state,
  } = TableInstance;
  // @ts-ignore
  const { globalFilter, pageIndex, pageSize } = state;
 
  return (
    <div className=" shadow-lg py-6  w-[100%] mb-10 ">
      <div style={{ overflowX: 'auto' }}>
        <table className=" leading-3 rounded-full w-[100%]" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className={
                      column.isSorted ? 'sort-asc ' : 'bg-[#B8CDBA] p-4 '
                    }
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody  {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              // eslint-disable-next-line operator-linebreak
              const rowTheme =
                row.index % 2 !== 0
                  ? 'bg-[#f5f8ff] dark:bg-dark-bg'
                  : 'bg-white dark:bg-dark-bg';

              return (
                <tr className={` ${rowTheme} `} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className="border  py-2 px-24" {...cell.getCellProps()}>
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

export default Table;








