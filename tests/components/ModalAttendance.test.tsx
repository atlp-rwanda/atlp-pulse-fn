import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { InMemoryCache } from '@apollo/client';
import ModalAttendance from '../../src/components/ModalAttendance';
import { RECORD_ATTENDANCE } from '../../src/Mutations/Attendance';

const closeModal = jest.fn();
const setTraineeAttendanceDataMock = jest.fn();

const cache = new InMemoryCache();

const sampleTrainees = [
  {
    id: 'test-trainee-name',
    email: 'test-trainee-name@gmail.com',
    role: 'trainee',
    status: {
      date: null,
      reason: null,
      status: 'active',
    },
    profile: {
      id: 'trainee-name-profile',
      name: 'test-trainee-name',
    },
  },
  {
    id: 'test-trainee-name2',
    email: 'test-trainee-name2@gmail.com',
    role: 'ttl',
    status: {
      date: null,
      reason: null,
      status: 'active',
    },
    profile: {
      id: 'trainee-name2-profile',
      name: 'test-trainee-name2',
    },
  },
];

const mocks = [
  {
    request: {
      query: RECORD_ATTENDANCE,
      variables: {
        week: 1,
        today: true,
        yesterday: false,
        team: 'Team-I-id-123',
        trainees: [
          {
            trainee: 'test-trainee-name',
            score: 0,
          },
          {
            trainee: 'test-trainee-name2',
            score: 1,
          },
        ],
        orgToken: 'mocked-org-token',
      },
    },
    result: {
      data: {
        recordAttendance: {
          today: '1729533725697',
          yesterday: '1729274525697',
          attendanceWeeks: [
            {
              phase: {
                id: 'test-phase-i',
                name: 'Phase I',
              },
              weeks: [1],
            },
          ],
          attendance: [
            {
              week: 1,
              phase: {
                id: 'test-phase-i',
                name: 'Phase I',
              },
              dates: {
                mon: {
                  date: '2024-10-21',
                  isValid: true,
                },
                tue: {
                  date: '2024-10-22',
                  isValid: false,
                },
                wed: {
                  date: '2024-10-23',
                  isValid: false,
                },
                thu: {
                  date: '2024-10-24',
                  isValid: false,
                },
                fri: {
                  date: '2024-10-25',
                  isValid: false,
                },
                __typename: 'AttendanceDates',
              },
              days: {
                mon: [
                  {
                    trainee: {
                      id: 'test-trainee-name',
                      email: 'test-trainee-name@gmail.com',
                      profile: {
                        id: 'trainee-name-profile',
                        name: 'test-trainee-name',
                      },
                    },
                    score: 0,
                  },
                  {
                    trainee: {
                      id: 'test-trainee-name2',
                      email: 'test-trainee-name2@gmail.com',
                      profile: {
                        id: 'trainee-name2-profile',
                        name: 'test-trainee-name2',
                      },
                    },
                    score: 1,
                  },
                ],
                tue: [],
                wed: [],
                thu: [],
                fri: [],
              },
            },
          ],
        },
      },
    },
    maxUsageCount: 5,
  },
];
// eslint-disable-next-line no-undef
const errorMocks = [
  {
    request: {
      query: RECORD_ATTENDANCE,
    },
    variableMatcher: jest.fn().mockReturnValue(true),
    error: new Error('An error occurred'),
    maxUsageCount: 5,
  },
];

describe('Record attendance modal', () => {
  beforeEach(() => {
    localStorage.setItem('orgToken', 'mocked-org-token');
  });

  afterEach(() => {
    localStorage.clear();
    cleanup();
  });
  it('Renders Record attendance modal', () => {
    const elem = renderer
      .create(
        <MockedProvider>
          <ModalAttendance
            dayType="today"
            week={3}
            isVisible
            onClose={closeModal}
            team="Team-I-id-123"
            date="11-11-2024"
            teamName="Team I"
            trainees={sampleTrainees}
            setAttendanceData={() => true}
          />
        </MockedProvider>,
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
  it('Closes the modal', () => {
    render(
      <MockedProvider>
        <ModalAttendance
          dayType="today"
          week={3}
          isVisible
          onClose={closeModal}
          team="Team-I-id-123"
          date="11-11-2024"
          teamName="Team I"
          trainees={sampleTrainees}
          setAttendanceData={() => true}
        />
      </MockedProvider>,
    );

    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();

    fireEvent.click(cancelButton);
  });
  it('Renders Record attendance modal and focus on an input field', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ModalAttendance
          dayType="today"
          week={1}
          isVisible
          onClose={closeModal}
          team="Team-I-id-123"
          date="11-11-2024"
          teamName="Team I"
          trainees={sampleTrainees}
          setAttendanceData={() => true}
        />
      </MockedProvider>,
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);
    fireEvent.focus(inputElement);
    fireEvent.change(inputElement, { target: { value: 'test' } });

    const traineeRowData = screen.getByText('test-trainee-name');
    expect(traineeRowData).toBeInTheDocument();

    const testScore2 = screen.getAllByTestId('test-score-2');
    expect(testScore2[0]).toBeInTheDocument();

    fireEvent.mouseDown(testScore2[0]);

    const testScore1 = screen.getAllByTestId('test-score-1');
    expect(testScore1[0]).toBeInTheDocument();

    fireEvent.mouseDown(testScore1[0]);

    const testScore0 = screen.getAllByTestId('test-score-0');
    expect(testScore0[0]).toBeInTheDocument();

    fireEvent.mouseDown(testScore0[0]);

    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    fireEvent.mouseDown(testScore0[1]);

    fireEvent.mouseDown(testScore1[1]);

    fireEvent.click(submitButton);

    expect(await screen.findByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('Submit')).toBeInTheDocument();
  });
  it('Renders Record attendance modal and return error on submission', async () => {
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ModalAttendance
          dayType="today"
          week={1}
          isVisible
          onClose={closeModal}
          team="Team-I-id-123"
          date="11-11-2024"
          teamName="Team I"
          trainees={[sampleTrainees[0]]}
          setAttendanceData={() => true}
        />
      </MockedProvider>,
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    fireEvent.focus(inputElement);
    fireEvent.change(inputElement, { target: { value: 't' } });

    const traineeRowData = screen.getByText('test-trainee-name');
    expect(traineeRowData).toBeInTheDocument();

    const testScore2 = screen.getAllByTestId('test-score-2');
    expect(testScore2[0]).toBeInTheDocument();

    fireEvent.mouseDown(testScore2[0]);

    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(await screen.findByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('Submit')).toBeInTheDocument();
  });
  it("Doesn't Record attendance modal, when prop isvisible has falsy value", async () => {
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ModalAttendance
          dayType="today"
          week={1}
          isVisible={false}
          onClose={closeModal}
          team="Team-I-id-123"
          date="11-11-2024"
          teamName="Team I"
          trainees={[sampleTrainees[0]]}
          setAttendanceData={() => true}
        />
      </MockedProvider>,
    );

    const submitButton = screen.queryByText('Submit');
    expect(submitButton).toBeNull();
  });
  it("Render Record attendance modal,attendance can't be made, there are no trainees in team", async () => {
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ModalAttendance
          dayType="today"
          week={1}
          isVisible
          onClose={closeModal}
          team="Team-I-id-123"
          date="11-11-2024"
          teamName="Team I"
          trainees={[sampleTrainees[0]]}
          setAttendanceData={() => true}
        />
      </MockedProvider>,
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    fireEvent.focus(inputElement);
    fireEvent.change(inputElement, { target: { value: 'test-xyz-abcde' } });

    expect(
      screen.getByText('No trainee found in team Team I.'),
    ).toBeInTheDocument();
  });
});
