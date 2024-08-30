import { renderHook, act } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination Hook', () => {
  const setup = (contentPerPage: number, count: number) => {
    return renderHook(() => Pagination({ contentPerPage, count }));
  };

  test('initial state is correct', () => {
    const { result } = setup(10, 100);

    expect(result.current.page).toBe(1);
    expect(result.current.totalPages).toBe(10);
    expect(result.current.firstContentIndex).toBe(0);
    expect(result.current.lastContentIndex).toBe(10);
    expect(result.current.gaps).toEqual({
      before: false,
      paginationGroup: [2, 3, 4],
      after: true,
    });
  });

  test('nextPage increments the page number', () => {
    const { result } = setup(10, 100);

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.page).toBe(2);
  });

  test('prevPage decrements the page number', () => {
    const { result } = setup(10, 100);

    act(() => {
      result.current.nextPage(); // Go to page 2 first
      result.current.prevPage(); // Then back to page 1
    });

    expect(result.current.page).toBe(1);
  });

  test('nextPage does not increment beyond total pages', () => {
    const { result } = setup(10, 100);

    act(() => {
      for (let i = 0; i < 11; i+=1) {
        result.current.nextPage();
      }
    });

    expect(result.current.page).toBe(10);
  });

  test('prevPage does not decrement below 1', () => {
    const { result } = setup(10, 100);

    act(() => {
      result.current.prevPage();
    });

    expect(result.current.page).toBe(1);
  });

  test('setPageSAFE correctly sets the page', () => {
    const { result } = setup(10, 100);

    act(() => {
      result.current.setPage(5);
    });

    expect(result.current.page).toBe(5);
  });

  test('setPageSAFE does not set page beyond total pages', () => {
    const { result } = setup(10, 100);

    act(() => {
      result.current.setPage(15);
    });

    expect(result.current.page).toBe(10);
  });

  test('setPageSAFE does not set page below 1', () => {
    const { result } = setup(10, 100);

    act(() => {
      result.current.setPage(-1);
    });

    expect(result.current.page).toBe(1);
  });

  test('pagination gaps are calculated correctly', () => {
    const { result } = setup(10, 100);

    act(() => {
      result.current.setPage(5);
    });

    expect(result.current.gaps).toEqual({
      before: true,
      paginationGroup: [4, 5, 6],
      after: true,
    });
  });

  test('pagination for small page count', () => {
    const { result } = setup(10, 20);

    expect(result.current.totalPages).toBe(2);
    expect(result.current.gaps).toEqual({
      before: false,
      paginationGroup: [],
      after: false,
    });
  });
});
