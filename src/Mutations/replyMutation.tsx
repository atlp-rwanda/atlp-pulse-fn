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
      quantityRemark
      qualityRemark
      professionalRemark
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
    $quantityRemark: [String]
    $quality: [String]
    $qualityRemark: [String]
    $professionalSkills: [String]
    $professionalRemark: [String]
  ) {
    updateToReply(
      user: $user
      sprint: $sprint
      orgToken: $orgToken
      bodyQuality: $bodyQuality
      bodyQuantity: $bodyQuantity
      bodyProfessional: $bodyProfessional
      quantity: $quantity
      quantityRemark: $quantityRemark
      quality: $quality
      qualityRemark: $qualityRemark
      professional_Skills: $professionalSkills
      professionalRemark: $professionalRemark
    ) {
      user
      sprint
      bodyProfessional
      bodyQuality
      bodyQuantity
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
      approved
    }
  }
`;

export const REMOVE_REPLY = gql`
  mutation DeleteReply($deleteReplyId: ID) {
    deleteReply(id: $deleteReplyId)
  }
`;
