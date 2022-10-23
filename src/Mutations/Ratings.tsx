import { gql } from '@apollo/client';

export const GET_RATINGS = gql`
  query FetchRatings($orgToken: String) {
    fetchRatings(orgToken: $orgToken) {
      user {
        id
        email
      }
      sprint
      quantity
      quantityRemark
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

export const ADD_RATING = gql`
  mutation AddRatings(
    $user: String!
    $sprint: Int!
    $quantity: String!
    $quality: String!
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
      quantity
      quantityRemark
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
      }
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

export const GET_USERS = gql`
  query GetAllUsers($cohortName: ID!) {
    fetchCohortsCoordinator(cohortName: $cohortName) {
      name
      phase
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
