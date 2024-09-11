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

export const UPLOAD_INVITATION_FILE = gql`
  mutation uploadInvitationFile($file: Upload!, $orgToken: String!) {
    uploadInvitationFile(file: $file, orgToken: $orgToken) {
      filename
      data {
        email
        success
      }
      invalidRows
      message
      sentEmails
    }
  }
`;

export const DELETE_INVITATION = gql`
  mutation DeleteInvitation($invitationId: ID!) {
    deleteInvitation(invitationId: $invitationId) {
      message
    }
  }
`;

export const CANCEL_INVITATION = gql`
  mutation CancelInvitation($id: ID!, $orgToken: String!) {
    cancelInvitation(id: $id, orgToken: $orgToken) {
      status
      createdAt
    }
  }
`;
