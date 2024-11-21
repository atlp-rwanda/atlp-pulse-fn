import { gql } from '@apollo/client';

export const DROP_TTL_USER = gql`
  mutation DropTTLUser($email: String!, $reason: String!) {
    dropTTLUser(email: $email, reason: $reason)
  }
`;

export const DROP_COORDINATOR = gql`
  mutation DropCordinator($id: String!, $reason: String!) {
    dropCordinator(id: $id, reason: $reason)
  }
`;
export const UNDROP_COORDINATOR = gql`
  mutation UndropCordinator($id: String!) {
    undropCordinator(id: $id)
  }
`;

export const UNDROP_TTL_USER = gql`
  mutation UnDropTTLUser($email: String!) {
    undropTTLUser(email: $email)
  }
`;

export default DROP_TTL_USER;
