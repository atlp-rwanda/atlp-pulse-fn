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
    }
  }
`;
export const FETCH_ALL_RATINGS = gql`
  query FetchAllRatings($orgToken: String) {
    fetchAllRatings(orgToken: $orgToken) {
      user {
        id
        email
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
    }
  }
`;

export const ADD_RATING = gql`
  mutation AddRatings(
    $user: String!
    $sprint: Int!
    $quantity: String!
    $quality: String!
    $cohort: String!
    $professionalSkills: String!
    $orgToken: String!
    $quantityRemark: String
    $bodyQuality: String
    $qualityRemark: String
    $bodyQuantity: String
    $professionalRemark: String
    $bodyProfessional: String
  ) {
    addRatings(
      user: $user
      sprint: $sprint
      quantity: $quantity
      quality: $quality
      cohort: $cohort
      professional_Skills: $professionalSkills
      orgToken: $orgToken
      quantityRemark: $quantityRemark
      bodyQuality: $bodyQuality
      qualityRemark: $qualityRemark
      bodyQuantity: $bodyQuantity
      professionalRemark: $professionalRemark
      bodyProfessional: $bodyProfessional
    ) {
      user {
        id
        email
      }
      sprint
      cohort {
        name
        id
        phase {
          name
        }
      }
      quantity
      quantityRemark
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
      bodyQuantity
      quality
      qualityRemark
      bodyQuality
      professional_Skills
      professionalRemark
      bodyProfessional
      approved
      coordinator
    }
  }
`;

export const UPDATE_RATING = gql`
  mutation Mutation(
    $user: String!
    $sprint: Int!
    $quantity: [String]
    $quantityRemark: [String]
    $quality: [String]
    $qualityRemark: [String]
    $professionalSkills: [String]
    $professionalRemark: [String]
    $orgToken: String!
  ) {
    updateRating(
      user: $user
      sprint: $sprint
      quantity: $quantity
      quantityRemark: $quantityRemark
      quality: $quality
      qualityRemark: $qualityRemark
      professional_Skills: $professionalSkills
      professionalRemark: $professionalRemark
      orgToken: $orgToken
    ) {
      user
      sprint
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
    }
  }
`;

export const ADD_FEEDBACK = gql`
  mutation AddRatingFeedback($sprint: String, $user: String, $content: String) {
    AddRatingFeedback(sprint: $sprint, user: $user, content: $content) {
      sender {
        email
        id
        role
      }
      createdAt
      content
    }
  }
`;
export const GET_FEEDBACK_SUBSCRIPTION = gql`
  subscription Newfeedback($sprint: String, $user: String) {
    newfeedback(sprint: $sprint, user: $user) {
      sender {
        email
        id
        role
      }
      createdAt
      content
    }
  }
`;
export const GET_FEEDBACKS_SUBSCRIPTION = gql`
  subscription Newfeedbacks($sprintUser: String) {
    newfeedbacks(sprint_user: $sprintUser) {
      sprint
      user
      data {
        content
        createdAt
        sender {
          email
          id
          role
        }
      }
    }
  }
`;
export const APPROVE_RATING = gql`
  mutation Mutation($user: String!, $sprint: Int!) {
    approveRating(user: $user, sprint: $sprint) {
      user
      sprint
      quantity
      quantityRemark
      qualityRemark
      professionalRemark
      professional_Skills
      approved
      quality
    }
  }
`;

export const REJECT_RATING = gql`
  mutation Mutation($user: String!, $sprint: Int!) {
    rejectRating(user: $user, sprint: $sprint)
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
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
      average
      cohort {
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
          endDateb
          startDate
          phase {
            name
            activeRepos
            gitHubOrganisation
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
