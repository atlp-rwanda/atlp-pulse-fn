import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import EditAttendenceButton from '../../src/components/EditAttendenceButton';

const initialData = [
  {
    week: '1',
    phase: 'Phase I',
    days: {
      mon: [
        {
          trainee: {
            id: 'trainee-id-1234',
          },
          status: '1',
        },
      ],
    },
  },
];
const initialData2 = [
  {
    week: '2',
    phase: 'Phase I',
    days: {
      mon: [
        {
          trainee: {
            id: 'trainee-id-1234',
          },
          status: '0',
        },
      ],
    },
  },
];

describe('attendance update button', () => {
  it('Renders attendance update component', () => {
    const elem = renderer
      .create(
        <MemoryRouter>
          <EditAttendenceButton
            day="mon"
            week={3}
            traineeId="trainee-id-1234"
            setUpdated={(value) => value}
            phase="Phase !"
            setTraineeAttendanceData={() => true}
          />
        </MemoryRouter>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('Trigger Edit button and update to score 2', () => {
    
    const setTraineeAttendanceDataMock = jest.fn();
    const setUpdatedMock = jest.fn();
    setTraineeAttendanceDataMock.mockImplementation((update) => update(initialData))


    render(
      <MemoryRouter>
        <EditAttendenceButton
          day="mon"
          week={1}
          traineeId="trainee-id-1234"
          setUpdated={setUpdatedMock}
          phase="Phase I"
          setTraineeAttendanceData={setTraineeAttendanceDataMock}
        />
      </MemoryRouter>,
    );

    const editButton = screen.getByText('Edit');
    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);
    fireEvent.click(screen.getByTestId('score-2'));
  });
  it('Trigger Edit button and update to score 1', () => {
    
    const setTraineeAttendanceDataMock = jest.fn();
    const setUpdatedMock = jest.fn();
    setTraineeAttendanceDataMock.mockImplementation((update) => update(initialData))


    render(
      <MemoryRouter>
        <EditAttendenceButton
          day="mon"
          week={1}
          traineeId="trainee-id-1234"
          setUpdated={setUpdatedMock}
          phase="Phase I"
          setTraineeAttendanceData={setTraineeAttendanceDataMock}
        />
      </MemoryRouter>,
    );

    const editButton = screen.getByText('Edit');
    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);
    fireEvent.click(screen.getByTestId('score-1'));
  });
  it('Trigger Edit button and update to score 0', () => {
    
    const setTraineeAttendanceDataMock = jest.fn();
    const setUpdatedMock = jest.fn();
    setTraineeAttendanceDataMock.mockImplementation((update) => update(initialData2))


    render(
      <MemoryRouter>
        <EditAttendenceButton
          day="mon"
          week={1}
          traineeId="trainee-id-1234"
          setUpdated={setUpdatedMock}
          phase="Phase I"
          setTraineeAttendanceData={setTraineeAttendanceDataMock}
        />
      </MemoryRouter>,
    );

    const editButton = screen.getByText('Edit');
    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);
    fireEvent.click(screen.getByTestId('score-0'));
  });
});
