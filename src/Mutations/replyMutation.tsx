import { gql } from '@apollo/client';

export const ADD_REPLY = gql`
  mutation AddReply(
    $sprint: Int!
    $bodyQuantity: String
    $bodyQuality: String
    $bodyProfessional: String
  ) {
    addReply(
      sprint: $sprint
      bodyQuantity: $bodyQuantity
      bodyQuality: $bodyQuality
      bodyProfessional: $bodyProfessional
    ) {
      id
      user
      sprint
      # generalRemark
      bodyQuantity
      bodyQuality
      bodyProfessional
      createdAt
    }
  }
`;

export const UPDATE_TO_REPLY = gql`
  mutation UpdateToReply(
    $user: String!
    $sprint: Int!
    $orgToken: String!
    $bodyQuality: [String]
    $bodyQuantity: [String]
    $bodyProfessional: [String]
    $quantity: [String]
    $quality: [String]
    # $generalRemark: [String]
    $professionalSkills: [String]
  ) {
    updateToReply(
      user: $user
      sprint: $sprint
      orgToken: $orgToken
      bodyQuality: $bodyQuality
      bodyQuantity: $bodyQuantity
      bodyProfessional: $bodyProfessional
      quantity: $quantity
      quality: $quality
      # generalRemark: $generalRemark
      professional_Skills: $professionalSkills
    ) {
      user
      sprint
      bodyProfessional
      bodyQuality
      bodyQuantity
      quantity
      quality
      # generalRemark
      professional_Skills
      approved
    }
  }
`;

export const REMOVE_REPLY = gql`
  mutation DeleteReply($deleteReplyId: ID) {
    deleteReply(id: $deleteReplyId)
  }
`;
