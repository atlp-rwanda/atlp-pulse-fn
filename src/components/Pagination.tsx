import React from 'react';
import { Link } from 'react-router-dom';

function Pagination() {
  return (
    <div aria-label="navigation">
      <ul className="inline-flex -space-x-px">
        <li>
          <Link
            to="#link"
            className="py-2 px-3 text-primary bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-primary dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            1
          </Link>
        </li>
        <li>
          <Link
            to="#link"
            className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </Link>
        </li>
        <li>
          <Link
            to="#link"
            aria-current="page"
            className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            3
          </Link>
        </li>
        <li>
          <Link
            to="#link"
            className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            4
          </Link>
        </li>
        <li>
          <Link
            to="#link"
            className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            5
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
