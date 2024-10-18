import { gql } from '@apollo/client';

export const GET_REPLIES = gql`
  query Query {
    getReplies {
      id
      user
      sprint
      bodyQuantity
      bodyQuality
      bodyProfessional
      createdAt
    }
  }
`;

export const GET_REPLIES_BY_USER = gql`
  query Query($userId: String) {
    getRepliesByUser(userId: $userId) {
      id
      user
      sprint
      bodyQuantity
      bodyQuality
      bodyProfessional
      createdAt
    }
  }
`;
