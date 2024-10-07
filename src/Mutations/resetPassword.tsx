import { gql } from '@apollo/client';

export const FORGOT_PASSWORD = gql`
  mutation ResetUserPassword(
    $password: String!
    $confirmPassword: String!
    $token: String!
  ) {
    resetUserPassword(
      password: $password
      confirmPassword: $confirmPassword
      token: $token
    )
  }
`;
export const RESET_PASSWORD_EMAIL = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
