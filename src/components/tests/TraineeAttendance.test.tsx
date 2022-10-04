/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import TraineeAttendance from '../TraineeAttendance';

describe('Trainee Attendance page', () => {
  it('Renders the Trainee Attendance Page ', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <TraineeAttendance />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('should update trainee model', () => {
    const prevMck = jest.fn();
    const nextMck = jest.fn();
    const setPageMck = jest.fn();
    const MckPage = jest.fn();
    const { getByTestId } = render(
      <MemoryRouter>
        <TraineeAttendance />
      </MemoryRouter>,
    );

    const removeprev = getByTestId('prev');
    fireEvent.click(removeprev);
    expect(prevMck).toBeCalledTimes(0);

    const removenext = getByTestId('next');
    fireEvent.click(removenext);
    expect(nextMck).toBeCalledTimes(0);

    const removepage1Mck = getByTestId('page1');
    fireEvent.click(removepage1Mck);
    expect(setPageMck).toHaveBeenCalledTimes(0);

    const removepage3Mck = getByTestId('page3');
    fireEvent.click(removepage3Mck);
    expect(MckPage).toHaveBeenCalledTimes(0);
  });
});
