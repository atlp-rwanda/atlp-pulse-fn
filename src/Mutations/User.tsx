import { gql } from '@apollo/client';

export const DROP_TTL_USER = gql`
  mutation DropTTLUser($email: String!, $reason: String!) {
    dropTTLUser(email: $email, reason: $reason)
  }
`;

export const UNDROP_TTL_USER = gql`
  mutation UnDropTTLUser($email: String!) {
    undropTTLUser(email: $email)
  }
`;

export default DROP_TTL_USER;
