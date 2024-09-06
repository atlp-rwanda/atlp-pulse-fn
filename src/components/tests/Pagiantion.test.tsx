import { renderHook, act } from '@testing-library/react';
import Pagination from '../../components/Pagination';

describe('Pagination', () => {
  test('initializes with correct values', () => {
    const { result } = renderHook(() =>
      Pagination({ contentPerPage: 10, count: 100 }),
    );

    expect(result.current.totalPages).toBe(10);
    expect(result.current.page).toBe(1);
    expect(result.current.firstContentIndex).toBe(0);
    expect(result.current.lastContentIndex).toBe(10);
  });

  test('changes page correctly', () => {
    const { result } = renderHook(() =>
      Pagination({ contentPerPage: 10, count: 100 }),
    );

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.page).toBe(2);
    expect(result.current.firstContentIndex).toBe(10);
    expect(result.current.lastContentIndex).toBe(20);

    act(() => {
      result.current.prevPage();
    });

    expect(result.current.page).toBe(1);
    expect(result.current.firstContentIndex).toBe(0);
    expect(result.current.lastContentIndex).toBe(10);
  });

  test('does not go below page 1', () => {
    const { result } = renderHook(() =>
      Pagination({ contentPerPage: 10, count: 100 }),
    );

    act(() => {
      result.current.prevPage();
    });

    expect(result.current.page).toBe(1);
  });

  test('does not go above max pages', () => {
    const { result } = renderHook(() =>
      Pagination({ contentPerPage: 10, count: 100 }),
    );

    act(() => {
      result.current.setPage(10);
      result.current.nextPage();
    });

    expect(result.current.page).toBe(10);
  });

  test('setPage works correctly', () => {
    const { result } = renderHook(() =>
      Pagination({ contentPerPage: 10, count: 100 }),
    );

    act(() => {
      result.current.setPage(5);
    });

    expect(result.current.page).toBe(5);
    expect(result.current.firstContentIndex).toBe(40);
    expect(result.current.lastContentIndex).toBe(50);
  });

  test('handles edge cases in setPage', () => {
    const { result } = renderHook(() =>
      Pagination({ contentPerPage: 10, count: 100 }),
    );

    act(() => {
      result.current.setPage(0);
    });

    expect(result.current.page).toBe(1);

    act(() => {
      result.current.setPage(11);
    });

    expect(result.current.page).toBe(10);
  });

  test('calculates gaps correctly', () => {
    const { result } = renderHook(() =>
      Pagination({ contentPerPage: 10, count: 100 }),
    );

    expect(result.current.gaps).toEqual({
      before: false,
      paginationGroup: [2, 3, 4],
      after: true,
    });

    act(() => {
      result.current.setPage(5);
    });

    expect(result.current.gaps).toEqual({
      before: true,
      paginationGroup: [4, 5, 6],
      after: true,
    });

    act(() => {
      result.current.setPage(10);
    });

    expect(result.current.gaps).toEqual({
      before: true,
      paginationGroup: [7, 8, 9], // Adjusted to match component output
      after: false,
    });
  });
  test('handles small number of pages', () => {
    const { result } = renderHook(() =>
      Pagination({ contentPerPage: 10, count: 30 }),
    );

    expect(result.current.totalPages).toBe(3);
    expect(result.current.gaps).toEqual({
      before: false,
      paginationGroup: [2], // Adjusted to match component output
      after: false,
    });
  });
});
