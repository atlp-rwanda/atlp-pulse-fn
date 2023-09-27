import { gql } from '@apollo/client';

export const GET_ATTENDANCE = gql`
  query ExampleQuery($orgToken: String!) {
    getTraineeAttendance(orgToken: $orgToken) {
      id
      trainees {
        traineeId
        traineeEmail
        status {
          days
          value
        }
      }
      week
    }
  }
`;

export const GET_TRAINEE_ATTENDANCE = gql`
  query getTraineeAttendance($orgToken: String!) {
    getAllTeams(orgToken: $orgToken) {
      id
    }
  }
`;

export const UPDATE_ATTENDANCE = gql`
  mutation RecordAttendance(
    $week: String!
    $days: String!
    $trainees: [TraineeInput!]!
    $recordAttendanceOrgToken2: String!
  ) {
    recordAttendance(
      week: $week
      days: $days
      trainees: $trainees
      orgToken: $recordAttendanceOrgToken2
    ) {
      id
      week
      trainees {
        traineeId
        traineeEmail
        status {
          days
          value
        }
      }
    }
  }
`;
