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
export const VERIFY_RESET_PASSWORD_TOKEN = gql`
  query Query($token: String!) {
    verifyResetPasswordToken(token: $token)
  }
`;
