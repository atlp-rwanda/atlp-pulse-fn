import { gql } from '@apollo/client';

export const SEND_INVITATION = gql`
  mutation SendInvitation($invitees: [InviteeInput!]!, $orgToken: String!) {
    sendInvitation(invitees: $invitees, orgToken: $orgToken) {
      status
      invitees {
        email
        role
      }
      orgToken
      createdAt
    }
  }
`;
