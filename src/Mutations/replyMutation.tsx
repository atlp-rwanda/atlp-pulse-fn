import { gql } from '@apollo/client';

export const ADD_REPLY = gql`
  mutation AddReply(
    $sprint: Int!
  ) {
    addReply(
      sprint: $sprint
    ) {
      id
      user
      sprint
      createdAt
    }
  }
`;

export const UPDATE_TO_REPLY = gql`
  mutation UpdateToReply(
    $user: String!
    $sprint: Int!
    $orgToken: String!
    $quantity: [String]
    $quality: [String]
    $professionalSkills: [String]
  ) {
    updateToReply(
      user: $user
      sprint: $sprint
      orgToken: $orgToken
      quantity: $quantity
      quality: $quality
      professional_Skills: $professionalSkills
    ) {
      user
      sprint
      quantity
      quality
      professional_Skills
      approved
    }
  }
`;

export const REMOVE_REPLY = gql`
  mutation DeleteReply($deleteReplyId: ID) {
    deleteReply(id: $deleteReplyId)
  }
`;
