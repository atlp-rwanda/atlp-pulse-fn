import { gql } from '@apollo/client';

export const GET_TEAM_ATTENDANCE = gql`
  query GetTeamAttendance($team: String!, $orgToken: String) {
    getTeamAttendance(team: $team, orgToken: $orgToken) {
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
export const GET_ATTENDANCE_BY_ID = gql`
  query GetAttendance($id: ID!) {
    getTraineeAttendanceByID(id: $id) {
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
export const GET_WEEKLY_ATTENDANCE = gql`
  query GetTraineeAttendanceByID($traineeEmail: String!) {
    getTraineeAttendanceByID(traineeEmail: $traineeEmail) {
      weekNumber
      traineeAttendance {
        days
        value
      }
    }
  }
`;
