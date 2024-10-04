import {gql} from '@apollo/client';

export const RECORD_ATTENDANCE = gql`
  mutation RecordAttendance(
    $week: Int!
    $team: String!
    $date: String!
    $trainees: [TraineeInput!]!
    $orgToken: String!
  ) {
    recordAttendance(
      week: $week
      team: $team
      date: $date
      trainees: $trainees
      orgToken: $orgToken
    ) {
      team {
        id
        name
        cohort {
          name
        }
      }
      trainees {
        trainee {
          profile {
            name
          }
        }
        status {
          day
          date
          score
        }
      }
    }
  }
`;

export const UPDATE_ATTENDANCE = gql`
  mutation UpdateAttendance(
    $week: Int!
    $team: String!
    $phase: String!
    $trainees: [TraineeInput!]!
    $orgToken: String!
  ) {
    updateAttendance(
      week: $week
      team: $team
      phase: $phase
      trainees: $trainees
      orgToken: $orgToken
    ) {
      id
      week
      phase {
        id
        name
      }
      cohort {
        id
        name
      }
      teams {
        team {
          id
          name
        }
        trainees {
          trainee {
            id
            email
            profile {
              id
              name
            }
          }
          status {
            day
            date
            score
          }
        }
      }
    }
  }
`;

export const DELETE_ATTENDANCE = gql`
  mutation DeleteAttendance($week: String!, $team: String!, $day: String!) {
    deleteAttendance(week: $week, team: $team, day: $day) {
      id
      week
      phase {
        id
        name
      }
      cohort {
        id
        name
      }
      teams {
        team {
          id
          name
        }
        trainees {
          trainee {
            id
            email
            profile {
              id
              name
            }
          }
          status {
            day
            date
            score
          }
        }
      }
    }
  }
`;
