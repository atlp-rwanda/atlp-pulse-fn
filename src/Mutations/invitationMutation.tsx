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