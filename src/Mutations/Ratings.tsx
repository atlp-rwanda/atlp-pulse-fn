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
    quality
    qualityRemark
    professional_Skills
    professionalRemark
    coordinator
  }
}
`;

export const ADD_RATING = gql`
mutation Mutation($user: String!, $sprint: Int!, $quantity: String!, $quality: String!, $professionalSkills: String!, $orgToken: String!, $qualityRemark: String, $professionalRemark: String, $quantityRemark: String) {
  addRatings(user: $user, sprint: $sprint, quantity: $quantity, quality: $quality, professional_Skills: $professionalSkills, orgToken: $orgToken, qualityRemark: $qualityRemark, professionalRemark: $professionalRemark, quantityRemark: $quantityRemark) {
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
