import { gql } from '@apollo/client';

export const GET_REPLIES = gql`
  query Query {
    getReplies {
      id
      user
      sprint
      quantityRemark
      qualityRemark
      professionalRemark
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
      quantityRemark
      qualityRemark
      professionalRemark
      bodyQuantity
      bodyQuality
      bodyProfessional
      createdAt
    }
  }
`;

export const ADD_REPLY = gql`
  mutation AddReply(
    $sprint: Int!
    $bodyQuantity: String
    $bodyQuality: String
    $bodyProfessional: String
  ) {
    addReply(
      sprint: $sprint
      bodyQuantity: $bodyQuantity
      bodyQuality: $bodyQuality
      bodyProfessional: $bodyProfessional
    ) {
      id
      user
      sprint
      quantityRemark
      qualityRemark
      professionalRemark
      bodyQuantity
      bodyQuality
      bodyProfessional
      createdAt
    }
  }
`;

export const REMOVE_REPLY = gql`
  mutation DeleteReply($deleteReplyId: ID) {
    deleteReply(id: $deleteReplyId)
  }
`;
