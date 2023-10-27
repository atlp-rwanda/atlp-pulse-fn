import { gql } from '@apollo/client';

export const GET_ATTENDANCE = gql`
  query ExampleQuery {
    getTraineeAttendance {
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
        id
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
