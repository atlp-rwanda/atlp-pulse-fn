import React from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline';
import { Table } from "@tanstack/react-table";

interface PaginationProps {
  tableLib: Table<any>;
  totalPages: number;
  pageSize: number;
  pageIndex: number;
  sizes: number[];
  loading: boolean; // Add a loading prop to control button state
}

function Pagination({
  tableLib,
  totalPages,
  pageSize,
  pageIndex,
  sizes,
  loading,
}: PaginationProps) {
  const validTotalPages = totalPages && totalPages > 0 ? totalPages : 1;

  return (
    <div className="font-serif w-full mt-2">
      <div className="flex items-center justify-between w-full mx-auto space-x-2">
        
        {/* Previous / Next Page Buttons */}
        <div className="flex space-x-2 items-center shrink-0">
          <button
            type="button"
            aria-label="left-arrow"
            className="page text-white rounded-circle appearance-none font-bold flex items-center justify-center bg-primary h-[40px] w-[40px] lg:h-[40px] lg:w-[60px] cursor-pointer disabled:opacity-50"
            onClick={() => tableLib.previousPage()}
            disabled={pageIndex === 0 || loading}
          >
            <ArrowCircleLeftIcon className="w-4 lg:w-6" />
          </button>

          <button
            type="button"
            aria-label="right-arrow"
            className="page text-white rounded-circle appearance-none font-bold flex items-center justify-center bg-primary h-[40px] w-[40px] lg:h-[40px] lg:w-[60px] cursor-pointer disabled:opacity-50"
            onClick={() => tableLib.nextPage()}
            disabled={pageIndex === validTotalPages - 1 || loading}
          >
            <ArrowCircleRightIcon className="w-4 lg:w-6" />
          </button>
        </div>

        {/* Page Information */}
        <div className="text-center text-xs lg:text-md min-w-[120px] flex-shrink-0">
          Page <strong>{pageIndex + 1} of {validTotalPages}</strong>
        </div>

        {/* Page Size Selector */}
        <div className="flex items-center shrink-0">
          <select
            className="border rounded-md font-raleway border-dark dark:bg-primary focus:outline-none px-2 py-1 text-xs lg:text-sm"
            value={pageSize}
            onChange={(e) => tableLib.setPageSize(Number(e.target.value))}
            disabled={loading}
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
