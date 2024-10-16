import { gql } from '@apollo/client';

export const RECORD_ATTENDANCE = gql`
  mutation RecordAttendance(
    $today: Boolean!
    $yesterday: Boolean!
    $week: Int!
    $team: String!
    $trainees: [TraineeInput!]!
    $orgToken: String!
  ) {
    recordAttendance(
      today: $today
      yesterday: $yesterday
      week: $week
      team: $team
      trainees: $trainees
      orgToken: $orgToken
    ) {
      today
      yesterday
      attendanceWeeks {
        phase {
          id
          name
        }
        weeks
      }
      attendance {
        week
        phase {
          id
          name
        }
        dates {
          mon {
            date
            isValid
          }
          tue {
            date
            isValid
          }
          wed {
            date
            isValid
          }
          thu {
            date
            isValid
          }
          fri {
            date
            isValid
          }
        }
        days {
          mon {
            trainee {
              id
              email
              profile {
                id
                name
              }
            }
            score
          }
          tue {
            trainee {
              id
              email
              profile {
                name
              }
            }
            score
          }
          wed {
            trainee {
              id
              email
              profile {
                name
              }
            }
            score
          }
          thu {
            trainee {
              id
              email
              profile {
                name
              }
            }
            score
          }
          fri {
            trainee {
              id
              email
              profile {
                name
              }
            }
            score
          }
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
