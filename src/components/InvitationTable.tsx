import React, { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "../components/InvitationDataPagination";
import SkeletonTable from '../Skeletons/SkeletonTable';

interface Column {
  accessor?: string | ((row: any) => any);
  header: React.ReactNode;
  cell: (info: any) => React.ReactNode;
}

interface TableProps {
  cols: Column[];
  data: any[];
  loading: boolean;
  rowCount: number;
  onPaginationChange: (pagination: { pageIndex: number; pageSize: number }) => void;
  pagination: { pageSize: number; pageIndex: number };
}

const columnHelper = createColumnHelper();

function InvitationTable({
  cols,
  data,
  loading,
  rowCount,
  onPaginationChange,
  pagination,
}: TableProps) {
  const { pageSize, pageIndex } = pagination;

  const totalPages = Math.ceil(rowCount / pageSize);

  const tableColumns = useMemo(
    () =>
      cols.map((column) => {
        if (typeof column.accessor === 'string') {
          return columnHelper.accessor(column.accessor, {
            header: typeof column.header === 'string' ? column.header : column.header(),
            cell: column.cell,
          });
        } else if (typeof column.accessor === 'function') {
          return columnHelper.accessor((row) => column.accessor(row), {
            header: typeof column.header === 'string' ? column.header : column.header(),
            cell: column.cell,
          });
        } else {
          return columnHelper.display({
            header: typeof column.header === 'string' ? column.header : column.header(),
            cell: column.cell,
          });
        }
      }),
    [cols]
  );

  const tableLib = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    state: {
      pagination,
    },
    onPaginationChange,
  });

  return (
    <section className="relative">
      <div className="flex items-center justify-between pb-6 " />
      <div style={{ overflowX: 'auto' }}>
        {loading ? (
          <SkeletonTable columns={tableColumns} />
        ) : (
          <table className="min-w-full leading-normal">
            <thead>
              {tableLib.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="thead"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan={tableColumns.length}
                    className="px-6 py-4 text-sm text-center text-gray-500 dark:text-gray-300"
                    aria-label="Empty cell"
                  >
                    &nbsp;{' '}
                    {/* Non-breaking space to ensure it's not an empty tag */}
                  </td>
                </tr>
              )}
              {tableLib.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={`border-b dark:border-gray-700 ${
                    row.index % 2 === 0
                      ? 'bg-light-bg dark:bg-neutral-600'
                      : 'bg-white dark:bg-dark-bg'
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="data-cell "
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
              {!loading && data.length === 0 && (
                <tr>
                  <td colSpan={tableColumns.length || 100} className="text-center p-4">
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
        <Pagination
          tableLib={tableLib}
          totalPages={totalPages}
          pageSize={pageSize}
          pageIndex={pageIndex}
          sizes={[3, 5, 10, 25, 50, 100]}
          loading={loading}
        />
      </div>
    </section>
  );
}

export default InvitationTable;
