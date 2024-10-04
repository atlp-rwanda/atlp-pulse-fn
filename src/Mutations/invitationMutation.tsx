import { gql } from '@apollo/client';

export const SEND_INVITATION = gql`
  mutation SendInvitation($invitees: [InviteeInput!]!,$orgName:String!,$orgToken: String!) {
    sendInvitation(invitees: $invitees,orgName:$orgName, orgToken: $orgToken) {
      status
      invitees {
        email
        role
      }
      orgName
      orgToken
      createdAt
    }
  }
`;

export const UPLOAD_INVITATION_FILE = gql`
  mutation uploadInvitationFile($file: Upload!,$orgName:String!, $orgToken: String!) {
    uploadInvitationFile(file: $file,orgName:$orgName,orgToken: $orgToken) {
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

export const UPDATE_INVITATION = gql`
  mutation UpdateInvitation(
    $invitationId: ID!
    $orgToken: String!
    $newEmail: String
    $newRole: String
  ) {
    updateInvitation(
      invitationId: $invitationId
      orgToken: $orgToken
      newEmail: $newEmail
      newRole: $newRole
    ) {
      id
      invitees {
        email
        role
      }
      inviterId
      orgToken
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

export const RESEND_INVITATION = gql`
  mutation ResendInvitation($invitationId: ID!, $orgToken: String!) {
    resendInvitation(invitationId: $invitationId, orgToken: $orgToken) {
      success
      message
    }
  }
`;

