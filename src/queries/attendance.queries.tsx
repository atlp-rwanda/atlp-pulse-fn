import { gql } from '@apollo/client';

export const GET_TEAM_ATTENDANCE = gql`
  query GetTeamAttendance($team: String!, $orgToken: String) {
    getTeamAttendance(team: $team, orgToken: $orgToken) {
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

export const GET_TRAINEE_ATTENDANCE = gql`
  query GetTraineeAttendance($traineeId: String) {
    getTraineeAttendance(traineeId: $traineeId) {
      teamName
      traineeId
      allPhasesAverage
      phases {
        phase {
          _id
          name
        }
        phaseAverage
        weeks {
          week
          weekAverage
          daysStatus {
            mon {
              date
              score
            }
            tue {
              date
              score
            }
            wed {
              date
              score
            }
            thu {
              date
              score
            }
            fri {
              date
              score
            }
          }
        }
      }
    }
  }
`;
