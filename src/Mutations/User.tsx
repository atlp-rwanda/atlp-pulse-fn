import { gql } from '@apollo/client';

export const DROP_TTL_USER = gql`
  mutation DropTTLUser($email: String!, $reason: String!) {
    dropTTLUser(email: $email, reason: $reason)
  }
`;

export default DROP_TTL_USER;
