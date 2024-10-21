import { gql } from '@apollo/client';

export const PAUSE_AND_RESUME_ATTENDANCE = gql`
  mutation PauseAndResumeTeamAttendance($team: String!, $orgToken: String) {
    pauseAndResumeTeamAttendance(team: $team, orgToken: $orgToken) {
      team {
        id
        name
        isJobActive
      },
      sanitizedAttendance {
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
  }
`;

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
    $day: String!
    $team: String!
    $phase: String!
    $trainees: [TraineeInput!]!
    $orgToken: String!
  ) {
    updateAttendance(
      week: $week
      day: $day
      team: $team
      phase: $phase
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

export const DELETE_ATTENDANCE = gql`
  mutation DeleteAttendance($week: Int!, $team: String!, $day: String!) {
    deleteAttendance(week: $week, team: $team, day: $day) {
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
