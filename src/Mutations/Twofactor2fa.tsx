/* eslint-disable */
// mutations.ts
import gql from 'graphql-tag';

export const ENABLE_TWO_FACTOR_AUTH = gql`
  mutation EnableTwoFactorAuth($email: String!) {
    enableTwoFactorAuth(email: $email)
  }
`;

export const DISABLE_TWO_FACTOR_AUTH = gql`
  mutation DisableTwoFactorAuth($email: String!) {
    disableTwoFactorAuth(email: $email)
  }
`;

export const VERIFY_ONE_TIME_CODE = gql`
  mutation VerifyOneTimeCode($email: String!, $code: String!) {
    verifyOneTimeCode(email: $email, code: $code)
  }
`;
