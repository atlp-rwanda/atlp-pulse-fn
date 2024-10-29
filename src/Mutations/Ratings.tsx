import { gql } from '@apollo/client';

export const ADD_RATING = gql`
  mutation AddRatings(
    $user: String!
    $sprint: Int!
    $quantity: String!
    $quality: String!
    $cohort: String!
    $professionalSkills: String!
    $orgToken: String!
  ) {
    addRatings(
      user: $user
      sprint: $sprint
      quantity: $quantity
      quality: $quality
      cohort: $cohort
      professional_Skills: $professionalSkills
      orgToken: $orgToken
    ) {
      user {
        id
        email
      }
      sprint
      phase
      cohort {
        name
        id
        phase {
          name
        }
      }
      quantity
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
      quality
      professional_Skills
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
    $quality: [String]
    $professionalSkills: [String]
    $feedbacks: [String]
    $orgToken: String!
  ) {
    updateRating(
      user: $user
      sprint: $sprint
      quantity: $quantity
      quality: $quality
      professional_Skills: $professionalSkills
      feedbacks: $feedbacks
      orgToken: $orgToken
    ) {
      user
      sprint
      quantity
      quality
      professional_Skills
      feedbacks {
        content
      }
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
