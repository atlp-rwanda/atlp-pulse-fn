import { gql } from '@apollo/client';

export const UPLOAD_RESUME = gql`
  mutation UploadResume($userId: ID!, $resume: String!) {
    uploadResume(userId: $userId, resume: $resume) {
      resume
    }
  }
`;
