import React from 'react';
import '@testing-library/jest-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import {
  render,
  fireEvent,
  screen,
  cleanup,
  waitFor,
} from '@testing-library/react';
import BulkRatingModal from '../../src/components/BulkRatingModal';
import {
  ADD_RATINGS_BY_FILE,
  GET_RATINGS_BY_COHORT,
} from '../../src/Mutations/Ratings';
import { GET_TEAMS_BY_COHORT } from '../../src/Mutations/teamMutation';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';
import { GET_USER_COHORTS } from '../../src/Mutations/cohortMutations';

const mockRatingsFile: File = new File(['Test'], 'testRatings.xlsx', {
  type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
});

const getUserCohorts: MockedResponse = {
  request: {
    query: GET_USER_COHORTS,
    variables: {
      orgToken: 'mocked_org_token',
    },
  },
  result: {
    data: {
      getUserCohorts: [
        {
          id: '1',
          name: 'Cohort 1',
        },
        {
          id: '2',
          name: 'Cohort 2',
        },
      ],
    },
  },
};

const getRatingsByCohort: MockedResponse = {
  request: {
    query: GET_RATINGS_BY_COHORT,
    variables: {
      cohortId: '1',
      orgToken: 'mocked_org_token',
    },
  },
  result: {
    data: {
      getRatingsByCohort: [
        {
          id: '1',
          sprint: 1,
        },
        {
          id: '2',
          sprint: 2,
        },
      ],
    },
  },
};

const getTeamsByCohort = {
  request: {
    query: GET_TEAMS_BY_COHORT,
    variables: {
      cohortId: '1',
      orgToken: 'mocked_org_token',
    },
  },
  result: {
    data: {
      getTeamsByCohort: [
        {
          id: '1',
          name: 'Team I',
          members: [
            {
              email: 'test@gmail.com',
              role: 'trainee',
            },
            {
              email: 'test2@gmail.com',
              role: 'ttl',
            },
            {
              email: 'test3@gmail.com',
              role: 'trainee',
            },
          ],
        },
        {
          id: '2',
          name: 'Team II',
          members: [
            {
              email: 'test4@gmail.com',
              role: 'trainee',
            },
            {
              email: 'test5@gmail.com',
              role: 'ttl',
            },
            {
              email: 'test6@gmail.com',
              role: 'trainee',
            },
          ],
        },
      ],
    },
  },
};

const addRatingsByFile: MockedResponse = {
  request: {
    query: ADD_RATINGS_BY_FILE,
    variables: {
      file: mockRatingsFile,
      cohortId: '1',
      sprint: 1,
      orgToken: 'mocked_org_token',
    },
  },
  result: {
    data: {
      addRatingsByFile: {
        NewRatings: {
          user: {
            email: 'test@gmail.com',
          },
          sprint: 1,
          phase: 'Phase I',
          quality: 1,
          quantity: 1,
          professional_Skills: 1,
          feedbacks: {
            sender: {
              email: 'testing@gmail.com',
            },
            content: 'ok',
            createdAt: '2024-10-30T00:00:00:000z',
          },
          cohort: {
            name: 'Cohort 1',
          },
        },
        RejectedRatings: {
          email: 'rejectedemail@gmail.com',
          quantity: 1,
          quality: 1,
          professional_skills: 1,
          feedBacks: 'ok',
        },
        UpdatedRatings: {
          quantity: 1,
          quality: 1,
          professional_Skills: 1,
          feedbacks: {
            content: 'Average',
          },
          oldFeedback: ['ok'],
        },
      },
    },
  },
};

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('xlsx');

beforeEach(() => {
  localStorage.setItem('auth_token', 'mocked_auth_token');
  localStorage.setItem('orgToken', 'mocked_org_token');
  localStorage.setItem(
    'auth',
    JSON.stringify({
      auth: true,
      email: 'testing@gmail.com',
      firstName: 'Jack',
      role: 'coordinator',
      userId: '1',
    }),
  );
});

afterEach(() => {
  localStorage.clear();
  cleanup();
});

describe('BulkRatingModal', () => {
  const setBulkRateModal: React.Dispatch<React.SetStateAction<boolean>> =
    jest.fn();
  it('displays all cohorts', async () => {
    render(
      <MockedProvider
        mocks={[getUserCohorts, getRatingsByCohort, getTeamsByCohort]}
        addTypename={false}
      >
        <BulkRatingModal setBulkRateModal={setBulkRateModal}></BulkRatingModal>
      </MockedProvider>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('cohort-option-1')).toBeInTheDocument();
      expect(screen.getByTestId('cohort-option-2')).toBeInTheDocument();
    });
  });
  it('displays all sprints', async () => {
    render(
      <MockedProvider
        mocks={[getUserCohorts, getRatingsByCohort, getTeamsByCohort]}
        addTypename={false}
      >
        <BulkRatingModal setBulkRateModal={setBulkRateModal}></BulkRatingModal>
      </MockedProvider>,
    );
    const cohortInput = screen.getByTestId('select-cohort');
    await waitFor(() => {
      fireEvent.change(cohortInput, {
        target: {
          value: '1',
        },
      });
      expect(screen.getByTestId('sprint-option-1')).toBeInTheDocument();
      expect(screen.getByTestId('sprint-option-2')).toBeInTheDocument();
    });
  });
  it('displays teams', async () => {
    render(
      <MockedProvider
        mocks={[getUserCohorts, getRatingsByCohort, getTeamsByCohort]}
        addTypename={false}
      >
        <BulkRatingModal setBulkRateModal={setBulkRateModal}></BulkRatingModal>
      </MockedProvider>,
    );
    const cohortInput = screen.getByTestId('select-cohort');
    await waitFor(() => {
      fireEvent.change(cohortInput, {
        target: {
          value: '1',
        },
      });
      expect(screen.getByTestId('team-option-1')).toBeInTheDocument();
      expect(screen.getByTestId('team-option-2')).toBeInTheDocument();
    });
  });

  it('bulk rates successfully', async () => {
    render(
      <MockedProvider
        mocks={[
          getUserCohorts,
          getRatingsByCohort,
          getTeamsByCohort,
          addRatingsByFile,
        ]}
        addTypename={false}
      >
        <BulkRatingModal setBulkRateModal={setBulkRateModal}></BulkRatingModal>
      </MockedProvider>,
    );
    const bulkRatingForm = screen.getByTestId('bulk-rating-form');
    const cohortInput = screen.getByTestId('select-cohort');
    const sprintInput = screen.getByTestId('select-sprint');
    const fileInput = screen.getByTestId('file-input');
    await waitFor(() => {
      fireEvent.change(cohortInput, {
        target: {
          value: '1',
        },
      });
      fireEvent.change(sprintInput, {
        target: {
          value: '1',
        },
      });
      fireEvent.change(fileInput, {
        target: {
          files: [mockRatingsFile],
        },
      });
      fireEvent.submit(bulkRatingForm);
      expect(toast.success).toHaveBeenCalledWith(
        'Rating completed successfully',
      );
    });
  });

  it('downloads team rating templates successfully', async () => {
    render(
      <MockedProvider
        mocks={[
          getUserCohorts,
          getRatingsByCohort,
          getTeamsByCohort,
          addRatingsByFile,
        ]}
        addTypename={false}
      >
        <BulkRatingModal setBulkRateModal={setBulkRateModal}></BulkRatingModal>
      </MockedProvider>,
    );
    const cohortInput = screen.getByTestId('select-cohort');
    await waitFor(() => {
      fireEvent.change(cohortInput, {
        target: {
          value: '1',
        },
      });
      const teamInput = screen.getByTestId('select-team');
      const downloadButton = screen.getByTestId('download-button');
      expect(teamInput).toBeInTheDocument();
      expect(downloadButton).toBeInTheDocument();
      expect(screen.getByTestId('team-option-1')).toBeInTheDocument();
      expect(screen.getByTestId('team-option-2')).toBeInTheDocument();
      fireEvent.change(teamInput, {
        target: {
          value: '1',
        },
      });
      fireEvent.click(downloadButton);
      expect(XLSX.utils.json_to_sheet).toHaveBeenCalled();
      expect(XLSX.utils.book_new).toHaveBeenCalled();
    });
  });
});
