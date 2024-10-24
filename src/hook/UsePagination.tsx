import { useState } from 'react';

const usePagination = (initialSize = 3) => {
  const [pagination, setPagination] = useState({
    pageSize: initialSize,
    pageIndex: 0,
  });

  const { pageSize, pageIndex } = pagination;

  return {
    onPaginationChange: setPagination,
    pagination,
    limit: pageSize,
    skip: pageSize * pageIndex,
  };
};

export default usePagination;
