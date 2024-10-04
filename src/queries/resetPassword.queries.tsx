import { gql } from '@apollo/client';

export const VERIFY_RESET_PASSWORD_TOKEN = gql`
  query Query($token: String!) {
    verifyResetPasswordToken(token: $token)
  }
`;
