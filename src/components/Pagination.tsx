import { useState, useEffect } from 'react';

interface Gap {
  before: boolean;
  paginationGroup: number[];
  after: boolean;
}

const Pagination = ({
  contentPerPage,
  count,
}: {
  contentPerPage: number;
  count: number;
}) => {
  const [page, setPage] = useState(1);

  const [gaps, setGaps] = useState<Gap>({
    before: false,
    paginationGroup: [],
    after: true,
  });

  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;
  const [pagesInBetween, setPagesInBetween] = useState<number[]>([]);

  useEffect(() => {
    /* istanbul ignore next */
    if (pageCount > 2) {
      const temp = new Array(pageCount - 2).fill(1).map((_, i) => i + 2);
      setPagesInBetween(temp);
    }
  }, [pageCount]);

  useEffect(() => {
    const currentLocation = pagesInBetween.indexOf(page);
    let paginationGroup = [];
    let before = false;
    let after = false;
    if (page === 1) {
      paginationGroup = pagesInBetween.slice(0, 3);
    } else if (
      page === pageCount ||
      page === pageCount - 1 ||
      page === pageCount - 2
    ) {
      paginationGroup = pagesInBetween.slice(-3, pageCount);
    } else if (page === 2) {
      paginationGroup = pagesInBetween.slice(
        currentLocation,
        currentLocation + 3,
      );
    } else {
      paginationGroup = [page - 1, page, page + 1];
    }
    if (pageCount <= 5) {
      /* istanbul ignore next */
      before = false;
      after = false;
    } /* istanbul ignore next */ else {
      before = false;
      after = false;
      if (paginationGroup[0] > 2) {
        before = true;
      }
      /* istanbul ignore next */
      if (paginationGroup[2] < pageCount - 1) {
        after = true;
      }
    }
    setGaps({ paginationGroup, before, after });
  }, [page, pagesInBetween, pageCount]);

  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          /* istanbul ignore next */
          return state;
        }
        return state + 1;
      }

      if (state === 1) {
        return state;
      }
      /* istanbul ignore next */
      return state - 1;
    });
  };

  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      /* istanbul ignore next */
      setPage(pageCount);
    } else if (num < 1) {
      /* istanbul ignore next */
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
  };
};

export default Pagination;
