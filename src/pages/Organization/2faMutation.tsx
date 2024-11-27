import { gql } from '@apollo/client';

export const EnableTwoFactorAuth = gql`
  mutation EnableTwoFactorAuth($email: String!) {
    enableTwoFactorAuth(email: $email)
  }
`;

export const LoginWithTwoFactorAuthentication = gql`
  mutation LoginWithTwoFactorAuthentication(
    $email: String!
    $otp: String!
    $twoWayVerificationToken: String!
  ) {
    loginWithTwoFactorAuthentication(
      email: $email
      otp: $otp
      TwoWayVerificationToken: $twoWayVerificationToken
    ) {
      message
      token
      user {
        email
      }
    }
  }
`;

export const DisableTwoFactorAuth = gql`
  mutation DisableTwoFactorAuth($email: String!) {
    disableTwoFactorAuth(email: $email)
  }
`;
