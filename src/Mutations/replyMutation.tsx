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
    body
    coordinator
    createdAt
  }
}
`;

export const ADD_REPLY = gql`
mutation AddReply($coordinator: String!, $sprint: Int!, $body: String!) {
    addReply(coordinator: $coordinator, sprint: $sprint, body: $body) {
      id
      user
      sprint
      quantityRemark
      qualityRemark
      professionalRemark
      body
      coordinator
      createdAt
    }
  }
`;

export const REMOVE_REPLY = gql`
mutation DeleteReply($deleteReplyId: ID) {
    deleteReply(id: $deleteReplyId)
  }
`;
