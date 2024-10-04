import { gql } from '@apollo/client';

export const GET_RATINGS = gql`
  query Query($orgToken: String) {
    fetchRatings(orgToken: $orgToken) {
      user {
        id
        email
      }
      sprint
      quantity
      bodyQuantity
      quantityRemark
      quality
      bodyProfessional
      qualityRemark
      professional_Skills
      professionalRemark
      bodyQuality
      coordinator
      average
      cohort {
        name
        phase {
          name
        }
      }
    }
  }
`;

export const RATING_BY_COHORT = gql`
  query GetAllCohorts($cohortName: String) {
    fetchRatingByCohort(CohortName: $cohortName) {
      sprint
      quantity
      approved
      coordinator
      average
      cohort {
        name
        id
        phase {
          name
        }
      }
      user {
        id
        email
        profile {
          name
        }
      }
      quantityRemark
      bodyQuantity
      quality
      qualityRemark
      bodyQuality
      professional_Skills
      professionalRemark
      bodyProfessional
      feedbacks {
        sender {
          email
          id
          profile {
            avatar
            name
          }
          role
        }
        content
        createdAt
      }
      user {
        id
        email
      }
      quantityRemark
      bodyQuantity
      quality
      qualityRemark
      bodyQuality
      professional_Skills
      professionalRemark
      bodyProfessional
    }
  }
`;

export const FETCH_ALL_RATINGS = gql`
  query FetchAllRatings($orgToken: String) {
    fetchAllRatings(orgToken: $orgToken) {
      user {
        id
        email
        profile {
          firstName
          lastName
        }
        team {
          name
        }
      }
      sprint
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
      average
      cohort {
        name
        phase {
          name
        }
      }
      coordinator
      feedbacks {
        content
      }
    }
  }
`;

export const TRAINEE_RATING = gql`
  query Query {
    fetchRatingsTrainee {
      user {
        id
        email
      }
      sprint
      phase
      sprint
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
      average
      cohort {
        name
        phase {
          name
        }
        coordinator {
          email
          profile {
            name
          }
        }
      }
      feedbacks {
        sender {
          email
          id
          profile {
            avatar
            name
          }
          role
        }
        content
        createdAt
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetAllUsers($cohortName: ID!) {
    fetchCohortsCoordinator(cohortName: $cohortName) {
      name
      phase {
        name
      }
      coordinator {
        id
      }
      members {
        id
        role
        email
      }
      program {
        name
      }
      id
    }
  }
`;

export const GET_COORDINATOR_COHORTS_QUERY = gql`
  query GetCoordinatorCohorts($orgToken: String) {
    getCoordinatorCohorts(orgToken: $orgToken) {
      name
      id
    }
  }
`;

export const GET_ALL_TRAINEES = gql`
  query GetAllUsers($orgToken: String) {
    getAllUsers(orgToken: $orgToken) {
      role
      email
      team {
        name
        cohort {
          endDate
          startDate
          phase {
            name
            description
          }
          name
          program {
            organization {
              name
            }
            name
            manager {
              role
              email
              profile {
                name
                firstName
                lastName
              }
            }
          }
        }
      }
    }
  }
`;
