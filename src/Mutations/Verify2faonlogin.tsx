import { gql } from 'graphql-tag';

export const VERIFY_2FA = gql`
  mutation Verify2FA($email: String!, $code: String!) {
    verify2FA(email: $email, code: $code) {
      token
    }
  }
`
