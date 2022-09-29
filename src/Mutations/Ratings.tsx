import { gql } from '@apollo/client';

export const GET_RATINGS = gql`
query FetchTrainees {
  fetchRatings {
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
  }
}
`;

export const ADD_RATING = gql`
mutation Mutation($user: String!, $sprint: Int!, $quantity: String!, $quality: String!, $professionalSkills: String!, $quantityRemark: String, $qualityRemark: String, $professionalRemark: String) {
  addRatings(user: $user, sprint: $sprint, quantity: $quantity, quality: $quality, professional_Skills: $professionalSkills, quantityRemark: $quantityRemark, qualityRemark: $qualityRemark, professionalRemark: $professionalRemark) {
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
mutation Mutation($user: String!, $sprint: Int!, $quantity: [String], $quantityRemark: [String], $quality: [String], $qualityRemark: [String], $professionalSkills: [String], $professionalRemark: [String]) {
  updateRating(user: $user, sprint: $sprint, quantity: $quantity, quantityRemark: $quantityRemark, quality: $quality, qualityRemark: $qualityRemark, professional_Skills: $professionalSkills, professionalRemark: $professionalRemark) {
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
}`;
