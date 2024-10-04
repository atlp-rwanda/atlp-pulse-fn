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

const sampleTrainees = {
  getTeamTrainees: [
    {
      id: 'trainee-123',
      email: 'test-trainee-name@gmail.com',
      profile: {
        name: 'test-trainee-name',
      },
      status: {
        status: 'active',
      },
    },
    {
      id: 'trainee-456',
      email: 'test-trainee-name2@gmail.com',
      profile: {
        name: 'test-trainee-name2',
      },
      status: {
        status: 'active',
      },
    },
  ],
};

const mocks = [
  {
    request: {
      query: RECORD_ATTENDANCE,
      variables: {
        week: 3,
        team: 'Team-I-id-123',
        date: '11-11-2024',
        trainees: [
          {
            trainee: 'trainee-123',
            status: {
              day: 'mon',
              score: '0',
            },
          },
          {
            trainee: 'trainee-456',
            status: {
              day: 'mon',
              score: '1',
            },
          },
        ],
        orgToken: 'mocked-org-token',
      },
    },
    result: {
      data: {
        recordAttendance: {
          team: {
            id: 'Team-I-id-123',
            name: 'Team I',
            cohort: {
              name: 'Cohort 1',
            },
          },
          trainees: [
            {
              trainee: {
                profile: {
                  name: 'test-trainee-name',
                },
              },
              status: [
                {
                  day: 'mon',
                  date: '1727806679051',
                  score: '0',
                },
              ],
            },
            {
              trainee: {
                profile: {
                  name: 'test-trainee-name2',
                },
              },
              status: [
                {
                  day: 'mon',
                  date: '1727806679051',
                  score: '0',
                },
              ],
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
    error: new Error("An error occurred"),
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
            day="mon"
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
          day="mon"
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
          day="mon"
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
          day="mon"
          week={3}
          isVisible
          onClose={closeModal}
          team="Team-I-id-123"
          date='11-11-2024'
          teamName="Team I"
          trainees={{ getTeamTrainees: [sampleTrainees.getTeamTrainees[0]] }}
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
  it('Doesn\'t Record attendance modal, when prop isvisible has falsy value', async () => {
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ModalAttendance
          day="mon"
          week={3}
          isVisible={false}
          onClose={closeModal}
          team="Team-I-id-123"
          date='11-11-2024'
          teamName="Team I"
          trainees={{ getTeamTrainees: [sampleTrainees.getTeamTrainees[0]] }}
          setAttendanceData={() => true}
        />
      </MockedProvider>,
    );

    const submitButton = screen.queryByText('Submit');
    expect(submitButton).toBeNull();
  });
  it('Render Record attendance modal,attendance can\'t be made, there are no trainees in team', async () => {
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ModalAttendance
          day="mon"
          week={3}
          isVisible
          onClose={closeModal}
          team="Team-I-id-123"
          date="11-11-2024"
          teamName="Team I"
          trainees={{ getTeamTrainees: [sampleTrainees.getTeamTrainees[0]] }}
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
