import { gql } from '@apollo/client';

export const ADD_RATING = gql`
  mutation AddRatings(
    $user: String!
    $sprint: Int!
    $quantity: String!
    $quality: String!
    $cohort: String!
    $professionalSkills: String!
    $orgToken: String!
    $quantityRemark: String
    $bodyQuality: String
    $qualityRemark: String
    $bodyQuantity: String
    $professionalRemark: String
    $bodyProfessional: String
  ) {
    addRatings(
      user: $user
      sprint: $sprint
      quantity: $quantity
      quality: $quality
      cohort: $cohort
      professional_Skills: $professionalSkills
      orgToken: $orgToken
      quantityRemark: $quantityRemark
      bodyQuality: $bodyQuality
      qualityRemark: $qualityRemark
      bodyQuantity: $bodyQuantity
      professionalRemark: $professionalRemark
      bodyProfessional: $bodyProfessional
    ) {
      user {
        id
        email
      }
      sprint
      phase
      cohort {
        name
        id
        phase {
          name
        }
      }
      quantity
      quantityRemark
      feedbacks {
        sender {
          email
          id
          profile {
            avatar
            name
          }
          role
        }
        content
        createdAt
      }
      bodyQuantity
      quality
      qualityRemark
      bodyQuality
      professional_Skills
      professionalRemark
      bodyProfessional
      approved
      coordinator
    }
  }
`;

export const UPDATE_RATING = gql`
  mutation Mutation(
    $user: String!
    $sprint: Int!
    $quantity: [String]
    $quantityRemark: [String]
    $quality: [String]
    $qualityRemark: [String]
    $professionalSkills: [String]
    $professionalRemark: [String]
    $feedbacks: [String]
    $orgToken: String!
  ) {
    updateRating(
      user: $user
      sprint: $sprint
      quantity: $quantity
      quantityRemark: $quantityRemark
      quality: $quality
      qualityRemark: $qualityRemark
      professional_Skills: $professionalSkills
      professionalRemark: $professionalRemark
      feedbacks: $feedbacks
      orgToken: $orgToken
    ) {
      user
      sprint
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
      feedbacks {
        content
      }
    }
  }
`;

export const ADD_FEEDBACK = gql`
  mutation AddRatingFeedback($sprint: String, $user: String, $content: String) {
    AddRatingFeedback(sprint: $sprint, user: $user, content: $content) {
      sender {
        email
        id
        role
      }
      createdAt
      content
    }
  }
`;

export const GET_FEEDBACK_SUBSCRIPTION = gql`
  subscription Newfeedback($sprint: String, $user: String) {
    newfeedback(sprint: $sprint, user: $user) {
      sender {
        email
        id
        role
      }
      createdAt
      content
    }
  }
`;

export const GET_FEEDBACKS_SUBSCRIPTION = gql`
  subscription Newfeedbacks($sprintUser: String) {
    newfeedbacks(sprint_user: $sprintUser) {
      sprint
      user
      data {
        content
        createdAt
        sender {
          email
          id
          role
        }
      }
    }
  }
`;

export const APPROVE_RATING = gql`
  mutation Mutation($user: String!, $sprint: Int!) {
    approveRating(user: $user, sprint: $sprint) {
      user
      sprint
      quantity
      quantityRemark
      qualityRemark
      professionalRemark
      professional_Skills
      approved
      quality
    }
  }
`;

export const REJECT_RATING = gql`
  mutation Mutation($user: String!, $sprint: Int!) {
    rejectRating(user: $user, sprint: $sprint)
  }
`;

export const FETCH_SPRINTS = gql`
  query fetchSprints($orgToken: String!){
    fetchSprints(orgToken: $orgToken)
  }
`

export const ADD_RATINGS_BY_FILE = gql`
  mutation addRatingsByFile($file: Upload!, $sprint: Int!, $orgToken: String!){
    addRatingsByFile(file: $file, sprint: $sprint orgToken: $orgToken){
      NewRatings {
      user {
        email
      }
      sprint
      phase
      quality
      quantity
      professional_Skills
      feedbacks {
        sender {
          email
        }
        content
        createdAt
      }
      cohort {
        name
      }
    }
    RejectedRatings{
      email
      quantity
      quality
      professional_skills
      feedBacks
    }
    UpdatedRatings {
      quantity
      quality
      professional_Skills
      feedbacks {
        content
      }
      oldFeedback
    }
    }
  }
`
